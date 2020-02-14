import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html"
})
export class AuthComponent {
  isLoginMode = false;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService) {
    console.log("Auth");
  }
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm) {
    if (!authForm.valid) return;

    this.isLoading = true;

    const email = authForm.value.email;
    const password = authForm.value.password;

    if (this.isLoginMode) {
      //TODO implement login
    } else {
      this.authService.signup(email, password).subscribe(
        resp => {
          console.log(resp);
          this.isLoading = false;
          authForm.reset();
        },
        errorMessage => {
          console.log(errorMessage);
          this.error = errorMessage;
          this.isLoading = false;
        }
      );
    }
  }
}
