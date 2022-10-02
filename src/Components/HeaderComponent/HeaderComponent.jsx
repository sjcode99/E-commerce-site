import React from "react";
import "./HeaderComponent.css";
import {Link, useHistory} from "react-router-dom";

function HeaderComponent({ handleSearch, importedJsonData, addProductInCart }) {
  const history = useHistory();

  const uniqueCategoryVal = [
    ...new Set(importedJsonData.map((value) => value.category)),
  ];
  const uniqueSizeVal = [
    ...new Set(importedJsonData.map((value) => value.size)),
  ];

  const goToCart = () => {
    history.push('/cart')
  }
  // console.log(uniqueVal);
  return (
    <>
      <div className="container">
        <nav className="navbar bg-light">
          <div className="toolbar w-100">
            {/* categories */}
            <div className="dropdown category" style={{ width: "130px" }}>
              <select
                className="form-select"
                aria-label="Default select example"
                defaultValue={"categories"}
                onChange={(e) => {
                  // console.log(e.target.value);
                  if (e.target.value === "categories") {
                    handleSearch("");
                  } else {
                    handleSearch(e.target.value, "category");
                  }
                }}
              >
                <option value={"categories"}>Categories</option>
                {uniqueCategoryVal.map((item, i) => (
                  <option key={i + 1} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* size */}
            <div className="dropdown size">
              <select
                className="form-select"
                aria-label="Default select example"
                defaultValue={"size"}
                onChange={(e) => {
                  // console.log(e.target.value);
                  if (e.target.value === "size") {
                    handleSearch("");
                  } else {
                    handleSearch(e.target.value, "size");
                  }
                }}
              >
                <option value={"size"}>Size</option>
                {uniqueSizeVal.map((item, i) => (
                  <option key={i + 1} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              {/* <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Size
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item" type="button">
                    Action
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Another action
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Something else here
                  </button>
                </li>
              </ul> */}
            </div>

            {/* reset button */}
            <div className="button reset">

              <button
                type="button"
                className="btn btn-light"
                style={{ padding: "0", color: "#0834bd", fontWeight: "600" }}
                onClick={(e) => handleSearch("")}
              >
                <i
                  className="bi bi-arrow-counterclockwise"
                  style={{ color: "#0834bd" }}
                ></i>
                Reset
              </button>
            </div>

            <div className="actions">
              {/* search */}
              <label className="search" htmlFor="search">
                Search:
              </label>
              <input
                type="text"
                className="searchInput"
                id="search"
                onChange={(e) => {
                  handleSearch(e.target.value, "name");
                }}
              />

              {/* add to cart button */}
              <button
                type="button"
                className="btn btn-primary action-buttons"
                onClick={ () => addProductInCart()}
              >
                Add To Cart
              </button>
                <Link to="/cart">
              <button onClick={goToCart}  type="button" className="btn btn-primary  action-buttons">
                Go to Cart
              </button>
              </Link>
            </div>
            {/* <span class="navbar-brand mb-0 h1">Navbar</span> */}
          </div>
        </nav>
      </div>
    </>
  );
}

export default HeaderComponent;
