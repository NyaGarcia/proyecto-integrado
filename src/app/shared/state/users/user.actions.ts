import { createAction, props } from "@ngrx/store";

import { User } from "@shared/interfaces/user.interface";

export const loadUser = createAction("[User] Load User");

export const loadUserSuccess = createAction(
  "[User] Load User success",
  props<{ user: User }>()
);

export const loadUserFailed = createAction(
  "[User] Load User failed",
  props<{ errorMessage: string }>()
);

export const updateUser = createAction(
  "[User] Update User",
  props<{ id: number; changes: Partial<User> }>()
);

export const updateUserSuccess = createAction(
  "[User] Update User success",
  props<{ id: number; changes: Partial<User> }>()
);

export const updateUserFailed = createAction(
  "[User] Update User failed",
  props<{ errorMessage: string }>()
);

export const deleteUser = createAction(
  "[User] Delete User",
  props<{ id: number }>()
);

export const deleteUserSuccess = createAction(
  "[User] Delete User success",
  props<{ id: number }>()
);

export const deleteUserFailed = createAction(
  "[User] Delete User failed",
  props<{ errorMessage: string }>()
);
