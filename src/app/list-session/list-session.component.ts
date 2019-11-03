import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../core/api.service";
import {FixSession, DialogData} from "../model/fixSession.model";
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ChangeStatus } from '../change-status/change-status.component';

@Component({
  selector: 'app-list-session',
  templateUrl: './list-session.component.html',
  styleUrls: ['./list-session.component.css', './../app.component.css']
})

export class ListSessionComponent implements OnInit {
  displayedColumns: string[] = ['beginString','senderCompId', 'socketConnectHost', 'socketConnectPort', 'targetCompId', 'startTime', 'endTime', 'heartBtInt', 'status', 'action'];
  dataSource = new MatTableDataSource<FixSession>();
  fixSessions: FixSession[];
	fixSession: FixSession;
  dialogData: DialogData;
  
  indeterminate = false;
  
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService, public dialog: MatDialog) { }

  ngOnInit() {
  	
    this.loadPage();

    setInterval(() => this.loadPage(), 20000);
  }


  loadPage() {

    this.apiService.getSessions()
      .subscribe( data => {
          this.fixSessions = data.result;
          this.dataSource = new MatTableDataSource<FixSession>(this.fixSessions);
      });
  }

  changesStatus() {
    const dialogRef = this.dialog.open(ChangeStatus, {
      width: '800px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.indeterminate = false;
      this.loadPage();
    });
  } s

  startSession(session: FixSession) {
    this.apiService.startSession(session)
      .subscribe( data => {
          this.loadPage();
      });
  }

  stopSession(session: FixSession) {
    this.apiService.stopSession(session)
      .subscribe( data => {
          this.loadPage();
      });
  }

}
