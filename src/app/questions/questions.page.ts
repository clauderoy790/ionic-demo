import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../models/product";

@Component({
  selector: "app-questions",
  templateUrl: "./questions.page.html",
  styleUrls: ["./questions.page.scss"],
})
export class QuestionsPage implements OnInit {
  product: Product;
  answers: Map<string, string[]>;

  constructor(private router: Router) {
    const state = this.router.getCurrentNavigation()?.extras?.state;
    if (state) {
      this.product = state.product as Product;
      this.answers = state.answers as Map<string, string[]>;
      if (!this.answers[this.product.name]) {
        const arr: string[] = [];
        for (let i = 0; i < this.product.questions.length; i++) {
          arr.push("");
        }
        this.answers[this.product.name] = arr;
      }
    }
  }

  ngOnInit() {}

  onTextChange(index: number, value: string) {
    this.answers[index] = value;
  }

  onBackClick() {
    this.router.navigate(["/products"], {
      state: { product: this.product, answers: this.answers },
    });
  }
}
