import { Observable } from "rxjs";
import { CanDeactivate, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/Router";

export interface CanComponentDeactivate{
    canDeactivate: ()=> Observable<boolean> | Promise<boolean> | boolean; 
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate>{
    //First is component where our deactivate guard is currently at,
    // currentRoute, currentState is compulsory
    // and nextState is optional
    canDeactivate(
        component: CanComponentDeactivate,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {
        return component.canDeactivate();
    }
}