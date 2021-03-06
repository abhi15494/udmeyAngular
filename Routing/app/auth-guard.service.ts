import { 
    CanActivate, 
    ActivatedRouteSnapshot, 
    RouterStateSnapshot, 
    Router,
    CanActivateChild
} from "@angular/Router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
    // These data will come by angular before a router is loaded

    constructor(
        private auth: AuthService,
        private router: Router
    ){}

    canActivate( 
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot 
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.auth.isAuthenticated().then(
            ( authenticated: boolean ) => {
                if( authenticated ) return true;
                else this.router.navigate(["/"]);
            }
        );
    }

    canActivateChild(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot 
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(route, state);
    }
}