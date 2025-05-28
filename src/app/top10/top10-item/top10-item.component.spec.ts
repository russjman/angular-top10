import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10ItemComponent } from './top10-item.component';

describe('Top10ItemComponent', () => {
  let component: Top10ItemComponent;
  let fixture: ComponentFixture<Top10ItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Top10ItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Top10ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
