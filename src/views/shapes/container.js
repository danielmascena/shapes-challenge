import React from "react";

const Container = () => (
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
              ` P${i + 1} (x:${Number.parseInt(p.x, 10)}, y:${Number.parseInt(
                p.y,
                10
              )})`
          )
          .join("")}`}
        fontSize={15}
        fill="white"
      />
    </Layer>
  </Stage>
);

export default Container;
