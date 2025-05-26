import React from "react";

function FormGroup({ className, children }) {
  return <div className={className + " mb-4"}>{children}</div>;
}

export default FormGroup;
