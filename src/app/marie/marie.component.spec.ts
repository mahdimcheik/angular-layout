import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarieComponent } from './marie.component';

describe('MarieComponent', () => {
  let component: MarieComponent;
  let fixture: ComponentFixture<MarieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
