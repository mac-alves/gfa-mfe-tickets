import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';
import { ListComponent } from './list/list.component';
import { GfaAuthGuard, GfaRoleGuard } from '@gfa/infra-angular';

const routes: Routes = [
  { path: 'tickets', redirectTo: 'tickets/list', pathMatch: 'full' },
  {
    path: 'tickets/list',
    component: ListComponent,
    canActivate: [GfaAuthGuard, GfaRoleGuard],
    data: {
      expectedRole: 'tickets'
    }
  },
  { path: '**', component: EmptyRouteComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppRoutingModule { }
