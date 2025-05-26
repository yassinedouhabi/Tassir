import AppRouter from "./router/AppRouter";

import { OrderProvider } from "./context/OrderContext";

function App() {
  return (
    <div className="container max-w-7xl mx-auto px-4">
      <OrderProvider>
        <AppRouter />
      </OrderProvider>
    </div>
  );
}

export default App;
