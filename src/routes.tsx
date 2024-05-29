import { CartPage } from "./pages/CartPage";
import { DetailPage } from "./pages/DetailPage";
import { Layout } from "./pages/Layout";
import { ListPage } from "./pages/ListPage";
import { OrderList } from "./pages/OrderList";
import { Orderpage } from "./pages/OrderPage";

const routes = [
  {
    element: <Layout />,
    children: [
      { path : "/", element:<ListPage></ListPage>},
      { path : "/product", element:<DetailPage></DetailPage>},
      { path: "/cart", element:<CartPage></CartPage>},
      { path: "/order", element:<Orderpage></Orderpage>},
      { path: "/order/list", element:<OrderList></OrderList>},
      { path: "/order/detail", element:<Orderpage></Orderpage>}, 
    ],
  },
];

export default routes;