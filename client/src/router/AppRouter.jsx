import { BrowserRouter, Routes, Route } from "react-router";

import Home from "../pages/Home";
import CreateOrder from "../pages/CreateOrder";
import OrdersList from "../pages/OrdersList";
import MyOrders from "../pages/MyOrders";
import Navbar from "../Components/Navbar";
import NavLayout from "../Layouts/NavLayout";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavLayout />}>
          <Route index element={<Home />} />
          <Route path="/orders" element={<CreateOrder />} />
          <Route path="/orders-list" element={<OrdersList />} />
          <Route path="/my-orders" element={<MyOrders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
