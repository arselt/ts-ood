import { Product } from "../models/product.model";
import { BaseHttpSerive } from "./base-https.service";

export class ProductHTTPService extends BaseHttpSerive<Product> {
    otherRequest () {
        this.url;

    }
}