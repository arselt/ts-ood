import { UpdateProductDto } from "../dtos/product.dto";
import { Product } from "../models/product.model";
import { ProductHTTPService } from "./product-https2.service";

export class ProductCRUDService {
    private url = 'https://api.escuelajs.co/api/v1/products'
    private https = new ProductHTTPService(this.url);
    // then our request can be handle by BaseHttpSerive

    async update(id: Product['id'], dto: UpdateProductDto) {
        // and the purpose for this file would be business logic
        return this.https.update(id, dto)
    }
}