import * as AuthActions from "./auth.actions";

import { Action, createReducer, on } from "@ngrx/store";
import { AuthState, initialState } from "./auth.state";

const reducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { token }) => ({
    ...state,
    token,
    error: null,
    isAuthenticated: true
  })),
  on(AuthActions.logout, () => initialState)
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}

export const selectAuthUser = (state: AuthState) => state.token;
