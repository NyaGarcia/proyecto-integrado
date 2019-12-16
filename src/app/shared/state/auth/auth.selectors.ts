import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AuthState } from "./auth.state";
import { selectAuthUser } from "./auth.reducer";

export const selectAuthState = createFeatureSelector<AuthState>("auth");

export const selectAuthenticatedUser = createSelector(
  selectAuthState,
  selectAuthUser
);

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  ({ isAuthenticated }) => isAuthenticated
);
