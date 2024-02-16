import { Routes } from '@angular/router';
import { AmantisLandingPageComponent } from './amantis-landing-page/amantis-landing-page.component';
import { AmantisContactPageComponent } from './amantis-contact-page/amantis-contact-page.component';
import { AmantisWipPageComponent } from './amantis-wip-page/amantis-wip-page.component';
import { AmantisTpvPageComponent } from './amantis-tpv-page/amantis-tpv-page.component';

export const routes: Routes = [
    { path: 'landing_page', component: AmantisLandingPageComponent },
    { path: 'contact_page', component: AmantisContactPageComponent },
    { path: 'tpv_page', component: AmantisTpvPageComponent },
    { path: 'wip_page', component: AmantisWipPageComponent },
    { path: '**', component: AmantisLandingPageComponent },
];
