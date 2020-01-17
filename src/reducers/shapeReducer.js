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
        console.log("adding ", state.points.concat(Object.values(payload)));
        return {
          ...state,
          count: state.count + 1,
          points: state.points.concat(Object.values(payload)),
          pointsSet: [...state.pointsSet, payload]
        };
      }
      case types.RESET_SHAPES:
        return initialState;
      default:
        return state;
  }
};

export default reducer;