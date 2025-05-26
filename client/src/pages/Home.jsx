import { Link } from "react-router";

function Home() {
  return (
    <div className="cta">
      <Link
        to="/orders"
        className="create-order-link block text-blue-500 underline font-bold"
      >
        Go To Create Your Order
      </Link>
      <Link
        to="/orders-list"
        className="orders-list-link block text-blue-500 underline font-bold"
      >
        Go To Order List
      </Link>
      <Link
        to="/my-orders"
        className="orders-list-link block text-blue-500 underline font-bold"
      >
        My Orders
      </Link>
    </div>
  );
}

export default Home;
