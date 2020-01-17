import React, { useEffect } from "react";
import Parallelogram from "../../components/Parallelogram";
import PointCircle from "../../components/PointCircle";
import Point from "../../model/Point";

let DrawShapes = ({ points, pointsSet, circleCenter, circleRadius }) => {
  useEffect(() => {
    console.log("draw shapes ", points, pointsSet, circleCenter, circleRadius);
  }, [pointsSet.length, points.length]);
  return (
    <React.Fragment>
      {pointsSet.map((point, index) => (
        <PointCircle
          point={point}
          radius={11}
          key={index}
          draggable={true}
          fill="red"
        />
      ))}
      <Parallelogram linePoints={points} />

      {circleCenter instanceof Point && (
        <PointCircle
          point={circleCenter}
          radius={circleRadius}
          stroke="yellow"
        />
      )}
    </React.Fragment>
  );
};

export default DrawShapes;
