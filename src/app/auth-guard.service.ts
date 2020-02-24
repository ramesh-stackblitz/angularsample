import { Injectable }     from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';

import {AdminComponent} from './admin/admin.component';

    @Injectable()
    export class AuthGuard implements CanActivate {
      canActivate() {

    // if (this.user && this.user.profile.role == 'Guest') {
    //          this.router.navigate(['dashboard']);
    //     }
    //     console.log('AuthGuard#canActivate called');
          return true;
       }
//Constructor 
 constructor(private router: Router) { }
    }