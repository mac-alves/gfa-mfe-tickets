import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TokenAdapter } from '@gfa/gfa-infra';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { ListComponent } from './list/list.component';
import { AuthGuardService } from './auth-guard.service';
import { RoleGuardService } from './role-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    TokenAdapter,
    AuthGuardService,
    RoleGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
