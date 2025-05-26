import { Link } from "react-router";

function OrdersList() {
  return (
    <div className="order-list">
      <h1>Order List</h1>
      <Link to="/" className="text-blue-500 underline font-bold">
        Go Back
      </Link>
    </div>
  );
}

export default OrdersList;
