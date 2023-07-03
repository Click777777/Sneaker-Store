import React from "react";
import { Alert } from "@material-tailwind/react";

const Error = () => {
  return (
    <div className="grid h-screen grid-cols-1 items-center justify-items-center">
      <div className="w-96">
        <Alert>
          Sorry no products match your filter search ... Clear the filter and
          try again 😀.
        </Alert>
      </div>
    </div>
  );
};

export default Error;
