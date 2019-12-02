import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html"
})
export class AuthComponent {
  isLoginMode = false;
  constructor(private authService: AuthService) {
    console.log("Auth");
  }
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm) {
    if (!authForm.valid) return;

    const email = authForm.value.email;
    const password = authForm.value.password;

    if (this.isLoginMode) {
      //TODO implement login
    } else {
      this.authService.signup(email, password).subscribe(
        resp => {
          console.log(resp);
          authForm.reset();
        },
        error => console.log(error)
      );
    }
  }
}
