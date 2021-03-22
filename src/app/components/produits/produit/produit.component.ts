import { Component, OnInit } from '@angular/core';
import { ActionProduit, Produit } from 'src/app/core/models/produit';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produits:Produit[]|null = null;
  readonly ActionProduit = ActionProduit;

  constructor(private produitService:ProductService) { }

  ngOnInit(): void {
    this.onGetAllProducts();
  }

  onGetAllProducts(){
    this.produitService.getAllProduits().subscribe(
      (data) => {
        this.produits = data;
      });
  }

  onGetSelectedProducts(){
    this.produitService.getSelectedProduits().subscribe(
      (data) => {
        this.produits = data;
      });
  }

  onGetPromoProducts(){
    this.produitService.getPromoProduits().subscribe(
      (data) => {
        this.produits = data;
      });
  }

  onSearchProducts(dataForm:any){
    this.produitService.getProduitsLikeName(dataForm.keyword).subscribe(
      (data) => {
        this.produits = data;
      });
  }

  onSelectProduct(produit:Produit, action:ActionProduit){

    this.produitService.updateProduit(produit, action).subscribe(
      (data) => {
        produit=data
      }
    );
  }

}
