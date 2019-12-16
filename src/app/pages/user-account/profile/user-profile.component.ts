import { Component } from "@angular/core";

import { Store } from "@ngrx/store";
import { selectUser } from "@shared/state/users/user.selector";
import { AppState } from "@shared/state/app.states";

@Component({
  selector: "user-profile",
  templateUrl: "./user-profile.component.html"
})
export class UserProfileComponent {
  profile$ = this.store$.select(selectUser);

  constructor(private store$: Store<AppState>) {}
}
