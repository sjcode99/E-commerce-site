import React from "react";
import "./ProductListComponent.css";

function ProductListComponent({ products, itemsInCart }) {

  const handleInputValue = (val, item) => {

    products.forEach(element => {
      if (element.id === item.id) {
        element.qtyToPurchase = val;
        return;

      }
    })
  };

  const addToCart = (product) => {
    itemsInCart(product);
    console.log(product);
  };

  const handleMultipleSelect = (checkVal, item) => {

    products.forEach(element => {
      if (element.id === item.id) {
        element.isSelected = checkVal;
        return;

      }
    })

  };

  return (
    <>
      <div className="container">
        <table className="table table-hover list-table">
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
            {products.map((item, key) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <img width="50" height="50" src={item.image} />{" "}
                </td>
                <td>{item.name}</td>
                <td>{item.color}</td>
                <td>
                  {item.count > 0 ? (
                    <i className="bi bi-emoji-smile-fill"></i>
                  ) : (
                    <i className="bi bi-emoji-frown-fill"></i>
                  )}
                </td>
                <td>{item.price}</td>
                <td style={{ width: "200px" }}>
                  <div className="buy-actions">
                    <input
                      style={{ width: "60px" }}
                      type="number"
                      min="0"
                      name="quantity"
                      id="quantity"
                      // value={value}
                      onChange={(e) => {
                        // console.log(e.target.id);
                        handleInputValue(e.target.value, item);
                      }}
                    />
                    <i
                      onClick={() => addToCart(item)}
                      className="bi bi-cart"
                      type="button"
                    ></i>
                    <input
                      type="checkbox"
                      name={item.id}
                      id={item.id}
                      // value= {item.id}
                      onChange={(e) => {
                        // console.log(e);
                        handleMultipleSelect(e.target.checked, item);
                      }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ProductListComponent;
