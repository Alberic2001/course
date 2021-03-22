import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Produit } from 'src/app/core/models/produit';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  //Reactive form
  produitFormGroupe!:FormGroup;
  submited:boolean = false;

  constructor(private fb:FormBuilder, 
    private produitService:ProductService,
    private router:Router) { }

  ngOnInit(): void {
    this.produitFormGroupe = this.fb.group({
      name:["", [Validators.required, Validators.maxLength(50), Validators.minLength(5)]],
      price:["", [Validators.required]],
      quantity:["", [Validators.required]],
      selected:[true, [Validators.required]],
      promo:[true, [Validators.required]]
    })
  }

  onAddProduit(){
    this.submited = true;
    if(this.produitFormGroupe.invalid){
      return
    }
    const prod:Produit = this.produitFormGroupe.value
    this.produitService.addProduit(prod).subscribe(
      (data)=>{
        this.router.navigateByUrl("/produits")
      }
    )
  }

}
