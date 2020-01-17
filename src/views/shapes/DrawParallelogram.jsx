import React from "react";
import Konva from "konva";
import { Stage, Layer, Text, Circle, Line } from "react-konva";

class DrawParallelogram extends React.Component {
  state = {
    count: 0,
    points: [],
    pointsSet: [],
    centro: {},
    radius: 0
  };

  componentDidUpdate(prevProps, prevState) {
    let result;
    const { pointsSet } = this.state;
    //console.log("pointset", pointsSet);
    if (this.state.count === 3) {
      const [p1, p2] = this.state.pointsSet;
      result = this.coeficiente(p1, p2);
      if (result === null) {
        if (pointsSet[2].x === pointsSet[1].x) {
          alert("Ponto dentro da reta, clique novamente");
          this.setState(prevState);
        }
      } else {
        const termoConst = this.constanteFuncao(
          pointsSet[0].x,
          pointsSet[0].y,
          result
        );
        if (pointsSet[2].y === result * pointsSet[2].x + termoConst) {
          alert("Ponto dentro da reta, clique novamente");
          this.setState(prevState);
        } else {
          // inferir o 4º ponto atraves da projeção das retas paralelas
          const [x4, y4] = this.gerarQuartoPonto(pointsSet);
          //console.log("quarto ponto", x4, y4);
          const p4 = { x: x4, y: y4 };
          this.setPoint(p4);
          //encontrar o centro do paralelograma; cruzamento (interseção) das diagonais
          // p1 -> p3 = diagonal 1
          const d1 = this.expressaoReta(pointsSet[0], pointsSet[2]);
          // p2 -> p4 = diagonal 2
          const d2 = this.expressaoReta(pointsSet[1], p4);
          // centro do paralelograma
          const [x, y] = this.intersecaoRetas(d1, d2);
          //console.log("x & y", x, y);
          this.setState(state => ({ ...state, centro: { x, y } }));

          this.desenhaCircuferencia(pointsSet[0], p4, pointsSet[1]);
        }
        //TODO:
      }
    }
  }

  desenhaCircuferencia(p1, p2, p3, centro) {
    console.log("circuferencia", p1, p2, p3);
    const { a, b } = this.expressaoReta(p1, p2);
    const [ap, bp] = this.retaPerpendicular(a, b, p3.x, p3.y);
    const [x, y] = this.intersecaoRetas({ a, b }, { a: ap, b: bp });
    const h = this.calcularDistanceEntrePontos(p3, { x, y });
    const base = this.calcularDistanceEntrePontos(p1, p2);
    const area = h * base;
    const radius = Math.sqrt(area / Math.PI);
    this.setState(state => ({ ...state, radius }));
  }

  calcularDistanceEntrePontos(p1, p2) {
    return Math.sqrt(Math.pow(p2.y - p1.y, 2) + Math.pow(p2.x - p1.x, 2));
  }

  retaPerpendicular(a, b, x, y) {
    const coefAngular = -1 / a;
    const constante = y + x / a;
    return [coefAngular, constante];
  }

  intersecaoRetas(d1, d2) {
    const x = (d2.b - d1.b) / (d1.a - d2.a);
    const y = d1.a * x + d1.b;
    return [x, y];
  }

  expressaoReta(p1, p2) {
    console.log("p1 & p2", p1, p2);
    const a = this.coeficiente(p1, p2);
    const b = this.constanteFuncao(p1.x, p1.y, a);
    console.log("a & b", a, b);
    return { a, b };
  }

  gerarQuartoPonto([p1, p2, p3]) {
    const x4 = p3.x - p2.x + p1.x;
    const y4 = p3.y - p2.y + p1.y;
    return [x4, y4];
  }

  constanteFuncao(x, y, c) {
    return y - c * x;
  }

  coeficiente(p1, p2) {
    if (p1.x !== p2.x) {
      return (p2.y - p1.y) / (p2.x - p1.x);
    } else {
      return null;
    }
    /*
    if (p2.x > p1.x) {
      return (p2.y - p1.y) / (p2.x - p1.x);
    } else if (p1.x > p2.x) {
      return (p1.y - p2.y) / (p1.x - p2.x);
    } else {
      throw new Error("ponto fora da reta");
    }
    */
  }

  setPoint({ x, y }) {
    if (this.state.count < 4)
      this.setState(state => ({
        count: state.count + 1,
        points: [...state.points, ...[x, y]],
        pointsSet: [...state.pointsSet, { x: x, y: y }]
      }));
  }

  handleDragStart = e => {
    e.target.setAttrs({
      shadowOffset: {
        x: 15,
        y: 15
      },
      scaleX: 1.1,
      scaleY: 1.1
    });
  };

  handleDragEnd = e => {
    e.target.to({
      duration: 0.5,
      easing: Konva.Easings.ElasticEaseOut,
      scaleX: 1,
      scaleY: 1,
      shadowOffsetX: 5,
      shadowOffsetY: 5
    });
  };

  render() {
    return (
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onClick={evt => this.setPoint(evt.currentTarget.pointerPos)}
      >
        <Layer>
          <Text
            text={`Coordenates: ${this.state.pointsSet
              .map(
                (p, i) =>
                  ` P${i + 1} (x:${Number.parseInt(
                    p.x,
                    10
                  )}, y:${Number.parseInt(p.y, 10)})`
              )
              .join("")}`}
            fontSize={15}
            fill="white"
          />
          {this.state.pointsSet.map((p, i) => (
            <Circle
              key={i}
              x={p.x}
              y={p.y}
              radius={11}
              draggable
              shadowColor="black"
              shadowBlur={5}
              shadowOpacity={0.5}
              onDragStart={this.handleDragStart}
              onDragEnd={this.handleDragEnd}
              fill="red"
            />
          ))}
          <Line
            onClick={() => console.log("clicked")}
            x={0}
            y={0}
            points={this.state.points}
            closed
            stroke="blue"
          />
          {this.state.centro.x && (
            <Circle
              x={this.state.centro.x}
              y={this.state.centro.y}
              radius={this.state.radius}
              stroke="yellow"
            />
          )}
        </Layer>
      </Stage>
    );
  }
}

export default DrawParallelogram;
