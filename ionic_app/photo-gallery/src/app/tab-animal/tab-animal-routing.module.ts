import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabAnimalPage } from './tab-animal.page';

const routes: Routes = [
  {
    path: '',
    component: TabAnimalPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabAnimalPageRoutingModule {}
