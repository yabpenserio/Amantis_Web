import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AmantisLandingPageComponent } from './amantis-landing-page/amantis-landing-page.component';
import { AmantisWebHeaderComponent } from './amantis-web-header/amantis-web-header.component';
import { AmantisWebFooterComponent } from './amantis-web-footer/amantis-web-footer.component';
import { AmantisPcPageComponent } from './amantis-pc-page/amantis-pc-page.component';
import { AmantisSoftwarePageComponent } from './amantis-software-page/amantis-software-page.component';
import { AmantisContactPageComponent } from './amantis-contact-page/amantis-contact-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AmantisLandingPageComponent, AmantisWebHeaderComponent, AmantisWebFooterComponent, AmantisPcPageComponent,AmantisSoftwarePageComponent,AmantisContactPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Amantis';
}
