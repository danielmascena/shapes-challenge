import * as types from "../constants/actionTypes";

const actionCreation = {
    insertPoint({x, y}) {
        return {
            type: types.ADDING_POINT,
            payload: {x, y}
        }
    },
    updatePoint(pos, newPoint) {
        return {
            type: types.UPDATING_POINT,
            payload: {pos, newPoint}
        }
    }
}
export default actionCreation;