import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../models/product";

@Component({
  selector: "app-products",
  templateUrl: "./products.page.html",
  styleUrls: ["./products.page.scss"],
})
export class ProductsPage implements OnInit {
  products: Product[] = [];
  answers: Map<string, string[]>;

  constructor(private router: Router) {
    const state = this.router.getCurrentNavigation()?.extras?.state;
    if (state) {
      this.products = (state.products as Product[]) ?? [];
      
      // init answers
      if (state.answers) {
        this.answers = state.answers as Map<string, string[]>;
      } else {
        this.answers = new Map<string, string[]>();
        for (let product of this.products) {
          const arr = [];
          for (let i = 0; i < product.questions.length; i++) {
            arr.push('');
          }
          this.answers[product.name] = arr;
        }
      }
      if (state.product && state.answers) {
        this.answers[state.product.name] = (state.answers as string[]) ?? [];
      }
    }
    console.log("products:");
    console.log(this.products);
  }

  ngOnInit() {}

  onProductClick(product: Product) {
    // todo
    console.log("the product is");

    console.log(product);

    this.router.navigate(["/question"], {
      state: { product: product, answers: this.answers[product.name] },
    });
  }

  onBackClick() {
    this.router.navigate(["/menu"], { state: { answers: this.answers } });
  }
}
