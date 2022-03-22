import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PractitionsComponent } from './practitions.component';

const routes: Routes = [
  {
    path : '',
    component : PractitionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PractitionsRoutingModule { }
