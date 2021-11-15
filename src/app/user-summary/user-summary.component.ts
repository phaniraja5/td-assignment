import {Component, Inject, Input, OnInit} from '@angular/core';
import {User} from "../User";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-user-summary',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.scss']
})
export class UserSummaryComponent implements OnInit {

  existingUser: User | undefined;
  newUser: User | undefined;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {existingUser: User, newUser: User}, public dialogRef: MatDialogRef<UserSummaryComponent>) { }

  ngOnInit(): void {
    this.existingUser = this.data.existingUser;
    this.newUser = this.data.newUser;
    console.log(this.existingUser);
    console.log(this.newUser);
  }

  cancel() {
    this.dialogRef.close(false);
  }

  confirm() {
    this.dialogRef.close(true);
  }
}
