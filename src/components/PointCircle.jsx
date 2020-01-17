import React, { useEffect } from "react";
import Konva from "konva";
import { Circle } from "react-konva";

const PointCircle = ({
  point,
  radius,
  draggable,
  fill,
  stroke,
  key,
  shadowBlur = 5,
  shadowOpacity = 0.5,
  shadowColor = "black"
}) => {
  let circleProperties = { ...point, radius };
  if (key !== undefined) {
    circleProperties.key = key;
  }
  if (typeof fill === "string") {
    circleProperties.fill = fill;
  }
  if (typeof stroke === "string") {
    circleProperties.stroke = stroke;
  }
  if (typeof draggable === "boolean" && draggable) {
    const handleDragStart = event => {
      event.target.setAttrs({
        shadowOffset: {
          x: 15,
          y: 15
        },
        scaleX: 1.1,
        scaleY: 1.1
      });
    };

    const handleDragEnd = event => {
      event.target.to({
        duration: 0.5,
        easing: Konva.Easings.ElasticEaseOut,
        scaleX: 1,
        scaleY: 1,
        shadowOffsetX: 5,
        shadowOffsetY: 5
      });
    };
    circleProperties = {
      ...circleProperties,
      draggable,
      shadowBlur,
      shadowOpacity,
      shadowColor,
      onDragStart: handleDragStart,
      onDragEnd: handleDragEnd
    };
  }
  //console.log("Point Circle", circleProperties);

  return <Circle {...circleProperties} />;
};

export default PointCircle;
