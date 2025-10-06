import React, { useState } from 'react';

const ProductForm = ({handleAddProduct}) => {

    const [error, setError] = useState('');

    const handleProductSubmit = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

       // console.log(name, price, quantity);

       //valitastion
       if(name.length === 0 ){
        setError('pleas provite a product name')
        return;
       }
       else if(price.length === 0 ){
        setError('please provite  price')
        return;
       }
       else if(price < 0 ){
        setError('price can not be nigetive')
        return;
       }
       else if(quantity.length === 0){
        setError('please provite quantity ')
        return;
       }
       else{
        setError('')
       }

       // the value diye create object ///
       const newProduct = {
        name, 
        price, 
        quantity
       }
       // console.log(newProduct);
        
      handleAddProduct(newProduct);

    }
    return (
        <div>
            <h3>Add a  Product</h3>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name='name' placeholder='Product name' /> <br />
                <input type="text" name='price' placeholder='Product price' /> <br />
                <input type="text" name='quantity' placeholder='Product quantity' /> <br />
                <input type="submit" value="Submit"/>
            </form>
            <p style={{color: 'red'}}><small>{error}</small></p>
        </div>
    );
};

export default ProductForm;