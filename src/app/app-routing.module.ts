import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { CompanyComponent } from './pages/company/company.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


export const routes: Routes = [
  { path: 'home', title: 'Home', component: HomeComponent },
  { path: 'services', title: 'Service', component: ServicesComponent },
  { path: 'technologies', title: 'Technologies', component: TechnologiesComponent },
  { path: 'portfolio', title: 'Portfolio', component: PortfolioComponent },
  { path: 'company', title: 'Company', component: CompanyComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', title: 'Page Not Found', component: NotFoundComponent },
  // Add more routes as needed
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
