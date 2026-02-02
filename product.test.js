const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product');

beforeEach(() => {
    resetProducts();
});
test('deberia añadir un producto', () => {
    const product = addProduct('Laptop', 1000);
    expect(product).toEqual({ id: 1, name: 'Laptop', price: 1000 });
    expect(getProducts()).toHaveLength(1);
}
);
test('deberia remover un producto', () => {
    const product = addProduct('Laptop', 1000);
    removeProduct(product.id);
    expect(getProducts()).toHaveLength(0);
}
);
test('deberia obtener un producto por id', () => {
    const product = addProduct('Laptop', 1000);
    const fetchedProduct = getProduct(product.id);
    expect(fetchedProduct).toEqual(product);
}
);

test('deberia actualizar un producto', () => {     
    const product = addProduct('Laptop', 1000);     

    const updatedProduct = updateProduct(product.id, 'Gaming Laptop', 1500);
    expect(updatedProduct).toEqual({ id: product.id, name: 'Gaming Laptop', price: 1500 });
    expect(getProduct(product.id)).toEqual(updatedProduct);
}   
);
test('deberia obtener todos los productos', () => {
    const product1 = addProduct('Laptop', 1000);
    const product2 = addProduct('Phone', 500);  
    const products = getProducts();
    expect(products).toEqual([product1, product2]);
}       
);
test ('deberia añadir un producto y verificar id autoincremental', () => {
    const product1 = addProduct('Laptop', 1000);
    expect (product1.id).toBe (1);
    const product2 = addProduct ('Phone', 500);
    expect (product2.id).toBe (2);
}
);  