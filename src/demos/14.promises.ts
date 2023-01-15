import axios from "axios";

(async () => {

    function delay (time: number) {
        const promise = new Promise<boolean>((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, time);
        })
        return promise;
    }

    console.log(`----`.repeat(10));
    const rta = await delay(1000);
    console.log(rta);
    console.log(`----`.repeat(10));
    
    // Regular function that returns a promise
    function getProducts(){
        // Make an HTTP GET request using the axios library
        const promise = axios.get('https://api.escuelajs.co/api/v1/products')
        // Return the promise
        return promise;
    }
    
    // Asynchronous function that also returns a promise
    async function getProductsAsync(){
        // Make an HTTP GET request using the axios library
        const promise = axios.get('https://api.escuelajs.co/api/v1/products')
        // Wait for the promise to resolve before returning it
        // This allows the caller of the function to use the 'await' keyword
        return await promise;
    }
    
    console.log(`---- promise `.repeat(10));
    const products = await getProducts()
    console.log(products.data);
    
    console.log(`async ---- promise `.repeat(10));
    const productsAsync = await getProductsAsync()
    console.log(productsAsync);

})();