import React, { useState } from "react";
import "./HeaderComponent.css"

function HeaderComponent({handleSearch}) {
  return (
    <>
      <div className="container">
        <nav className="navbar bg-light">
          <div className="toolbar w-100">
            
            {/* categories */}
            <div className="dropdown category">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Hoodies
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
              </ul>
            </div>

            {/* size */}
            <div className="dropdown size">
              <button
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
              </ul>
            </div>

            {/* reset button */}
            <div className="button reset">
              <button type="button" className="btn btn-light">Reset</button>
            </div>

            <div className="actions">
              {/* search */}
              <label className="search" htmlFor="search">Search:</label>
              <input type="text" className="searchInput" id="search" onChange={(e) =>{
                handleSearch(e.target.value);
              }}/>

              {/* add to cart button */}
              <button type="button" className="btn btn-primary">Add To Cart</button>
            </div>
            {/* <span class="navbar-brand mb-0 h1">Navbar</span> */}
          </div>
        </nav>
      </div>
    </>
  );
}

export default HeaderComponent;
