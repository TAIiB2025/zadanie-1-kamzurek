import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [CommonModule]
})
export class CartComponent {
  @Input() wartoscKoszyka = 0;
  @Output() wyczysc = new EventEmitter<void>();

  zerujKoszyk() {
    this.wyczysc.emit();
  }
}