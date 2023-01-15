import { faker } from "@faker-js/faker";

import { Product } from "../models/product.model"; // Import the Product interface
import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto"; // Import the CreateProductDto data transfer object
import { ProductService } from "../models/product.service.model";

type Id = number;

export class ProductMemoryService implements ProductService {
    private products: Product[] = [];
    
    // Define a function that returns the index of the product with the given ID in the array of products
    getIndex(id: Id) {
        return this.products.findIndex(products => products.id === id);
    }
        
    getAll() {
        return this.products
    }

    create(data: CreateProductDto): Product {
        const newProduct = {
            ...data,
            id: faker.datatype.number(),
            creationAt: faker.date.past(),
            updatedAt: faker.date.recent(),
            category: {
                id: data.categoryId,
                name: faker.commerce.department(),
                image: faker.image.imageUrl(),
                creationAt: faker.date.past(),
                updatedAt: faker.date.recent(),
            }
        }
        return this.add(newProduct);
    }

    add(product: Product) {
        // Add and return the new product to the list of products
        this.products.push(product);
        return product;
    }
    
    update(id: Id, changes: UpdateProductDto) {
        const index: number = this.getIndex(id)
        const prevData: Product = this.products[index] // Get the product at the given index by the Id
      
        // Update the product with the provided changes
        this.products[index] = {
          ...prevData,
          ...changes
        }
        // Return the updated product
        return this.products[index]
    }
}
