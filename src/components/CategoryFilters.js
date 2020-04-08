import React from "react";

export default function CategoryFilters() {
  return (
    <div>
      {" "}
      <Form.Check
        label={"Cleaning"}
        name={"Cleaning"}
        type="checkbox"
        selected={isChecked}
        onChange={(event) => handleChange(event)}
      />
      <Form.Check
        label={"Exercise"}
        name={"Exercise"}
        type="checkbox"
        selected={isChecked}
        onChange={(event) => handleChange(event)}
      />
    </div>
  );
}
