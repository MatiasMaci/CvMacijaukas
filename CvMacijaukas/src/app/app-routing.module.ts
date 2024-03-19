import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutProyectComponent } from './components/about-proyect/about-proyect.component';

//Declaramos las rutas posibles en el sistema de routing

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutProyect', component: AboutProyectComponent },
  { path: '**', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
