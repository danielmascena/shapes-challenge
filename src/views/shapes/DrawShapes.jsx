import React, { useEffect } from "react";
import Parallelogram from "../../components/Parallelogram";
import PointCircle from "../../components/PointCircle";
import Point from "../../model/Point";
import actionCreation from "../../actions/shapeAction";
import {desenhaCircuferencia, coeficiente, constanteFuncao, gerarQuartoPonto, expressaoReta, intersecaoRetas} from "../../utils/shapeUtils";

let DrawShapes = ({ points, pointsSet, circleCenter, circleRadius, dispatch }) => {
  useEffect(() => {
    if (pointsSet.length === 3) {
      console.log("time to set the fourth point ", points, pointsSet, circleCenter, circleRadius);
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
          // inferir o 4º ponto atraves da projeção das retas paralelas
          const [x4, y4] = gerarQuartoPonto(pointsSet);
          //console.log("quarto ponto", x4, y4);
          const p4 = { x: x4, y: y4 };
          dispatch(actionCreation.insertPoint(p4));
          //encontrar o centro do paralelograma; cruzamento (interseção) das diagonais
          // p1 -> p3 = diagonal 1
          const d1 = expressaoReta(pointsSet[0], pointsSet[2]);
          // p2 -> p4 = diagonal 2
          const d2 = expressaoReta(pointsSet[1], p4);
          // centro do paralelograma
          const [x, y] = intersecaoRetas(d1, d2);
          //console.log("x & y", x, y);
          dispatch(actionCreation.setCircleCenter({ x, y }))

          const {area, radius} = desenhaCircuferencia(pointsSet[0], p4, pointsSet[1]);
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
          updateCoords={point => dispatch.call(null, actionCreation.updatePoint(index, point))}
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
