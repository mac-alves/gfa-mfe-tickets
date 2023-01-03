import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { TokenAdapter } from '@gfa/gfa-infra';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private tokenAdapter: TokenAdapter, public router: Router) { }

  isTokenValid() {
    return this.tokenAdapter.tokenIsValid;
  }

  canActivate(): boolean {
    if (!this.isTokenValid()) {
      this.router.navigate(['auth']);
      return false;
    }

    return true;
  }
}
