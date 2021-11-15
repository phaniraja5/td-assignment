import {createAction, props} from "@ngrx/store";
import {User} from "../../User";

export const getUsers = createAction('[User] Get user');
export const getUsersSuccess = createAction(
  '[User] Get user success',
  (users: User[]) => ({ users })
  // props<{ movies: ReadonlyArray<Movie> }>()
);

export const getUserById = createAction('User By Id', props<{id: string | null}>())
export const getUserByIdSuccess = createAction(
  'Get User By Id success',
  (user: User) => ({ user })
   // props<{ id: string | number; item: User }>()
)
export const updateUser = createAction('Update User', props<{user: User}>())
export const updateUserSuccess = createAction(
  'Update User success',
  (user: User) => ({ user })
)

