import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ComposeMessageComponent} from './compose-message/compose-message.component';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/crisis-center',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
