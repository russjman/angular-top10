import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10PanelComponent } from './top10-panel.component';

describe('Top10Component', () => {
  let component: Top10PanelComponent;
  let fixture: ComponentFixture<Top10PanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Top10PanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Top10PanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
