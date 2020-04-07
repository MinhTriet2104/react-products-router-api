import React from "react";

import HomePage from "./pages/Home/HomePage";
import ProductListPage from "./pages/ProductList/ProductListPage";
import ProductActionPage from "./pages/ProductAction/ProductActionPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: "/products",
    exact: false,
    main: () => <ProductListPage />,
  },
  {
    path: "/product/add",
    exact: false,
    main: () => <ProductActionPage />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFoundPage />,
  },
];

export default routes;
