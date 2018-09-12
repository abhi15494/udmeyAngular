import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingModule } from './shopping-list/shopping.module';
import { AuthModule } from './auth/auth.module';
import { HttpModule } from '@angular/http';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // System Modules
    BrowserModule,
    HttpModule,

    // Routing Module
    AppRoutingModule,
    
    // Feature Modules
    ShoppingModule,
    AuthModule,
    
    // Shared Module
    SharedModule,

    // Core Module
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
