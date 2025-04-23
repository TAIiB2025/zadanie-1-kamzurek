import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartComponent } from "./cart/cart.component";
import { ProductComponent } from "./product/product.component";
import { Product } from './product/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CartComponent, ProductComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Zadanie 1 TAIiB'
  naglowek = 'Sklep TAIiB';
  pokazProdukty = true;
  wartoscKoszyka = 0;

  produkty: Product[] = [
    new Product('Produkt 1', 20, new Date(2001, 8, 30), true),
    new Product('Produkt 2', 30, new Date(2002, 1, 10), false),
    new Product('Produkt 3', 15, new Date(2023, 11, 12), true),
    new Product('Produkt 4', 50, new Date(2024, 2, 5), false),
    new Product('Produkt 5', 40, new Date(2020, 6, 1), true),
  ];

  dodajDoKoszyka(product: Product) {
    this.wartoscKoszyka += product.cena;
  }

  wyczyscKoszyk() {
    this.wartoscKoszyka = 0;
    this.produkty.forEach(p => p.liczbaSztuk = 0);
  }

  toggleWidocznosc() {
    this.pokazProdukty = !this.pokazProdukty;
  }
}
