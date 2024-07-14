import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionComponent } from './components/informacion/informacion.component';
import { CulturaComponent } from './components/cultura/cultura.component';
import { GastronomiaComponent } from './components/gastronomia/gastronomia.component';
import { CuestionarioComponent } from './components/cuestionario/cuestionario.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/informacion',
    pathMatch: 'full'
  },
  {
    path:"informacion", 
    component:InformacionComponent
  },
  {
    path:"cultura", 
    component:CulturaComponent
  },
  {
    path:"gastronomia", 
    component:GastronomiaComponent
  },
  {
    path:"cuestionario", 
    component:CuestionarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
