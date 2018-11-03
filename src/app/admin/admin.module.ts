import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, AdminDashboardComponent, ManageHeroesComponent, ManageCrisesComponent]
})
export class AdminModule { }
