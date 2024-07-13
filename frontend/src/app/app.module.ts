import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch, HTTP_INTERCEPTORS } from '@angular/common/http'; // Importa HttpClientModule y las funciones necesarias
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { MenuComponent } from './components/menu/menu.component';

const rutas: Routes = [
  { path: 'informacion', component: InformacionComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    InformacionComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(rutas) 
  ],
  providers: [
    provideHttpClient(withFetch())
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
