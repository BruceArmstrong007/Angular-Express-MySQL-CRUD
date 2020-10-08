import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DisplayComponent } from './display/display.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './display/edit/edit.component';
import { Err404Component } from './err404/err404.component';
import { DeleteComponent } from './display/delete/delete.component';

const routes: Routes = [
  {
    path:"edit/:id",
    component:EditComponent
  },
  {
    path:"create",
    component:CreateComponent
  },
  {
    path:"",
    component:DisplayComponent
  },
  {
    path:"delete/:id",
    component:DeleteComponent
  },
  {
    path:"**",
    component:Err404Component
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
