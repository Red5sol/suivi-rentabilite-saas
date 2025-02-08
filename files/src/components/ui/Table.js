import React from 'react';

const Table = ({ products }) => (
  <table>
    <thead>
      <tr>
        <th>Produit</th>
        <th>Prix d'achat</th>
        <th>Prix de vente</th>
        <th>Profit</th>
      </tr>
    </thead>
    <tbody>
      {products.map((product, index) => (
        <tr key={index}>
          <td>{product.name}</td>
          <td>{product.costPrice}</td>
          <td>{product.sellingPrice}</td>
          <td>{product.sellingPrice - product.costPrice}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;