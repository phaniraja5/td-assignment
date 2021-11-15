import { createReducer, on } from '@ngrx/store';
import {User} from "../../User";
import {getUserByIdSuccess, getUsersSuccess, updateUserSuccess} from "../actions/user.actions";
import {coerceNumberProperty} from "@angular/cdk/coercion";

export interface UserState {
  users: Array<User>;
  userById: User;
}

const initialState: ReadonlyArray<User> = [];

export const userReducer = createReducer(
  initialState,
  on(getUsersSuccess, (state, { users }) => [...users]),
  on(getUserByIdSuccess, (state, { user }) => [user]),
  on(updateUserSuccess, (state, { user }) => [user])
);
