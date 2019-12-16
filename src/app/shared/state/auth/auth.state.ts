export interface AuthState {
  isAuthenticated: boolean;
  error: string;
  token: string;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  error: null,
  token: null
};
