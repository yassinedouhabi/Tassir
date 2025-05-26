import React from "react";

function Form({ className, children, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className={
        className +
        " max-w-md mx-auto my-6 p-6 bg-white border border-slate-300 rounded shadow-md"
      }
    >
      {children}
    </form>
  );
}

export default Form;
