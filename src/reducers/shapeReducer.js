import * as types from "../constants/actionTypes";
import Point from "../model/Point";

export const initialState = {
  count: 0,
  points: [],
  pointsSet: [],
  center: {},
  radius: 0
};

const reducer = (state, {
  type,
  payload
}) => {
  switch (type) {
    case types.CALCULATE_DIFFERENCES_BETWEEN_POINTS:
      return;
    case types.ADDING_POINT:
      if (state.count < 4)
        return {
          ...state,
          count: state.count + 1,
          points: [...state.point, Object.values(payload.point)],
          pointsSet: [...state.pointsSet, payload.point]
        }
    case types.RESET_SHAPES:
      return initialState;
    default:
      return state;
  }
};

export default reducer;