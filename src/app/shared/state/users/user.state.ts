import { User } from "@shared/interfaces/user.interface";

export type UserState = User;

export const InitialUserState: UserState = {
  id: null,
  name: null,
  username: null,
  password: null,
  surname: null,
  email: null,
  token: null,
  role: null
};
