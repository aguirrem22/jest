let products = [];
let id = 0;

function resetProducts() {
    products = [];
    id = 0;
}

function addProduct(name, price) {
    const product = { id: ++id, name, price };
    products.push(product);
    return product;
}
function removeProduct(id) {
    products = products.filter(product => product.id !== id);
}
function getProducts() {
    return products;
}       
function getProduct(id) {
    return products.find(product => product.id === id);
}       
function updateProduct(id, name, price) {
    const product = getProduct(id);
    if (product) {  

        product.name = name;
        product.price = price;
    }               
    return product;         
}   

module.exports = {
    resetProducts,
    addProduct,     
    removeProduct,  
    getProducts,    
    getProduct,     
    updateProduct  
};  
