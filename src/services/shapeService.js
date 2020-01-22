import {
    store as shapeStore
} from "../App.jsx";
import {
    generateFourthPoint,
    straightExpression,
    intersectionLines,
    getPrevId,
    coefficient,
    constantFunction,
    getNextId
} from "../utils/shapeUtils";
import actionCreation from "../actions/shapeAction";
import Point from "../model/Point.js";

/**
 * 
 * @param {neoX, neoY, previousPointId, nextPointId, point} newCoords 
 */
export function updateParallelogram(
    neoX,
    neoY,
    prevPointPosition
) {

    const pointNewPosition = new Point(neoX, neoY, prevPointPosition.id);
    const upperPointId = getPrevId(prevPointPosition.id);
    const beneathPointId = getNextId(prevPointPosition.id);

    shapeStore.dispatch(actionCreation.updatePoint(pointNewPosition));
    updateVertix(upperPointId, pointNewPosition, prevPointPosition, false);
    updateVertix(beneathPointId, pointNewPosition, prevPointPosition, true);

}

export function updateVertix(thirdPointId, pointNewPosition, prevPointPosition, inverse) {
    // Getting the previous id to build a virtual parallelogram

    const state = shapeStore.getState();
    const thirdUpperPoint = state.pointsSet[thirdPointId - 1];

    const upperFourthPoint = generateFourthPoint([pointNewPosition, prevPointPosition, thirdUpperPoint]);
    const upperStraightOne = straightExpression(pointNewPosition, upperFourthPoint);
    let fourthId;
    if (inverse) {
        fourthId = getNextId(thirdUpperPoint.id) - 1;
    } else {
        fourthId = getPrevId(thirdUpperPoint.id) - 1;
    }
    const fourthUpperPoint = state.pointsSet[fourthId];
    const upperStraigthTwo = straightExpression(thirdUpperPoint, fourthUpperPoint);
    const newThirdPoint = new Point(...intersectionLines(upperStraightOne, upperStraigthTwo));
    newThirdPoint.id = thirdUpperPoint.id;
    shapeStore.dispatch(actionCreation.updatePoint(newThirdPoint));
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