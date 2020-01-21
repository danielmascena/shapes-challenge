import React, { useEffect } from "react";
import Parallelogram from "../../components/Parallelogram";
import PointCircle from "../../components/PointCircle";
import Point from "../../model/Point";
import actionCreation from "../../actions/shapeAction";
import {
  desenhaCircuferencia,
  gerarParallelogram
} from "../../utils/shapeUtils";
import { validateParallelogram } from "../../services/shapeService";

let DrawShapes = ({
  points,
  pointsSet,
  circleCenter,
  circleRadius,
  dispatch
}) => {
  useEffect(() => {
    if (pointsSet.length === 3) {
      try {
        validateParallelogram(pointsSet);
      } catch (error) {
        alert(error.message);
      }
      const [p4, pontoIntersecao] = gerarParallelogram(pointsSet);
      dispatch(actionCreation.insertPoint(p4));

      dispatch(actionCreation.setCircleCenter(pontoIntersecao));

      const { area, radius } = desenhaCircuferencia(
        pointsSet[0],
        p4,
        pointsSet[1]
      );
      dispatch(actionCreation.setAreaRadius(area, radius));
    }
  }, [pointsSet.length]);
  return (
    <React.Fragment>
      {pointsSet.map((point, index) => (
        <PointCircle
          point={point}
          radius={11}
          index={index}
          draggable={true}
          fill="red"
          updateCoords={point =>
            dispatch.call(null, actionCreation.updatePoint(point))
          }
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
