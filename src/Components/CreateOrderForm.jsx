import FormLayout from "../Layouts/FormLayout";
import FormGroup from "../Components/FormGroup";

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
  return (
    <FormLayout className={"create-order-form"}>
      {formFields.map((field, index) => (
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
              placeholder={field.placeholder}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows={3}
            />
          ) : field.type === "select" ? (
            <select
              id={field.id}
              name={field.id}
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
              placeholder={field.placeholder}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
        </FormGroup>
      ))}
      <button
        type="submit"
        className=" cursor-pointer w-full bg-slate-800 text-white p-4"
      >
        Submit
      </button>
    </FormLayout>
  );
}

export default CreateOrderForm;
