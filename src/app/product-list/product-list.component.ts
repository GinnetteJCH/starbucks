import { Component } from '@angular/core';

import { products } from '../products';
import { CartService } from '../cart.service';

import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService
  ) { }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  share() {
    window.alert('The product has been shared!');
  }

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
      nombre: ['', Validators.required],
      product: ['', Validators.required]
    });
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}