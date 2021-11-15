import { Component, OnInit } from '@angular/core';
import {User} from "../User";
import {AppService} from "../services/app.service";
import {Router} from "@angular/router";
import { Store} from "@ngrx/store";
import {getUsers} from "../store/actions/user.actions";
import {UserState} from "../store/reducers/user.reducer";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'username', 'email', 'address', 'phone', 'companyName', 'edit'];
  dataSource: User[] = []
  users$ = this.store.select('users');
  constructor(private appService: AppService, private router: Router, private store: Store<UserState>) {
  }
  ngOnInit(): void {
    this.store.dispatch(getUsers());
    this.users$.subscribe(data => {
      this.dataSource = data
    })
  }
}
