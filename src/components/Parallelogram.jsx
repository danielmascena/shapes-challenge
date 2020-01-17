import React from "react";
import { Line } from "react-konva";
import Point from "../model/Point";

const Parallelogram = ({ linePoints, color = "blue", point = new Point() }) => (
  <Line x={point.x} y={point.y} points={linePoints} closed stroke={color} />
);
export default Parallelogram;
