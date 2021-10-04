import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GuardiansComponent} from "./guardians/guardians.component";
const routes: Routes = [
  {path:'home',component:GuardiansComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
