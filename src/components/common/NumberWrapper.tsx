import React from "react";

const NumberWrapper = (props: any) => {
  const { number} = props;
  return <div style={{
    padding: "2px 10px",
    border: ".5px",
  }}>{number}</div>;
};

export default NumberWrapper;
