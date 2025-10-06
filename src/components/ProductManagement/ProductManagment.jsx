import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagment = () => {

    const [products, setProduct] = useState([]);
    
    const handleAddProduct = newProduct => {
        const newProducts = [...products,newProduct];
        setProduct(newProducts);
    }
    return (
        <div>
            <ProductForm handleAddProduct={handleAddProduct}></ProductForm>
            <ProductTable products={products}></ProductTable>
        </div>
    );
};

export default ProductManagment;