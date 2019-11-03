import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeStatus } from './change-status.component';

describe('ChangeStatus', () => {
  let component: ChangeStatus;
  let fixture: ComponentFixture<ChangeStatus>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeStatus ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeStatus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
