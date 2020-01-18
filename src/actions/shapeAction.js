import * as types from "../constants/actionTypes";

const actionCreation = {
    insertPoint({x, y}) {
        return {
            type: types.ADDING_POINT,
            payload: {x, y}
        }
    },
    updatePoint(point) {
        return {
            type: types.UPDATING_POINT,
            payload: point
        }
    }
}
export default actionCreation;