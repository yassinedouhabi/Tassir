import { Link } from "react-router";

function MyOrders() {
  return (
    <div>
      <h1 className="font-bold ">My Orders</h1>
      <Link to="/" className="text-blue-500 underline font-bold">
        Go Back
      </Link>
    </div>
  );
}

export default MyOrders;
