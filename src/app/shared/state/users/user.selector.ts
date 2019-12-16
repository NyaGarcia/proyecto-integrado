import { createFeatureSelector, createSelector } from "@ngrx/store";

import { UserState } from "./user.state";
import { selectedUser } from "./user.reducer";

export const selectUserState = createFeatureSelector<UserState>("user");

export const selectUser = createSelector(selectUserState, selectedUser);
