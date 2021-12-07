import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./navbar.css";

export const NavBar = () => {
  let navigate = useNavigate();

  const handleSignin = () => {
    navigate("/signin", {
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
                  <NavLink className="nav-category-regular" to="">
                    Mens apparel{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-category-regular" to="">
                    Womens apparel
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      "nav-category-regular" + (isActive ? "" : "")
                    }
                    to=""
                  >
                    T-shirts
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      "nav-category-regular" + (isActive ? "" : "")
                    }
                    to=""
                  >
                    Sweatshirts
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      "nav-category-regular" + (isActive ? "" : "")
                    }
                    to=""
                  >
                    Jackets
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      "nav-category-regular" + (isActive ? "" : "")
                    }
                    to=""
                  >
                    Pants
                  </NavLink>
                </li>
              </div>
            </li>
          </ul>
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
            <button className="btn-sign" type="button" onClick={handleSignin}>
              Signin
              <img
                src="https://img.icons8.com/ios/50/000000/user--v2.png"
                className="btn-user-image"
                alt="icon-face"
              />
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};
