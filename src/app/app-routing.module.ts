import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MotoPagesComponent } from './moto-pages/moto-pages.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  { path: 'home', component: HomeMainComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'moto-pages', component: MotoPagesComponent },
  { path: 'services', component: ServicesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
