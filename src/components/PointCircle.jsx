import React, { useEffect } from "react";
import {connect} from "react-redux";
import Konva from "konva";
import { Circle } from "react-konva";

const mapStateToProps = state => ({
  pointsSet: state.pointsSet
});
let PointCircle = ({
  point: {x,y},
  radius,
  draggable,
  fill,
  stroke,
  index,
  shadowBlur = 5,
  shadowOpacity = 0.5,
  shadowColor = "black",
  pointsSet
}) => {
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

    const handleDragEnd = event => {
      console.log("Drag event ended ", event, pointsSet);
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

PointCircle = connect(mapStateToProps)(PointCircle);
export default PointCircle;
