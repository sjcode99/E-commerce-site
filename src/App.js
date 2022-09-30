import './App.css';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import ProductListComponent from './Components/ProductListComponent/ProductListComponent';
import importedJsonData from "./products.json";
import { useState } from 'react';

function App() {
  const [productList, setProductList] = useState(importedJsonData);

  const searchByText = (val) =>{
    let filteredProducts = importedJsonData.filter(item =>{
      if(val === '') return item;
      else if(item.name.toLowerCase().includes(val.toLowerCase())) return item;
    }) 
    setProductList(filteredProducts)
  }

  return (
    <div className="App home">
      <h1> Internship test app</h1>
      <HeaderComponent handleSearch={searchByText}/>
      <ProductListComponent products= {productList}  />
    </div>
  );
}

export default App;
