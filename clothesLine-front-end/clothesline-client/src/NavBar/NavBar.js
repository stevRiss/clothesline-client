import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./navbar.css";

export const NavBar = ({
  setAuthentication,
  authentication,
  currentUser,
  setCurrentUser,
  setCategory,
}) => {
  let navigate = useNavigate();
  const handleCategoy = (e) => {
    console.log(e.target.name);
    setCategory(e.target.name);
  };
  const handleSignin = () => {
    navigate("/signin", {
      replace: true,
    });
  };

  const handleLogOut = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setCurrentUser(null);
        setAuthentication(false);
      }
    });

    navigate("/", {
      replace: true,
    });
  };

  return (
    <div className="container-va">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand name-store" to="/">
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
                to=""
              >
                Sales{" "}
                <img
                  className="fire-sales"
                  src="https://img.icons8.com/ios-glyphs/30/000000/fire-element--v1.png"
                  alt="icon-fire"
                />
              </NavLink>
            </li>
            <li className="nav-item dropdown">
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
                    onClick={(e) => handleCategoy(e)}
                  >
                    Mens{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-category-regular"
                    to="category/Womens"
                    onClick={handleCategoy}
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
                    onClick={handleCategoy}
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
                    onClick={handleCategoy}
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
                    onClick={handleCategoy}
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
                    onClick={handleCategoy}
                  >
                    Pants
                  </NavLink>
                </li>
              </div>
            </li>
          </ul>
          <img
            className="cart-img"
            src="https://img.icons8.com/ios-glyphs/30/000000/shopping-cart--v1.png"
            alt="cart"
          />

          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn-sign" type="submit">
              Search
            </button>

            {authentication ? (
              <button className="btn-sign" type="button">
                Welcome Sriss22!
              </button>
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
            <button onClick={handleLogOut}>LogOut</button>
          </form>
        </div>
      </nav>
    </div>
  );
};
