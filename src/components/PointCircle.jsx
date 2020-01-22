import React from "react";
import Konva from "konva";
import { Circle } from "react-konva";
import * as shapeService from "../services/shapeService";

const PointCircle = ({
  point,
  radius,
  draggable,
  fill,
  stroke,
  index,
  shadowBlur = 5,
  shadowOpacity = 0.5,
  shadowColor = "black"
}) => {
  const { x, y } = point;
  let circleProperties = { x, y, radius };

  if (index !== undefined) {
    circleProperties.key = index;
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
    const handleDragMove = event => {
      const {
        evt: { layerX: neoX, layerY: neoY }
      } = event;

      shapeService.updateParallelogram(neoX, neoY, point);
    };
    const handleDragEnd = event => {
      //const { x: neoX, y: neoY } = event.target._lastPos;

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
      onDragEnd: handleDragEnd,
      onDragMove: handleDragMove
    };
  }

  return <Circle {...circleProperties} />;
};

export default PointCircle;
