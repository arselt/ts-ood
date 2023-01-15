import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import { Product } from "./product.model";

export interface ProductService {
    getAll(): Product[] | Promise<Product[]>;
    update(id: Product['id'], changes: UpdateProductDto): Product | Promise<Product[]>;
    create(dto: CreateProductDto): Product | Promise<Product[]>;
    getIndex(id: Product['id']): number | undefined | Promise<Product[]>;
}