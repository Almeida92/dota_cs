import { HeroService } from './services/hero.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { CountersComponent } from './paginas/counters/counters.component';
import { HomeComponent } from './paginas/home/home.component';
import { ListaComponent } from './paginas/counters/lista/lista.component';

const appRoutes: Routes = [
  { path: 'counters', component: CountersComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    CountersComponent,
    HomeComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true}
    )
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
