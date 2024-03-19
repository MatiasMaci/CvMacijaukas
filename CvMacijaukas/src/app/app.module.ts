import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { BannerInfoComponent } from './components/banner-info/banner-info.component';
import { AboutProyectComponent } from './components/about-proyect/about-proyect.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HomeComponent } from './components/home/home.component';
import { AchievementsComponent } from './components/achievements/achievements.component';

@NgModule({
  declarations: [
    AppComponent,
    ProyectsComponent,
    HeaderComponent,
    FooterComponent,
    SkillsComponent,
    EducationComponent,
    BannerInfoComponent,
    AboutProyectComponent,
    ExperienceComponent,
    HomeComponent,
    AchievementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
