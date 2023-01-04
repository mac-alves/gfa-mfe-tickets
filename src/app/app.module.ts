import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { GfaInfraAngularModule } from '@gfa/infra-angular';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GfaInfraAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
