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
  answers: string[];

  constructor(private router: Router) {
    const state = this.router.getCurrentNavigation()?.extras?.state;
    if (state) {
      this.product = state.product as Product;
      if (state.answers) {
        this.answers = state.answers as string[];
      } else {
        this.answers = [];
        for (let i = 0; i < this.product.questions.length; i++) {
          this.answers.push("");
        }
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
