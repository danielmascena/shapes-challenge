import * as types from "../constants/actionTypes";
import Point from "../model/Point";

export const initialState = {
  count: 0,
  points: [],
  pointsSet: [],
  circleCenter: {},
  circleRadius: 0
};

const reducer = (state = initialState, {
  type,
  payload
}) => {
  switch (type) {
    case types.CALCULATE_DIFFERENCES_BETWEEN_POINTS:
      return;
    case types.ADDING_POINT:
      if (state.count < 4) {
        const count = state.count + 1;
        const point = new Point(payload.x, payload.y, count);
        console.log("adding ", point);
        return {
          ...state,
          count: count,
          points: state.points.concat(Object.values(payload)),
          pointsSet: [...state.pointsSet, point]
        };
      }
      break;
    case types.UPDATING_POINT:
      
    return {

    };
    case types.RESET_SHAPES:
      return initialState;
    default:
      return state;
  }
};

export default reducer;