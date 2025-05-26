import { useState } from "react";

import FormLayout from "../Layouts/FormLayout";
import FormGroup from "../Components/FormGroup";

import { useOrder } from "../context/OrderContext";

import { toast } from "sonner";

import axios from "axios";

const formFields = [
  {
    labelName: "Customer Name",
    type: "text",
    id: "customerName",
    placeholder: "Enter customer name",
  },
  {
    labelName: "Phone Number",
    type: "tel",
    id: "customerPhone",
    placeholder: "Enter phone number",
  },
  {
    labelName: "Delivery Address",
    type: "textarea",
    id: "customerAddress",
    placeholder: "Enter delivery address",
  },
  {
    labelName: "Order Description",
    type: "textarea",
    id: "orderDescription",
    placeholder: "Describe the order (optional)",
  },
  {
    labelName: "Order Type",
    type: "select",
    id: "orderType",
    placeholder: "Select order type",
  },
  {
    labelName: "Delivery Time",
    type: "datetime-local",
    id: "deliveryTime",
    placeholder: "Choose delivery time",
  },
  {
    labelName: "Important Notes",
    type: "textarea",
    id: "importantNotes",
    placeholder: "Additional notes",
  },
];

function CreateOrderForm() {
  const { addOrder } = useOrder();

  const [formData, setFormData] = useState(() => {
    const initial = {};
    formFields.forEach((field) => {
      initial[field.id] = "";
    });
    return initial;
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validations
    if (!formData.customerName || formData.customerName.trim().length < 2) {
      toast.error(
        "Please enter a valid customer name (at least 2 characters)."
      );
      return;
    }

    const phonePattern = /^[+\d\s-]{7,15}$/;
    if (!formData.customerPhone || !phonePattern.test(formData.customerPhone)) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    if (
      !formData.customerAddress ||
      formData.customerAddress.trim().length < 5
    ) {
      toast.error(
        "Please enter a valid delivery address (at least 5 characters)."
      );
      return;
    }

    if (!formData.orderType) {
      toast.error("Please select an order type.");
      return;
    }

    if (!formData.deliveryTime) {
      toast.error("Please select a delivery time.");
      return;
    }

    const deliveryDate = new Date(formData.deliveryTime);
    if (isNaN(deliveryDate.getTime()) || deliveryDate < new Date()) {
      toast.error("Please select a valid future delivery time.");
      return;
    }

    const orderedData = {
      customerName: formData.customerName.trim(),
      customerPhone: formData.customerPhone.trim(),
      customerAddress: formData.customerAddress.trim(),
      orderDescription: formData.orderDescription.trim(),
      orderType: formData.orderType,
      deliveryTime: deliveryDate.toISOString(),
      importantNotes: formData.importantNotes.trim(),
    };

    addOrder(orderedData);

    const axiosPromise = axios.post(
      "http://localhost:5000/orders",
      orderedData
    );

    toast.promise(axiosPromise, {
      loading: "Sending order...",
      success: (response) => {
        setFormData(() => {
          const initial = {};
          formFields.forEach((field) => {
            initial[field.id] = "";
          });
          return initial;
        });

        return response.data.message || "Order sent successfully!";
      },
      error: (error) => {
        console.error("Error sending order:", error);
        return (
          error.response?.data?.message ||
          error.message ||
          "Failed to send order."
        );
      },
    });
  };

  return (
    <FormLayout onSubmit={handleSubmit} className={"create-order-form"}>
      {formFields.map((field) => (
        <FormGroup key={field.id} className={`create-order-form__${field.id}`}>
          <label
            htmlFor={field.id}
            className="block text-gray-700 font-semibold mb-1"
          >
            {field.labelName}
          </label>

          {field.type === "textarea" ? (
            <textarea
              id={field.id}
              name={field.id}
              value={formData[field.id]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows={3}
            />
          ) : field.type === "select" ? (
            <select
              id={field.id}
              name={field.id}
              value={formData[field.id]}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                {field.placeholder}
              </option>
              <option value="food">Food</option>
              <option value="documents">Documents</option>
              <option value="other">Other</option>
            </select>
          ) : (
            <input
              type={field.type}
              id={field.id}
              name={field.id}
              value={formData[field.id]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
        </FormGroup>
      ))}

      <button
        type="submit"
        className="cursor-pointer w-full rounded-full bg-slate-800 text-white p-4"
      >
        Submit
      </button>
    </FormLayout>
  );
}

export default CreateOrderForm;
