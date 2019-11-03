import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../core/api.service";
import {FixSession, DialogData} from "../model/fixSession.model";
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'change-status',
  templateUrl: './change-status.component.html',
  styleUrls: ['./change-status.component.css', './../app.component.css']
})

export class ChangeStatus {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    public dialogRef: MatDialogRef<ChangeStatus>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.form = formBuilder.group({
      senderCompId:[null, null],
      targetCompId: [null, null],
      beginString:[null, null],
      startTime:[null, null],
      endTime:[null, null],
      heartBtInt:[null, null],
      socketConnectPort:[null, null],
      socketConnectHost:[null, null]
    });
  }


  ngOnInit() {

    }


    save() {
        this.apiService.addSession(this.form.value).subscribe( data => {
              this.dialogRef.close(this.form.value);
            });
    }

    close() {
        this.dialogRef.close();
    }  
}
