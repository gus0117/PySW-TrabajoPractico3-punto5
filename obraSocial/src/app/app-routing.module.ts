import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ImagesComponent } from './components/images/images.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'images', component: ImagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
