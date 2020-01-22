import React from "react";
import { Stage, Layer, Text } from "react-konva";
import { connect } from "react-redux";
import DrawShapes from "./DrawShapes";
import actionCreation from "../../actions/shapeAction";

const mapStateToProps = state => ({
  count: state.count,
  points: state.points,
  pointsSet: state.pointsSet,
  circleCenter: state.circleCenter,
  circleRadius: state.circleRadius
});
let Container = ({
  dispatch,
  count,
  points,
  pointsSet,
  circleCenter,
  circleRadius
}) => {
  const handleClick = event => {
    dispatch(actionCreation.insertPoint(event.currentTarget.pointerPos));
  };
  const handleReset = () => dispatch(actionCreation.resetShapes());
  /*
  const {innerHeight, innerWidth} = window;
  const [viewportWidth, setViewportWidth] = useState(innerWidth);
  const [viewportHeight, setViewportHeight] = useState(innerHeight);
  useEffect(() => {
    setViewportHeight(innerHeight);
    setViewportWidth(innerWidth);
  }, [innerHeight, innerWidth]);
  */
  return (
    <React.Fragment>
      <button
        className="shapes-btn"
        style={{ float: "left" }}
        onClick={handleReset}
      >
        Reset
      </button>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onClick={handleClick}
      >
        <Layer>
          <Text
            text={`Please choose ${4 - count} ${
              count < 3 ? "points" : "point"
            } to draw a parallelogram`}
            fontSize={15}
            fill="white"
          />
          <DrawShapes
            {...{ points, pointsSet, circleCenter, circleRadius, dispatch }}
          />
        </Layer>
      </Stage>
    </React.Fragment>
  );
};

Container = connect(mapStateToProps)(Container);
export default Container;
