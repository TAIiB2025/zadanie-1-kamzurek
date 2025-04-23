import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product.model';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  imports: [CommonModule]
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() dodajDoKoszyka = new EventEmitter<Product>();

  ukryty = false;

  toggleWidok() {
    this.ukryty = !this.ukryty;
  }

  dodaj() {
    this.product.liczbaSztuk++;
    this.dodajDoKoszyka.emit(this.product);
  }
}
