import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Newpost1Component } from './newpost1/newpost1.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path: 'home', component:Newpost1Component},
  {path: 'update', component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
