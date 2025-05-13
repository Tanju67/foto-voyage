import React from "react";
import Button from "./Button";

export default function NoPostFound({ link }) {
  return (
    <div className="px-6 lg:px-10 ">
      <p>No places found</p>
      <Button link={link}>Add places</Button>
    </div>
  );
}
