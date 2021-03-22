import { Component, OnInit } from '@angular/core';
import { Produit } from '../core/models/produit';
import { ProductService } from '../core/services/product.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {

  title:string = "Bonjour tout le monde";
  a:number = 0;
  mois:number = 1;
  numbers:number[]|null = [1,2,3];
  prod: Produit={
    name: "Lait",
    quantity: 1,
    price: 34
  }
  produits?:Produit[];

  onClickMe() {
    alert("Bonjour tout le monde");
  }

  
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getProductsWithApi().subscribe((data) => {
      this.produits = data;
    });
  }

}
