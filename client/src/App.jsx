import AppRouter from "./router/AppRouter";

import { OrderProvider } from "./context/OrderContext";

import { Toaster } from "sonner";

function App() {
  return (
    <div className="container max-w-7xl mx-auto px-4">
      <OrderProvider>
        <Toaster position="top-right" />
        <AppRouter />
      </OrderProvider>
    </div>
  );
}

export default App;
