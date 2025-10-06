import React from 'react';

const ProductTable = ({products}) => {
    return (
        <div>
            <h2>Total Product: {products.length}</h2>
            <table>
                <thead>
                     <tr>
                        <th>No. </th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>quantity</th>
                        <th>actions</th>
                     </tr>
                </thead>
                <tbody>
                     {
                        products.map((product, index) =>  <tr key={index}> 

                        <td>{index + 1 }</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <tb></tb>

                     </tr>)
                     }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;