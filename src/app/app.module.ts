import { HeroService } from './services/hero.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { CountersComponent } from './paginas/counters/counters.component';
import { HomeComponent } from './paginas/home/home.component';
import { ListaComponent } from './paginas/counters/lista/lista.component';
import { HeroFiltroPipe } from './paginas/counters/pipe/hero-filtro.pipe';
import { HeroDetalheComponent } from './paginas/counters/lista/hero-detalhe/hero-detalhe.component';

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
    ListaComponent,
    HeroFiltroPipe,
    HeroDetalheComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true}),
    FormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
