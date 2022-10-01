import React from "react";
import "./CartComponent.css";

function CartComponent({ importedJsonData }) {
    return (
        <>
            <div className="container cartBox">
                {/* <div className="cartBox"> */}
                    <table className="cart-table table-hover">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col" className="qty">Quantity</th>
                                <th scope="col">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {importedJsonData.map((item, key) => (
                                <tr key={item.id}>
                                    <td style={{paddingRight: '15px'}}>
                                        <i className="bi bi-x"></i>
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
                                            <span type="button" ><i className="bi bi-dash"></i></span>
                                            <span className="quantity-value">1</span>
                                            <span type="button" ><i className="bi bi-plus"></i></span>
                                        </div>
                                    </td>
                                    <td>{item.price}</td>
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
                            <p className="text-muted">101.00</p>
                        </h6>

                        <hr />
                        <h6 className="card-subtitle mb-2 card-total">
                            Total
                            <p className="text-muted">101.00</p>
                        </h6>

                        <div>
                            <button type="button" className="btn btn-primary checkout">
                                PROCEED TO CHECKOUT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartComponent;
