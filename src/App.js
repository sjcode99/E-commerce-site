import { useState } from "react";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import CartComponent from "./Components/CartComponent/CartComponent";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import ProductListComponent from "./Components/ProductListComponent/ProductListComponent";
import importedJsonData from "./products.json";

function App() {
  // add qty to purchase and is slected in the db values
  const  productListFromDb = importedJsonData.map(data => {
    return { ...data, qtyToPurchase: 0, isSelected: false}
  })

  // intial state of the data
  const [productList, setProductList] = useState(productListFromDb);
  const history = useHistory();


  // initial state of cart
  const [productInCart, setProductInCart] = useState([]);
  let itemsId = [];

  

  const searchByText = (val, text) => {
    // console.log(text);

    let filteredProducts = productListFromDb.filter((item) => {
      if (val === "") return item;
      else if (item[text].toLowerCase().includes(val.toLowerCase()))
        return item;
    });
    setProductList(filteredProducts);
  };

  const cartItems = (items) => {
    setProductInCart([...productInCart, items])
    // importedJsonData.map((item) => {
    //   if(item.id === itms.split(',')){
    //     console.log(item);
    //   }
    //   return item;
    // })
  }
  const addSelectedProductInCart = () => {
    console.log(productList);
    console.log(itemsId);
    // setProductList(productsList);
    let selectedProducts = productList.filter(data => data.isSelected=== true);
    setProductInCart([...productInCart, ...selectedProducts]);
    console.log(selectedProducts);
    // history.push("/cart")
  }
  const updateMultipleSelectedProduct = (status) => {
    console.log(status);
    itemsId = status

  }

  return (
    <div className="App home">
      <h1> Internship test app</h1>
      <Router>
        <Switch>
          <Route path="/cart">
            <CartComponent productInCart={productInCart} />
          </Route>
          <Route path="/" exact>
            <HeaderComponent
              handleSearch={searchByText}
              importedJsonData={productListFromDb}
              addProductInCart = {addSelectedProductInCart}
            />
            <ProductListComponent products={productList} itemsInCart={cartItems} addMultipleItems = {updateMultipleSelectedProduct} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
