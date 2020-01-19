import * as types from "../constants/actionTypes";
import Point from "../model/Point";

export const initialState = {
  count: 0,
  points: [],
  pointsSet: [],
  circleCenter: new Point,
  circleRadius: 0,
  parallelogramArea: 0
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
        const neoPointSet = [...state.pointsSet, point];
       return {
          ...state,
          count,
          /** Avoid TypeError throwed by Object.values */
          points: neoPointSet.flatMap(point => point && [point.x, point.y]),
          pointsSet: neoPointSet
        };
      } else {
        return state;
      }
    case types.UPDATING_POINT:
      const {pos:indexForUpdate, newPoint: pointForUpdate} = payload;
      const pointSetUpdated = [];
      const updatedCoord = [];
      for (let index = 0; index < state.pointsSet.length; index++) {
        const point = state.pointsSet[index];
        if (index === indexForUpdate) {
          updatedCoord.push(pointForUpdate.x, pointForUpdate.y);
          pointSetUpdated.push(pointForUpdate);
        } else {
          updatedCoord.push(point.x, point.y);
          pointSetUpdated.push(point);
        }
      }
      return {
        ...state,
        points: updatedCoord,
        pointsSet: pointSetUpdated
      };
    case types.SET_CIRCLE_CENTER:
      const point = new Point(payload.x, payload.y);
      return {
        ...state,
        circleCenter: point
      }
    case types.SET_AREA_RADIUS:
      const {area, radius} = payload;
      return {
        ...state,
        circleRadius: radius,
        parallelogramArea: area
      }
    case types.RESET_SHAPES:
      return initialState;
    default:
      return state;
  }
};

export default reducer;