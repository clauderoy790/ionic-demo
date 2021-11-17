import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NetsuiteService } from "../netsuite.service";
import { Product } from "./../models/product";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.page.html",
  styleUrls: ["./menu.page.scss"],
})
export class MenuPage implements OnInit {
  products: Product[];
  answers: Map<string, string[]>;

  constructor(private router: Router, private netsuite: NetsuiteService) {
    const state = this.router.getCurrentNavigation()?.extras?.state;
    this.answers = new Map<string, string[]>();
    if (state) {
      this.answers =
        (state.answers as Map<string, string[]>) ?? new Map<string, string[]>();
    }
  }

  ngOnInit() {}

  onGetClick() {
    this.products = this.netsuite.getData();
  }

  onViewClick() {
    this.router.navigate(["/products"], {
      state: {
        products: this.products,
        answers: this.answers,
      },
    });
  }

  onPushClick() {
    this.netsuite.pushData(this.answers);
  }

  onLogoutClick() {
    this.router.navigate(["/"]);
  }
}
