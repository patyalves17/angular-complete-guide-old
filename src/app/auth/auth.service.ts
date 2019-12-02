import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

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
    return this.http.post<AuthResponseData>(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBMFlnWfLIZGCmANVPmMhYEhwpr2OgkfYc",
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    );
  }
}
