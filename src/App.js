import "./App.css";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import ProductListComponent from "./Components/ProductListComponent/ProductListComponent";
import importedJsonData from "./products.json";
import { useState } from "react";
import CartComponent from "./Components/CartComponent/CartComponent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [productList, setProductList] = useState(importedJsonData);

  const searchByText = (val, text) => {
    // console.log(text);

    let filteredProducts = importedJsonData.filter((item) => {
      if (val === "") return item;
      else if (item[text].toLowerCase().includes(val.toLowerCase()))
        return item;
    });
    setProductList(filteredProducts);
  };

  // console.log(importedJsonData);
  return (
    <div className="App home">
      <h1> Internship test app</h1>
      <Router>
        <Switch>
          <Route path="/cart">
            <CartComponent importedJsonData={importedJsonData} />
          </Route>
          <Route path="/" exact>
            <HeaderComponent
              handleSearch={searchByText}
              importedJsonData={importedJsonData}
            />
            <ProductListComponent products={productList} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
