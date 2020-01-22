import Point from "../model/Point";

export function generateParallelogram(pointsSet) {
    //TODO isolar comportamentos
    // inferir o 4º ponto atraves da projeção das retas paralelas
    const p4 = generateFourthPoint(pointsSet);
    //encontrar o centro do paralelograma; cruzamento (interseção) das diagonais
    // p1 -> p3 = diagonal 1
    const d1 = straightExpression(pointsSet[0], pointsSet[2]);
    // p2 -> p4 = diagonal 2
    const d2 = straightExpression(pointsSet[1], p4);
    // centro do paralelograma
    const [x, y] = intersectionLines(d1, d2);
    const pontoIntersecao = new Point(x, y);
    return [p4, pontoIntersecao];
}

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

export function calculateDistanceBetweenPoints(p1, p2) {
    return Math.sqrt(Math.pow(p2.y - p1.y, 2) + Math.pow(p2.x - p1.x, 2));
}

export function perpendicularStraight(a, b, x, y) {
    const coefAngular = -1 / a;
    const constante = y + x / a;
    return [coefAngular, constante];
}

export function intersectionLines(d1, d2) {
    const x = (d2.b - d1.b) / (d1.a - d2.a);
    const y = d1.a * x + d1.b;
    return [x, y];
}

export function getPrevId(id) {
    return id === 1 ? 4 : id - 1;
}
export function getNextId(id) {
    return id < 4 ? id + 1 : 1;
}

export function straightExpression(p1, p2) {
    const a = coefficient(p1, p2);
    const b = constantFunction(p1.x, p1.y, a);
    return {
        a,
        b
    };
}

export function generateFourthPoint([p1, p2, p3]) {
    const x4 = p3.x - p2.x + p1.x;
    const y4 = p3.y - p2.y + p1.y;
    const fourthPoint = new Point(x4, y4, p3.id + 1);
    return fourthPoint;
}

export function constantFunction(x, y, c) {
    return y - c * x;
}

export function coefficient(p1, p2) {
    if (p1.x !== p2.x) {
        return (p2.y - p1.y) / (p2.x - p1.x);
    } else {
        return null;
    }
    /*
      if (p2.x > p1.x) {
          return (p2.y - p1.y) / (p2.x - p1.x);
      } else if (p1.x > p2.x) {
          return (p1.y - p2.y) / (p1.x - p2.x);
      } else {
          throw new Error("ponto fora da reta");
      }
      */
}