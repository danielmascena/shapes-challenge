import React from "react";

const Circle = point => (
  <Circle
    key={point.ind}
    x={point.x}
    y={point.y}
    radius={11}
    draggable
    shadowColor="black"
    shadowBlur={5}
    shadowOpacity={0.5}
    onDragStart={this.handleDragStart}
    onDragEnd={this.handleDragEnd}
    fill="red"
  />
);

export default Circle;
