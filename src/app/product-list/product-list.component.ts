import { Component } from '@angular/core';

import { CartService } from '../cart.service';

import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  registerForm: FormGroup;
  submitted = false;
  users = [];
  products = [];
  showNew = false;

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService
  ) {
    this.users = this.getUser();
    this.products = this.getProducts();
   }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit(customerData) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.cartService.addToCart(customerData);

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + customerData);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      users: ['', Validators.required],
      products: ['', Validators.required]
    });
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  getUser(){
    return [
        { value: 'Ginnette', text: 'Ginnette' },
        { value: 'Walter', text: 'Walter' },
        { value: 'John', text: 'John' },
        { value: 'Gabriela', text: 'Gabriela' }
      ];
  }

  getProducts(){
    return [
        { value: 'Frappuccino Caramelo', text: 'Frappuccino Caramelo' },
        { value: 'Strawberry Frappuccino', text: 'Strawberry Frappuccino' },
        { value: 'JoSkinny Vainilla Lattehn', text: 'Skinny Vainilla Latte' },
        { value: 'Java Ship Frappuccino', text: 'Java Ship Frappuccino' },
        { value: 'Frappuccino vainilla', text: 'Frappuccino vainilla' },
        { value: 'Caramel Ribbon Crunch Frappuccino', text: 'Caramel Ribbon Crunch Frappuccino' },
        { value: 'Sausage, Cheddar & Egg Breakfast Sandwich', text: 'Sausage, Cheddar & Egg Breakfast Sandwich' },
        { value: 'Nuevo', text: 'Agregar Nuevo' }
      ];
  }

  onChanceP(e){
    if(e.target.value == "Nuevo"){
      this.showNew = true;
    }else{
      this.showNew = false;
    }
  }
}