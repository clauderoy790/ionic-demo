import { Product } from "./models/product";

export abstract class INetsuite {
  abstract getData(): Product[];
  abstract pushData(product: Product, answers: string[]);
}
