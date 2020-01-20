import React, { useEffect } from "react";
import Parallelogram from "../../components/Parallelogram";
import PointCircle from "../../components/PointCircle";
import Point from "../../model/Point";
import actionCreation from "../../actions/shapeAction";
import {
  desenhaCircuferencia,
  coeficiente,
  constanteFuncao,
  gerarParallelogram
} from "../../utils/shapeUtils";

let DrawShapes = ({
  points,
  pointsSet,
  circleCenter,
  circleRadius,
  dispatch
}) => {
  useEffect(() => {
    console.log("Draw shapes");
    if (pointsSet.length === 3) {
      console.log(
        "time to set the fourth point ",
        points,
        pointsSet,
        circleCenter,
        circleRadius
      );
      const [p1, p2] = pointsSet;
      let result = coeficiente(p1, p2);
      if (result === null) {
        if (pointsSet[2].x === pointsSet[1].x) {
          alert("Ponto dentro da reta, clique novamente");
        }
      } else {
        const termoConst = constanteFuncao(
          pointsSet[0].x,
          pointsSet[0].y,
          result
        );
        if (pointsSet[2].y === result * pointsSet[2].x + termoConst) {
          alert("Ponto dentro da reta, clique novamente");
        } else {
          const [p4, pontoIntersecao] = gerarParallelogram(pointsSet);
          dispatch(actionCreation.insertPoint(p4));

          //console.log("x & y", x, y);
          dispatch(actionCreation.setCircleCenter(pontoIntersecao));

          const { area, radius } = desenhaCircuferencia(
            pointsSet[0],
            p4,
            pointsSet[1]
          );
          dispatch(actionCreation.setAreaRadius(area, radius));
        }
      }
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
            dispatch.call(null, actionCreation.updatePoint(index, point))
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
