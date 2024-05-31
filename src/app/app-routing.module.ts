import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { Pagina3Component } from './components/pagina3/pagina3.component';
import { Pagina4Component } from './components/pagina4/pagina4.component';
import { Pagina5Component } from './components/pagina5/pagina5.component';
const routes: Routes = [
  { path: '',redirectTo: '/home',pathMatch: 'full'},
  { path: 'home',component: HomeComponent},
  { path: 'about',component: Pagina1Component},
  { path: 'services',component: Pagina2Component},
  { path: 'products',component: Pagina3Component},
  { path: 'brand',component: Pagina4Component},
  { path: 'contact',component: Pagina5Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
