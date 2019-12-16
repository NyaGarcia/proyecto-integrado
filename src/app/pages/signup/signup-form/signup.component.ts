import { FormBuilder, Validators } from "@angular/forms";

import { Component } from "@angular/core";
import { FieldMatchValidator } from "@shared/validators/field-match.validator";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "@environments/environment";

@Component({
  selector: "signup-form",
  templateUrl: "./signup.component.html",
  styleUrls: ['./signup.component.css']

})
export class SignupComponent {
  signupForm = this.fb.group(
    {
      name: ["", Validators.required],
      surname: ["", Validators.required],
      username: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      confirmEmail: ["", [Validators.required]],
      password: ["", Validators.required],
      confirmPassword: ["", [Validators.required]]
    },
    {
      validators: [
        FieldMatchValidator("email", "confirmEmail"),
        FieldMatchValidator("password", "confirmPassword")
      ]
    }
  );
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  signup() {
    //this.submitButton.disabled = true;
    this.http
      .post(`${environment.baseUrl}/user`, {
        ...this.signupForm.value,
        phone: 666
      })
      .subscribe(() => this.router.navigate(["/login"]));
  }
}
