import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieComponent } from './components/categorie/categorie.component';
import { CommandeComponent } from './components/commande/commande.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddProduitComponent } from './components/produits/add-produit/add-produit.component';
import { ProduitComponent } from './components/produits/produit/produit.component';

const routes: Routes = [
  {path: "produits", component: ProduitComponent},
  {path: "categories", component: CategorieComponent},
  {path: "commandes", component: CommandeComponent},
  {path: "new-produit", component: AddProduitComponent},
  {path: "", redirectTo: "/produit", pathMatch: "full"},
  {path: "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
