import React from "react";
import { useRouteMatch, Link } from "react-router-dom";

const menu = [
  {
    name: "Trang chủ",
    to: "/",
    exact: true,
  },
  {
    name: "Quản lý sản phẩm",
    to: "/products",
    exact: false,
  },
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  const match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <li className={`nav-item ${match ? "active" : ""}`}>
      <Link className="nav-link" to={to}>
        {label}
      </Link>
    </li>
  );
};

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Products
        </Link>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            {menu.map(({ name, to, exact }, index) => (
              <MenuLink
                key={index}
                label={name}
                to={to}
                activeOnlyWhenExact={exact}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
