import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
})
export class ProduitsComponent implements OnInit {
  products : string[]; //un tableau de chînes de caractères
  constructor(){
    this.products = ["PC Asus", "Imprimante Epson", "Tablette Samsung" , "Msi gf65"];
  }
  ngOnInit(): void {
    
  }
}
