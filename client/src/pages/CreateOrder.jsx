import { Link } from "react-router";

import CreateOrderForm from "../Components/CreateOrderForm";

function CreateOrder() {
  return (
    <div className="create-order">
      <h1>Create Order</h1>
      <Link to="/" className="text-blue-500 underline font-bold">
        Go Back
      </Link>
      <CreateOrderForm />
    </div>
  );
}

export default CreateOrder;
