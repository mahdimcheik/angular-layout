import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericUserPageComponent } from './generic-user-page.component';

describe('GenericUserPageComponent', () => {
  let component: GenericUserPageComponent;
  let fixture: ComponentFixture<GenericUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericUserPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenericUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
