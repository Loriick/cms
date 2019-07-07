import React from "react";
import { Spin } from "antd";

const style = {
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  top: 0,
  left: 0
};
export function SmallSpinner() {
  return (
    <div
      style={{
        ...style,
        backgroundColor: "rgba(0,0,0, 0.5)",
        position: "absolute"
      }}
    >
      <Spin size="small" />
    </div>
  );
}
export function Spinner() {
  return (
    <div style={style}>
      <Spin />
    </div>
  );
}
export function LargeSpinner() {
  return (
    <div style={style}>
      <Spin size="large" />
    </div>
  );
}
