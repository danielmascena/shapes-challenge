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
      return {
        ...state,
        pointsSet: [...state.pointsSet, payload.point]
      }
      case types.RESET_SHAPES:
        return initialState;
      default:
        return state;
  }
};

export default reducer;