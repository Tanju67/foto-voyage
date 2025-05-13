import Spinner from "@/app/_components/Spinner";
import React from "react";

function loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Spinner />
    </div>
  );
}

export default loading;
