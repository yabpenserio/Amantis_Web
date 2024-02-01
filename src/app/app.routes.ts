import { Routes } from '@angular/router';
import { AmantisLandingPageComponent } from './amantis-landing-page/amantis-landing-page.component';
import { AmantisSoftwarePageComponent } from './amantis-software-page/amantis-software-page.component';
import { AmantisPcPageComponent } from './amantis-pc-page/amantis-pc-page.component';
import { AmantisContactPageComponent } from './amantis-contact-page/amantis-contact-page.component';

export const routes: Routes = [
    { path: 'landing_page', component: AmantisLandingPageComponent },
    { path: 'software_page', component: AmantisSoftwarePageComponent },
    { path: 'pc_page', component: AmantisPcPageComponent },
    { path: 'contact_page', component: AmantisContactPageComponent },
    { path: '**', component: AmantisLandingPageComponent },
];
