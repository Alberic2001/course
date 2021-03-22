import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursComponent } from './cours/cours.component';
import { CharAtPipe } from './core/pipes/char-at.pipe';
import { AddProduitComponent } from './components/produits/add-produit/add-produit.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { CommandeComponent } from './components/commande/commande.component';
import { ProduitComponent } from './components/produits/produit/produit.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursComponent,
    CharAtPipe,
    AddProduitComponent,
    NavBarComponent,
    CategorieComponent,
    CommandeComponent,
    ProduitComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
