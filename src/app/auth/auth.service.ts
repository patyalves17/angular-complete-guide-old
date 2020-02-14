import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

interface AuthResponseData {
  email: string;
  expiresIn: string;
  idToken: string;
  kind: string;
  localId: string;
  refreshToken: string;
}

@Injectable({ providedIn: "root" })
export class AuthService {
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
        catchError(errorResp => {
          let errorMessage = "An error occurred";

          if (!errorResp.error || !errorResp.error.error) {
            return throwError(errorMessage);
          }

          switch (errorResp.error.error.message) {
            case "EMAIL_EXISTS":
              errorMessage = "this emails exists already";
              break;
          }

          return throwError(errorMessage);
        })
      );
  }
}
