import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { Routes, RouterModule } from '@angular/Router';
import { AuthGuardService } from "./auth-guard.service";
import { CanDeactivateGuard } from "./servers/edit-server/canDeactivateGuard.service";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ErrorFoundComponent } from "./error-found/error-found.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent , 
      children: [
        { path: ':id/:name', component: UserComponent }
      ]
    },
    { path: 'servers', 
      component: ServersComponent, 
      // canActivate: [AuthGuardService] ,
      canActivateChild: [AuthGuardService],
      children: [
        { path: ':id', component: ServerComponent },
        { 
          path: ':id/edit', 
          component: EditServerComponent , 
          canDeactivate: [CanDeactivateGuard]
        }
      ]
    },
    // { path: 'not-found', component: PageNotFoundComponent },
    { 
      path: 'not-found', 
      component: PageNotFoundComponent,
      data: {message: "Page not found"}      
    },
    {
      path: "**", redirectTo: "/not-found"
    }
];
  
@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{
    
}