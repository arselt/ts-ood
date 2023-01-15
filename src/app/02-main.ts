import { ProductMemoryService } from "./services/product-memory.service";

const productService = new ProductMemoryService

productService.create({
    title: 'john cena',
    price: 100,
    description: `you can't see this`,
    images: [''],
    categoryId: 0
})

console.log(productService.getAll());
const products = productService.getAll();
const productId = Number(products[0].id);

productService.update(productId, {
    title: 'name changed'
})

console.log(productService.getAll());