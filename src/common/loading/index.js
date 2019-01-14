import React from "react";
import { Spinner, BounceTop, BounceBottom } from "./style";

const Loading = () => {
  return (
    <Spinner>
      <BounceTop />
      <BounceBottom />
    </Spinner>
  );
};
export default Loading;
