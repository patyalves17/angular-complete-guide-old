export class User {
  constructor(
    public name: string,
    public id: string,
    private _token: string,
    private _expirationDate: Date
  ) {}

  get token() {
    if (!this._token || new Date() > this._expirationDate) {
      return null;
    }
    return this._token;
  }
}
