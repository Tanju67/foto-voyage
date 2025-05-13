"use client";

import React from "react";

const capitalizeWords = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

function FormInput({ inputElement, label, type, defaultValue }) {
  if (inputElement === "textarea") {
    return (
      <div className="flex flex-col ">
        <label htmlFor={label}>{capitalizeWords(label)}</label>
        <textarea
          id={label}
          name={label}
          defaultValue={defaultValue ?? ""}
          cols="20"
          rows="7"
          className="bg-accent-900 p-3 outline-none text-gray-500 focus:text-primary-100 "
        ></textarea>
      </div>
    );
  }
  return (
    <div className="flex flex-col ">
      <label htmlFor={label}>{capitalizeWords(label)}</label>
      <input
        type={type}
        name={label}
        id={label}
        className="bg-accent-900 p-3 outline-none text-gray-500 focus:text-primary-100"
        defaultValue={defaultValue ?? ""}
      />
    </div>
  );
}

export default FormInput;
