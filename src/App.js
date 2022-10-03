import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CartComponent from "./Components/CartComponent/CartComponent";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import ProductListComponent from "./Components/ProductListComponent/ProductListComponent";
import importedJsonData from "./products.json";

function App() {
  // add qty to purchase and is slected in the db values
  const productListFromDb = importedJsonData.map((data) => {
    return { ...data, qtyToPurchase: 0, isSelected: false };
  });

  // intial state of the data
  const [productList, setProductList] = useState(productListFromDb);

  // initial state of cart
  const [productInCart, setProductInCart] = useState([]);
  let itemsId = [];

  const searchByText = (val, text) => {
    let filteredProducts = productListFromDb.filter((item) => {
      if (val === "") return item;
      else if (item[text].toLowerCase().includes(val.toLowerCase()))
        return item;
    });
    setProductList(filteredProducts);
  };

  const cartItems = (items) => {
    setProductInCart([...productInCart, items]);
  };
  const addSelectedProductInCart = () => {
    console.log(productList);
    console.log(itemsId);
    let selectedProducts = productList.filter(
      (data) => data.isSelected === true
    );
    setProductInCart([...productInCart, ...selectedProducts]);
    console.log(selectedProducts);
  };
  const updateMultipleSelectedProduct = (status) => {
    itemsId = status;
  };

  return (
    <div className="App home">
      <h3 style={{ paddingRight: "10px" }} className="m-3">
        {" "}
        Shoppy-site
      </h3>
      <Router>
        <Switch>
          <Route path="/cart">
            <CartComponent productInCart={productInCart} />
          </Route>
          <Route path="/" exact>
            <HeaderComponent
              handleSearch={searchByText}
              importedJsonData={productListFromDb}
              addProductInCart={addSelectedProductInCart}
            />
            <ProductListComponent
              products={productList}
              itemsInCart={cartItems}
              addMultipleItems={updateMultipleSelectedProduct}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
