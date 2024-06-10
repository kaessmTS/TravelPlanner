import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabAnimalPage } from './tab-animal.page';

describe('TabAnimalPage', () => {
  let component: TabAnimalPage;
  let fixture: ComponentFixture<TabAnimalPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabAnimalPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TabAnimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
