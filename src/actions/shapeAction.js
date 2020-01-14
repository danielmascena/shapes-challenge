import * as types from "../constants/actionTypes";
import Point from "../model/Point";

export const actionCreation = {
    insertPoint(x, y) {
        const point = new Point(x, y);
        return {
            type: types.ADDING_POINT,
            payload: point
        }
    }
}