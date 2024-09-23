import { NavLink, Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const navbarLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "MyOrders", path: "/myorders" },
    { name: "Login", path: "/login" },
    { name: "Signup", path: "/signup" },
    { name: "Logout", path: "/logout" },
  ];
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <h1 className="navbar_heading">ZenCart</h1>
        </Link>

        <form className="navbar_form">
          <input
            type="text"
            name="navbar_search"
            className="navbar_search"
            placeholder="Search the Products..."
          />
          <button type="button" className="navbar_search_btn">
            <i className="bi bi-search"></i>
          </button>
        </form>

        <div className="navbar_links">
          {navbarLinks.map((links, idx) => (
            <NavLink key={idx} to={links.path}>
              {links.name}
            </NavLink>
          ))}

          <NavLink to="/cart" className="navbar_cart">
            Cart <span className="cart_count">0</span>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
