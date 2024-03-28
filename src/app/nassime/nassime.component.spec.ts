import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NassimeComponent } from './nassime.component';

describe('NassimeComponent', () => {
  let component: NassimeComponent;
  let fixture: ComponentFixture<NassimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NassimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NassimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
