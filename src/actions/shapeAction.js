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
    },
    setCircleCenter({x, y}) {
        return {
            type: types.SET_CIRCLE_CENTER,
            payload: {x, y}
        }
    },
    setAreaRadius(area, radius) {
        return {
            type: types.SET_AREA_RADIUS,
            payload: {area, radius}
        }
    },
    resetShapes(){
        return {
            type: types.RESET_SHAPES,
        
        }
    }
}
export default actionCreation;