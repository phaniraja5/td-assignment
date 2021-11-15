import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {find, map, mergeMap, switchMap} from 'rxjs/operators';
import {AppService} from "../../services/app.service";
import {User} from "../../User";
import {getUsers, getUsersSuccess, updateUser, updateUserSuccess} from "../actions/user.actions";
import {Store} from "@ngrx/store";
import {UserState} from "../reducers/user.reducer";

@Injectable()
export class UserEffect {
  constructor(
    private actions$: Actions,
    private appService: AppService,
    private store: Store<UserState>
  ) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUsers),
      mergeMap(() =>
        this.appService.getUsers()
          .pipe(map((data:User[]) => getUsersSuccess(data)))
      )
    )
  );

  // upateUser$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(updateUser),
  //     switchMap(({user}) => {
  //       this.store.select('users').pipe(
  //         map((data: User[]) => data.find((u) => {
  //           if (u.id === user.id) {
  //             updateUserSuccess(u);
  //           }
  //         }))
  //       )
  //     })
  //   )
  // )
}
