import * as types from "../constants/actionTypes";

const actionCreation = {
    insertPoint(point) {
        return {
            type: types.ADDING_POINT,
            payload: point
        }
    }
}
export default actionCreation;