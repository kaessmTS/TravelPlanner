import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabAnimalPage } from './tab-animal.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { SharedModule } from '../shared/shared.module'; // Import SharedModule
import { TabAnimalPageRoutingModule } from './tab-animal-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TabAnimalPageRoutingModule,
    SharedModule
  ],
  declarations: [TabAnimalPage]
})
export class TabAnimalPageModule {}
