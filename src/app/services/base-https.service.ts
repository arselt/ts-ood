import axios from "axios";
import { UpdateProductDto } from "../dtos/product.dto";

import { Category } from "../models/category.model";
import { Product } from "../models/product.model";

export class BaseHttpSerive<TypeClass> {
    // data: TypeClass[] = [];

    constructor(
        protected url: string
    ) {}

    async getAll() {
        const { data } = await axios.get<TypeClass[]>(this.url);
        return data;
    }
    
    async update<ID, DTO>(id: ID, changes: DTO) {
        const { data } = await axios.put(`${this.url}/${id}`, changes);
        return data;
    }
}

// const service = new BaseHttpSserive<string[]>();
// service.getAll();

// const serviceCat = new BaseHttpSserive<Category>();
// serviceCat.getAll();

(async () => {
    const url1 = 'https://api.escuelajs.co/api/v1/products'
    const productService = new BaseHttpSerive<Product>(url1) 
    const productRta = await productService.getAll()

    productService.update<Product['id'], UpdateProductDto>(1, {
        title: 'Mouse Pad'
    })

    
    const categoryService = new BaseHttpSerive<Category>(url1) 
    const categoryRta = await categoryService.getAll()
    
    console.log('products: ', productRta.length);
    console.log('categories: ', categoryRta.length);
})();