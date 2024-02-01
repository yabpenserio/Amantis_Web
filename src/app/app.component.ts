import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { AmantisWebHeaderComponent } from './amantis-web-header/amantis-web-header.component';
import { AmantisWebFooterComponent } from './amantis-web-footer/amantis-web-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AmantisWebHeaderComponent, AmantisWebFooterComponent,RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Amantis';
}
