import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, map } from "rxjs";
import { AuthRespons } from "./auth.service";

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate
{
    constructor(
        private authService:AuthRespons,
        private router:Router
        ){}

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

            return this.authService.userSubject
            .pipe(
            map(user => {
                console.log(user);
                const isAuth = !!user;
                if(isAuth){
                    return true;
                }
                return this.router.createUrlTree(['/Home'])
            })
        );
    }


}