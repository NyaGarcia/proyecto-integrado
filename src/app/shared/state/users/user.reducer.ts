import * as UserActions from "./user.actions";

import { Action, FEATURE_REDUCERS, createReducer, on } from "@ngrx/store";
import { InitialUserState, UserState } from "./user.state";

const reducer = createReducer(
  InitialUserState,
  on(UserActions.loadUserSuccess, (state, { user }) => ({
    ...state,
    ...user
  })),
  on(UserActions.updateUserSuccess, (state, { id, changes }) => ({
    ...state,
    id,
    ...changes
  })),
  on(UserActions.deleteUserSuccess, () => ({
    ...InitialUserState
  }))
);

export function userReducer(state: UserState | undefined, action: Action) {
  return reducer(state, action);
}

export const selectedUser = (state: UserState) => state;
