import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GuardiansComponent} from "./guardians/guardians.component";
import {UrgenciesComponent} from "./urgencies/urgencies.component";
const routes: Routes = [
  {path:'home',component:GuardiansComponent},
  {path:'urgencies',component:UrgenciesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
