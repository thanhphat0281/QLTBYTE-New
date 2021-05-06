import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditHomeComponent } from './edit-home/edit-home.component';
import { LoginComponent } from './login/login.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { StorageComponent } from './storage/storage.component';
import { AccountManagementComponent } from './account-management/account-management.component';
import { RepairComponent } from './repair/repair.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"edit-home", component:EditHomeComponent},
  {path:"login", component:LoginComponent},
  {path:"equipment",component:EquipmentComponent},
  {path:"storage",component:StorageComponent},
  {path:"account-management",component:AccountManagementComponent},
  {path:"repair",component:RepairComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
