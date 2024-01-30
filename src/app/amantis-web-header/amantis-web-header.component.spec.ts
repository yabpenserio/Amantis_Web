import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmantisWebHeaderComponent } from './amantis-web-header.component';

describe('AmantisWebHeaderComponent', () => {
  let component: AmantisWebHeaderComponent;
  let fixture: ComponentFixture<AmantisWebHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmantisWebHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmantisWebHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
