import React, { useState } from "react";
import "./CartComponent.css";

function CartComponent({ productInCart }) {
  const [productListInCart, setProductListInCart] = useState(productInCart);

  const getTotal = function () {
    let total = productListInCart.reduce(
      (previous, current) => previous + current.qtyToPurchase * current.price,
      0
    );
    return total.toFixed(2);
  };

  const decreaseCount = (item) => {
    setProductListInCart((prev) => [
      ...prev.map((data) =>
        data.id === item.id
          ? { ...data, qtyToPurchase: parseInt(data.qtyToPurchase) - 1 }
          : data
      ),
    ]);
  };
  const increaseCount = (item) => {
    setProductListInCart((prev) => [
      ...prev.map((data) =>
        data.id === item.id
          ? { ...data, qtyToPurchase: parseInt(data.qtyToPurchase) + 1 }
          : data
      ),
    ]);
  };

  const deleteElement = (item) => {
    setProductListInCart((prev) => {
      let index = prev.findIndex((ele) => ele.id === item.id);
      return [...prev.slice(0, index), ...prev.slice(index + 1, prev.length)];
    });
  };
  return (
    <>
      {productListInCart.length == 0 ? (
        <div>
          <p>The cart is empty</p>
        </div>
      ) : (
        <div className="container cartBox">
          {/* <div className="cartBox"> */}
          <table className="cart-table table-hover">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col" className="qty">
                  Quantity
                </th>
                <th scope="col">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {productListInCart.map((item, key) => (
                <tr key={item.id}>
                  <td style={{ paddingRight: "15px" }}>
                    <i
                      onClick={() => deleteElement(item)}
                      className="bi bi-x pointer"
                    ></i>
                  </td>
                  <td>
                    {" "}
                    <img width="50" height="50" src={item.image} />{" "}
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td className="qty">
                    {/* <input type="number" style={{ width: "100px" }}>
                  </input>
                    <span><i class="bi bi-plus"></i></span> */}
                    <div className="quantity-input ">
                      <span onClick={() => decreaseCount(item)} type="button">
                        <i className="bi bi-dash"></i>
                      </span>
                      <span className="quantity-value">
                        {item.qtyToPurchase}
                      </span>
                      <span onClick={() => increaseCount(item)} type="button">
                        <i className="bi bi-plus"></i>
                      </span>
                    </div>
                  </td>
                  <td className="total-color">
                    <i class="bi bi-currency-rupee"></i>
                    {(item.price * item.qtyToPurchase).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* </div> */}

          {/* cart total */}
          <div className="card cart-total">
            <div className="card-body">
              <h5 className="card-title card-heading">Cart totals</h5>
              <h6 className="card-subtitle card-subtotal">
                Subtotal
                <p className="text-muted">
                  <i class="bi bi-currency-rupee"></i>
                  {getTotal()}
                </p>
              </h6>

              <hr />
              <h6 className="card-subtitle mb-2 card-total">
                Total
                <p className="text-muted">
                  <i class="bi bi-currency-rupee"></i>
                  {getTotal()}
                </p>
              </h6>

              <div>
                <button type="button" className="btn checkout">
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CartComponent;
