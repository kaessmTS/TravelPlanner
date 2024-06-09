import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabModePage } from './tab-mode.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { SharedModule } from '../shared/shared.module'; // Import SharedModule
import { TabModePageRoutingModule } from './tab-mode-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TabModePageRoutingModule,
    SharedModule
  ],
  declarations: [TabModePage]
})
export class TabModePageModule {}
