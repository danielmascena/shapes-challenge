import Point from "../model/Point";

/**
 *
 * @param {Array} pointsSet
 * @returns {Array} fourth point and the intersection point
 */
export function generateParallelogram(pointsSet) {
    // infer the 4th point through the projection of the parallel lines
    const p4 = generateFourthPoint(pointsSet);
    const intersectionPoint = getParallelogramCenter(...pointsSet, p4);
    return [p4, intersectionPoint];
}
/**
 * Find the center of parallelogram by the intersection (crossing) of his diagonals
 * @param {Array} pointsSet
 * @param {Point} p4
 * @returns {Point} the intersection point of parallelogram
 */
export function getParallelogramCenter(p1, p2, p3, p4) {
    // p1 -> p3 = first diagonal
    const d1 = straightExpression(p1, p3);
    // p2 -> p4 = second diagonal
    const d2 = straightExpression(p2, p4);
    // parallelogram center
    const [x, y] = intersectionLines(d1, d2);
    // intersection point
    return new Point(x, y);
}

/**
 *
 * @param {Point} p1
 * @param {Point} p2
 * @param {Point} p3
 * @returns {number, number} the parallelogram area and the circle radius
 */
export function drawCircumference(p1, p2, p3) {
    const {
        a,
        b
    } = straightExpression(p1, p2);
    const [ap, bp] = perpendicularStraight(a, b, p3.x, p3.y);
    const [x, y] = intersectionLines({
        a,
        b
    }, {
        a: ap,
        b: bp
    });
    const h = calculateDistanceBetweenPoints(p3, {
        x,
        y
    });
    const base = calculateDistanceBetweenPoints(p1, p2);
    const area = h * base;
    const radius = Math.sqrt(area / Math.PI);
    return {
        area,
        radius
    };
}

/**
 *
 * @param {Point} p1
 * @param {Point} p2
 * @returns {number}
 */
export function calculateDistanceBetweenPoints(p1, p2) {
    return Math.sqrt(Math.pow(p2.y - p1.y, 2) + Math.pow(p2.x - p1.x, 2));
}

/**
 *
 * @param {number} a - straight angular coefficient
 * @param {number} b -
 * @param {number} x - coordenate x
 * @param {number} y - coordenate y
 * @returns {Array}
 */
export function perpendicularStraight(a, b, x, y) {
    const coefAngular = -1 / a;
    const constant = y + x / a;
    return [coefAngular, constant];
}

/**
 *
 * @param {Object} d1 - first diagonal
 * @param {Object} d2 - second diagonal
 * @returns {Array} coordenates of the crossing point
 */
export function intersectionLines(d1, d2) {
    const x = (d2.b - d1.b) / (d1.a - d2.a);
    const y = d1.a * x + d1.b;
    return [x, y];
}

/**
 *
 * @param {number} id - target point id
 * @returns {number} the previous point position
 */
export function getPrevId(id) {
    return id === 1 ? 4 : id - 1;
}

/**
 *
 * @param {number} id - target point id
 * @returns {number} the next point position
 */
export function getNextId(id) {
    return id < 4 ? id + 1 : 1;
}

/**
 *
 * @param {Point} p1
 * @param {Point} p2
 * @returns {Object} the angular coefficient
 */
export function straightExpression(p1, p2) {
    const a = coefficient(p1, p2);
    const b = constantFunction(p1.x, p1.y, a);
    return {
        a,
        b
    };
}

/**
 *
 * @param {Point[]} param0 - list of Points
 */
export function generateFourthPoint([p1, p2, p3]) {
    const x4 = p3.x - p2.x + p1.x;
    const y4 = p3.y - p2.y + p1.y;
    const fourthPoint = new Point(x4, y4, p3.id + 1);
    return fourthPoint;
}

/**
 *
 * @param {number} x - coordenate x
 * @param {number} y - coordenate y
 * @param {number} c - coefficient
 * @returns {number} straight expression constant
 */
export function constantFunction(x, y, c) {
    return y - c * x;
}

/**
 *
 * @param {Point} p1
 * @param {Point} p2
 */
export function coefficient(p1, p2) {
    if (p1.x !== p2.x) {
        return (p2.y - p1.y) / (p2.x - p1.x);
    } else {
        return null;
    }
}