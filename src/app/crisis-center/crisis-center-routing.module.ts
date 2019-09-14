import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CrisisListComponent} from './crisis-list/crisis-list.component';
import {CrisisDetailComponent} from './crisis-detail/crisis-detail.component';
import {CrisisCenterComponent} from './crisis-center/crisis-center.component';
import {CrisisCenterHomeComponent} from './crisis-center-home/crisis-center-home.component';
import {CanDeactivateGuard} from '../can-deactivate.guard';
import {CrisisDetailResolverService} from './crisis-detail-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: '',
            component: CrisisCenterHomeComponent
          },
          {
            path: ':id',
            resolve: {
              crisis: CrisisDetailResolverService
            },
            canDeactivate: [CanDeactivateGuard],
            component: CrisisDetailComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisCenterRoutingModule {
}
