import React, { useEffect } from "react";
import { Stage, Layer, Text } from "react-konva";
import reducer from "../../reducers/shapeReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import DisplayCoordirnates from "./DisplayCoordirnates";
import Parallelogram from "../../components/Parallelogram";
import PointCircle from "../../components/PointCircle";

import actionCreation from "../../actions/shapeAction";
import Point from "../../model/Point";


export const store = createStore(reducer);

const Container = () => {
  let {count, points, pointsSet, circleCenter, circleRadius, dispatch} = store.getState();

  const handleClick = event => {
    store.dispatch(actionCreation.insertPoint(event.currentTarget.pointerPos));
  };
  const select = state => state.pointsSet;
  const handleChange = () => {
    const previuosValue = pointsSet;
    const currentValue = select(store.getState());
    if (previuosValue !== currentValue) {
      console.log("sub ", store.getState());
      pointsSet = currentValue;
    }
  }
  const unsubscribe = store.subscribe(handleChange);
  useEffect(() => {
    console.log('hit');
  }, pointsSet.length);
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
    <Provider store={store}>
      <DisplayCoordirnates />
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onClick={handleClick}
      >
        <Layer>
          <Text
            text={`Please choose ${ 4 - count} ${
              count > 3 ? "points" : "point"
            } to draw a parallelogram`}
            fontSize={15}
            fill="white"
          />
          
          {pointsSet.map((point, index) => (
            <PointCircle
              point={point}
              radius={11}
              index={index}
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
          
        </Layer>
      </Stage>
    </Provider>
  );
};

export default Container;
