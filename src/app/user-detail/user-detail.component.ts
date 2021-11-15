import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Observable} from "rxjs";
import {User} from "../User";
import {switchMap} from "rxjs/operators";
import {AppService} from "../services/app.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {UserSummaryComponent} from "../user-summary/user-summary.component";
import {Store} from "@ngrx/store";
import {UserState} from "../store/reducers/user.reducer";
import {getUserById, updateUser} from "../store/actions/user.actions";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user$: Observable<User[]> | undefined;
  userById$ = this.store.select('userById');
  myForm: FormGroup | undefined;
  existingUser: User | undefined;
  newUser: User | undefined;

  ngOnInit(): void {
    this.user$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getUser(params.get('id')!))
    );
    this.user$.subscribe((data: User[]) => {
      this.existingUser = data[0]
      this.myForm = new FormGroup({
        id: new FormControl({value: this.existingUser.id, disabled: true}),
        name: new FormControl(this.existingUser.name),
        username: new FormControl(this.existingUser.username),
        email: new FormControl(this.existingUser.email),
        address: new FormGroup({
          street: new FormControl(this.existingUser.address.street),
          suite: new FormControl(this.existingUser.address.suite),
          city: new FormControl(this.existingUser.address.city),
          zipcode: new FormControl(this.existingUser.address.zipcode),
        }),
        phone: new FormControl(this.existingUser.phone),
        website: new FormControl(this.existingUser.website),
        company: new FormGroup({
          name: new FormControl(this.existingUser.company.name)
        })
      })
    })
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AppService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private store: Store<UserState>) { }

  updateUser(user: User) {
    this.service.updateUser(user.id, user).subscribe((data) => {
      this.router.navigateByUrl('users');
    })
  }

  submitUser(value: User) {
    this.newUser = {...value};
    const modalRef = this.dialog.open(UserSummaryComponent, {data: {existingUser: this.existingUser, newUser: this.newUser}});
    modalRef.afterClosed().subscribe((result) => {
      if (result && this.newUser) {
        this.updateUser(this.newUser);
      } else {
        this.router.navigateByUrl('users');
      }
    })
  }
}
