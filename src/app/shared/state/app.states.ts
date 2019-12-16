import { AuthEffects } from "./auth/auth.effects";
import { AuthState } from "./auth/auth.state";
import { ProductEffects } from "./product/product.effects";
import { ProductState } from "./product/product.state";
import { UserEffects } from "./users/user.effects";
import { UserState } from "./users/user.state";
import { authReducer } from "./auth/auth.reducer";
import { productReducer } from "./product/product.reducer";
import { userReducer } from "./users/user.reducer";

export const reducers = {
  auth: authReducer,
  products: productReducer,
  user: userReducer
};

export const effects = [ProductEffects, AuthEffects, UserEffects];

export interface AppState {
  auth: AuthState;
  products: ProductState;
  user: UserState;
}
