import React from "react";

const Parellelogram = () => {
  return (
    <Line
      onClick={() => console.log("clicked")}
      x={0}
      y={0}
      points={points}
      closed
      stroke="blue"
    />
  );
};
