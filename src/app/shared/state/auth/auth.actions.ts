import { createAction, props } from "@ngrx/store";

export const login = createAction(
  "[Auth] Login",
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  "[Auth] Login success",
  props<{ token: string }>()
);

export const loginFailed = createAction(
  "[Auth] Login failed",
  props<{ errorMessage: string }>()
);

export const logout = createAction("[Auth] Logout");
