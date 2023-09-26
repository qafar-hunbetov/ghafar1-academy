import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { GalleryComponent } from './gallery/gallery.component';
import { LogoComponent } from './logo/logo.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TitleComponent } from './title/title.component';
import { HomeComponent } from './home/home.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MotoPagesComponent } from './moto-pages/moto-pages.component';
import { AboutForComponent } from './about-for/about-for.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    LogoComponent,
    AboutComponent,
    FooterComponent,
    TitleComponent,
    HomeComponent,
    HeaderComponent,
    HomeMainComponent,
    AboutUsComponent,
    MotoPagesComponent,
    AboutForComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
