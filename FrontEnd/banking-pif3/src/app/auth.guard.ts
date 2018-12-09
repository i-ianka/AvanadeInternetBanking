import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad{

  constructor(private auth: AuthService, private router: Router, private user: UserService){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.auth.isLoggedIn){ 
        return true
      }
     else
      this.router.navigate(['login'])
      return false
  }

  private verificaAcesso(){
    if (this.auth.isLoggedIn){
      return true;
    }else
    return false;
  }
  canLoad( route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.verificaAcesso()
   // return this.permissions.canLoadChildren(this.currentUser, route)
  }
}
