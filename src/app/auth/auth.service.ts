import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { throwError, BehaviorSubject, Subject } from "rxjs";
import { User } from "./user.model";

export interface AuthResponseData {
  email: string;
  expiresIn: string;
  idToken: string;
  kind: string;
  localId: string;
  refreshToken: string;
  registered?: string;
}

@Injectable({ providedIn: "root" })
export class AuthService {
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBMFlnWfLIZGCmANVPmMhYEhwpr2OgkfYc",
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBMFlnWfLIZGCmANVPmMhYEhwpr2OgkfYc",
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);

    this.user.next(user);
  }

  private handleError(errorResp: HttpErrorResponse) {
    console.log(errorResp);
    let errorMessage = "An error occurred";

    if (!errorResp.error || !errorResp.error.error) {
      return throwError(errorMessage);
    }

    switch (errorResp.error.error.message) {
      case "EMAIL_EXISTS":
        errorMessage = "this emails exists already.";
        break;

      case "INVALID_EMAIL":
        errorMessage = "this emails is invalid.";
        break;

      case "INVALID_PASSWORD":
        errorMessage = "this password is not correct.";
        break;
      case "EMAIL_NOT_FOUND":
        errorMessage = "this email does not exist.";
        break;

      case "USER_DISABLED":
        errorMessage =
          "This user account has been disabled by an administrator.";
        break;
    }

    return throwError(errorMessage);
  }
}
