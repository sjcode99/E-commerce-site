import React from 'react';
import "./ProductListComponent.css";

function ProductListComponent({ products}) {
  // console.log(products);
  return (
    <>
      <div className='container'>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Color</th>
              <th scope="col">Stock</th>
              <th scope="col">Price</th>
              <th scope="col">Buy</th>
            </tr>
          </thead>
          <tbody>
            {products
            .map((item, key) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td> <img width="50" height="50" src={item.image}  /> </td>
                <td>{item.name}</td>
                <td>{item.color}</td>
                <td>{item.count > 0 ? <i className="bi bi-emoji-smile-fill"></i> : <i className="bi bi-emoji-frown-fill"></i>}</td>
                <td>{item.price}</td>
                <td style={{width: '200px'}}>
                  <div className="buy-actions">
                    <input style={{width: '60px'}} type="number" min="0" name="" id="" />
                    <i className="bi bi-cart "></i>
                    <input type="checkbox" name="" id="" />

                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ProductListComponent