import { Injectable } from '@angular/core';

import { TokenAdapter } from '@gfa/gfa-infra';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private tokenAdapter: TokenAdapter) { }

  isTokenValid() {
    return this.tokenAdapter.tokenIsValid;
  }

  singOut() {
    this.tokenAdapter.removeToken();
    document.location.href = '/auth';
  }

  hasPermission(permission: string) {
    const token = this.tokenAdapter.parsedToken;

    if (token) {
      return token.permissions.includes(permission);
    }

    return false;
  }
}
