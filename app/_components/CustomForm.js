import React from "react";

function CustomForm({ children, action }) {
  return (
    <form
      action={action}
      className="flex flex-col gap-4 mb-2 p-10 bg-accent-800 "
    >
      {children}
    </form>
  );
}

export default CustomForm;
