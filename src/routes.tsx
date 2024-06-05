import { CartPage } from "./pages/CartPage";
import {  ItemDetailPage } from "./pages/ItemDetailPage";
import { ItemListPage } from "./pages/ItemListPage";
import { Layout } from "./pages/Layout";
import { OrderDetail } from "./pages/OrderDetail";
import { OrderListPage } from "./pages/OrderListPage";
import { Orderpage } from "./pages/OrderPage";

const routes = [
  {
    element: <Layout />,
    children: [
      { path : "/", element:<ItemListPage></ItemListPage>},
      { path : "/product/:id", element:<ItemDetailPage></ItemDetailPage>},
      { path: "/cart", element:<CartPage></CartPage>},
      { path: "/order", element:<Orderpage></Orderpage>},
      { path: "/order/list", element:<OrderListPage></OrderListPage>},
      { path: "/order/detail", element:<OrderDetail></OrderDetail>}, 
    ],
  },
];

export default routes;