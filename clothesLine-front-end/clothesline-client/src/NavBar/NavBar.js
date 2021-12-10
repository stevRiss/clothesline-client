import React, { useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";

export const NavBar = ({
  setAuthentication,
  authentication,
  currentUser,
  setCurrentUser,
  setSearch,
}) => {
  const [navSearch, setNavSearch] = useState("");
  let navigate = useNavigate();

  const searchRef = useRef(null);
  const handleSearch = () => {
    const value = searchRef.current.value;
    setSearch(value);
  };

  const handleCategory = (e) => {
    console.log(e.target.name);
  };

  const handleSignin = () => {
    navigate("/signin", {
      replace: true,
    });
  };

  const fire = (sail) => {
    let saleArr = [];
    if (sail.price < 10) {
      saleArr.push(sail);
      console.log(saleArr);
    }
    return (
      <div className="items">
        {/* {alert(`the sale item of the day is: ${saleArr[0]}`)} */}
      </div>
    );
  };
  // const handleSale = () => {
  //   fetch("/items")
  //     .then((r) => r.json())
  //     .then((data) => {
  //       setSales(data);
  //       sales.filter(fire);
  //     });
  // };

  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" }).then((res) => {
      if (res.ok) {
        setAuthentication(false);

        setCurrentUser(null);
      } else {
        alert("not logged in");
      }
    });
  };

  const handleHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="container-va">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink
          className="navbar-brand name-store"
          onClick={handleHome}
          id="title"
          to="/"
        >
          ClothesLine
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
                to=""
              >
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
                to=""
              >
                Most Populars
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
                to={"/sales"}
              >
                Sales{" "}
              </NavLink>
            </li>
            <ul className="nav-item dropdown">
              <NavLink
                className={({ isActive }) =>
                  "nav-link dropdown-toggle" + (isActive ? " active" : "")
                }
                to=""
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Categories
              </NavLink>
              <div
                className="dropdown-menu"
                id="nav-dropdown-menu"
                aria-labelledby="navbarDropdown"
              >
                {" "}
                <li>
                  <NavLink
                    className="nav-category-regular"
                    to={"/category/Mens"}
                    name="Mens"
                    onClick={handleCategory}
                  >
                    Mens{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-category-regular"
                    to="category/Womens"
                    onClick={handleCategory}
                    name="Womens"
                  >
                    Womens
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      "nav-category-regular" + (isActive ? "" : "")
                    }
                    name="T-shirts"
                    to="category/T-shirts"
                    onClick={handleCategory}
                  >
                    T-shirts
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      "nav-category-regular" + (isActive ? "" : "")
                    }
                    name="Sweatshirts"
                    to="category/Sweatshirts"
                    onClick={handleCategory}
                  >
                    Sweatshirts
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      "nav-category-regular" + (isActive ? "" : "")
                    }
                    name="Jackets"
                    to="category/Jackets"
                    onClick={handleCategory}
                  >
                    Jackets
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      "nav-category-regular" + (isActive ? "" : "")
                    }
                    name="Pants"
                    to="category/Pants"
                    onClick={(e) => handleCategory(e)}
                  >
                    Pants
                  </NavLink>
                </li>
              </div>
            </ul>
          </ul>
          <img
            className="cart-img"
            src="https://img.icons8.com/ios-glyphs/30/000000/shopping-cart--v1.png"
            alt="cart"
          />

          <form className="form-inline my-2 my-lg-0">
            <input
              ref={searchRef}
              onChange={handleSearch}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn-sign" type="submit">
              Search
            </button>
          </form>
          {authentication ? (
            <div>
              <button className="btn-sign" type="button">
                Welcome: {currentUser.username}!
              </button>
              <button className="btn-sign" type="button" onClick={handleLogout}>
                LogOut
              </button>
            </div>
          ) : (
            <button className="btn-sign" type="button" onClick={handleSignin}>
              Signin
              <img
                src="https://img.icons8.com/ios/50/000000/user--v2.png"
                className="btn-user-image"
                alt="icon-face"
              />
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};
