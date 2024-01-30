import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmantisContactPageComponent } from './amantis-contact-page.component';

describe('AmantisContactPageComponent', () => {
  let component: AmantisContactPageComponent;
  let fixture: ComponentFixture<AmantisContactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmantisContactPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmantisContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
