import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "./models/product";

@Injectable({
  providedIn: "root",
})
export class NetsuiteService {
  products: Product[];

  constructor(private httpClient: HttpClient) {
    this.httpClient.get("assets/exampleData.json").subscribe((data) => {
      const obj = data as any;
      this.products = obj.products as Product[];
    });
  }

  public getData(): Product[] {
    return this.products;
  }

  public pushData(product: Product, answers: string[]) {
    console.log("push data for product: ", product.name);
    console.log(answers);
  }
}
