import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabModePage } from './tab-mode.page';

const routes: Routes = [
  {
    path: '',
    component: TabModePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabModePageRoutingModule {}
