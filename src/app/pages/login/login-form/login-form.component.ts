import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

import { AppState } from "@shared/state/app.states";
import { AuthService } from "@shared/services/auth.service";
import { MatButton } from "@angular/material";
import { Store } from "@ngrx/store";
import { first } from "rxjs/operators";
import { login } from "@shared/state/auth/auth.actions";

@Component({
  selector: "login-form",
  templateUrl: "login-form.component.html",
  styleUrls: ["./login-form.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private store$: Store<AppState>
  ) {
    // redirect to home if already logged in
    /* if (this.authService.currentUserValue) {
      this.router.navigate(["/"]);
    } */
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  get loginControls() {
    return this.loginForm.controls;
  }

  login() {
    const loginData = this.loginForm.value;
    this.store$.dispatch(login(loginData));
  }
}
