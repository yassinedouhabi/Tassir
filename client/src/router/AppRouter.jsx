import { BrowserRouter, Routes, Route } from "react-router";

import Home from "../pages/Home";
import CreateOrder from "../pages/CreateOrder";
import OrdersList from "../pages/OrdersList";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/orders" element={<CreateOrder />} />
        <Route path="/orders-list" element={<OrdersList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
