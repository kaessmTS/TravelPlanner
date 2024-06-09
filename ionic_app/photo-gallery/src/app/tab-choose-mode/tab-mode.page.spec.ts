import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabModePage } from './tab-mode.page';

describe('TabModePage', () => {
  let component: TabModePage;
  let fixture: ComponentFixture<TabModePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabModePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TabModePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
