import { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router";

import {
  IoPerson,
  IoCall,
  IoHome,
  IoDocumentText,
  IoOptions,
  IoTime,
  IoChatbubbleEllipses,
} from "react-icons/io5";

function OrdersList() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/orders")
      .then((response) => {
        setOrders(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="order-list min-h-dvh rounded-lg">
      <h1>Orders List</h1>
      <Link to="/" className="text-blue-500 underline font-bold">
        Go Back
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 mt-4">
        {loading ? (
          <div className="text-gray-500">Loading orders...</div>
        ) : orders.length === 0 ? (
          <div className="text-gray-500">No orders yet</div>
        ) : (
          orders.map((order) => (
            <div
              key={order._id}
              className="flex flex-col justify-between bg-white p-8 rounded-lg min-h-full shadow-md text-right border-2 border-slate-200"
            >
              <div className="order-id flex items-center justify-between mb-3 gap-4 border-b border-slate-200 pb-3">
                <span className="font-semibold text-lg"># Order ID:</span>
                <span className="text-slate-500 font-bold">
                  {order._id.slice(0, 8)}
                </span>
              </div>

              <div className="flex items-center justify-between mb-3 gap-4 border-b border-slate-200 pb-3">
                <div className="flex items-center flex-row-reverse gap-2">
                  <div className="font-semibold">Customer:</div>
                  <IoPerson />
                </div>
                <div className="font-normal text-slate-600">
                  {order.customerName}
                </div>
              </div>

              <div className="flex items-center justify-between mb-3 gap-4 border-b border-slate-200 pb-3">
                <div className="flex items-center flex-row-reverse gap-2">
                  <div className="font-semibold">Phone:</div>
                  <IoCall />
                </div>
                <div className="font-normal text-slate-600">
                  {order.customerPhone}
                </div>
              </div>

              <div className="flex items-center justify-between mb-3 gap-4 border-b border-slate-200 pb-3">
                <div className="flex items-center flex-row-reverse gap-2">
                  <div className="font-semibold">Address:</div>
                  <IoHome />
                </div>
                <div className="font-normal text-slate-600">
                  {order.customerAddress}
                </div>
              </div>

              <div className="flex items-center justify-between mb-3 gap-4 border-b border-slate-200 pb-3">
                <div className="flex items-center flex-row-reverse gap-2">
                  <div className="font-semibold">Description:</div>
                  <IoDocumentText />
                </div>
                <div className="font-normal text-slate-600">
                  {order.orderDescription}
                </div>
              </div>

              <div className="flex items-center justify-between mb-3 gap-4 border-b border-slate-200 pb-3">
                <div className="flex items-center flex-row-reverse gap-2">
                  <div className="font-semibold">Type:</div>
                  <IoOptions />
                </div>
                <div className="font-normal text-slate-600">
                  {order.orderType}
                </div>
              </div>

              <div className="flex items-center justify-between mb-3 gap-4 border-b border-slate-200 pb-3">
                <div className="flex items-center flex-row-reverse gap-2">
                  <div className="font-semibold">Delivery:</div>
                  <IoTime />
                </div>
                <div className="font-normal text-slate-600">
                  {new Date(order.deliveryTime).toLocaleString()}
                </div>
              </div>

              <div className="flex items-center justify-between mb-3 gap-4 border-b border-slate-200 pb-3">
                <div className="flex items-center flex-row-reverse gap-2">
                  <div className="font-semibold">Notes:</div>
                  <IoChatbubbleEllipses />
                </div>
                <div className="font-normal text-slate-600">
                  {order.importantNotes}
                </div>
              </div>

              <div className="flex items-center justify-end space-x-2 mt-8">
                <button className=" cursor-pointer px-3 py-1 bg-green-500 text-white rounded-4xl hover:bg-green-600 text-sm font-bold">
                  Confirm
                </button>
                <button className=" cursor-pointer px-3 py-1 bg-red-500 text-white rounded-4xl hover:bg-red-600 text-sm font-bold">
                  Cancel
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default OrdersList;
