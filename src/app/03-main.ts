import { PrductHTTPService } from "./services/product-http.service";

(async () => {  
    const productService = new PrductHTTPService();
    
    try {
        console.log('not yet'.repeat(10))
        const products = await productService.getAll();
        const productId = products[0].id;
        
        console.log(products.length)
        // console.log(products.map(item => item.title))
        
        await productService.update(productId, {
            price: 1000000,
            title: 'Extremadamente caro',
        })

        const viewProduct = await productService.getIndex(productId);
        console.log(viewProduct);
    } catch (error) {
        console.error(error)
    }
})();