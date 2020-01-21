import {
    store as shapeStore
} from "../App.jsx";
import {
    generateParallelogram,
    coefficient,
    constantFunction
} from "../utils/shapeUtils";
import actionCreation from "../actions/shapeAction";

/**
 * 
 * @param {neoX, neoY, previousPointId, nextPointId, point} newCoords 
 */
export function updateParallelogram({
    neoX: x,
    neoY: y,
    point,
    prevPointId,
    nextPointId,
}) {
    const state = shapeStore.getState();
    const dispatch = shapeStore.dispatch;
    const prevSiblingId = prevPointId - 1;
    const nextSiblingId = nextPointId - 1;
    const prevPoint = state.pointsSet[prevSiblingId];
    const nextPoint = state.pointsSet[nextSiblingId];
    const [newPrevCoord, pontoPrevIntersecao] = generateParallelogram([{
        x,
        y
    }, point, prevPoint]);
    const [newNextCoord, intersectionNextPoint] = generateParallelogram([{
        x,
        y
    }, point, nextPoint]);
    newPrevCoord.id = prevSiblingId;
    newNextCoord.id = nextSiblingId;
    console.log("updating parallelogram ", );
    console.table(x, y, point, prevSiblingId, prevPoint, newPrevCoord);
    dispatch(actionCreation.updatePoint(newPrevCoord));
    dispatch(actionCreation.updatePoint(newNextCoord));
}

export function validateParallelogram(pointsSet) {
    const [p1, p2] = pointsSet;
    let result = coefficient(p1, p2);
    if (result === null) {
        if (pointsSet[2].x === pointsSet[1].x) {
            throw new Error("Point inside the line, click again");
        }
    } else {
        const termoConst = constantFunction(
            pointsSet[0].x,
            pointsSet[0].y,
            result
        );
        if (pointsSet[2].y === result * pointsSet[2].x + termoConst) {
            throw new Error("Point inside the line, click again");
        }
    }
}