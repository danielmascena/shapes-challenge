import * as shapeUtils from "./shapeUtils";
import Point from "../model/Point";

const p1 = new Point(10, 10, 1);
const p2 = new Point(20, 20, 2);
const p3 = new Point(30, 30, 3);

test("getting negative 470 for coordenates (100, 30) and coefficient equal 5", () => {
  expect(shapeUtils.constantFunction(100, 30, 5)).toBe(-470);
});

test("if the current point id is less then 4, previous is id minus 1", () => {
  expect(shapeUtils.getPrevId(3)).toBe(2);
});
test("if the current point id is 1, then previous id should be 4", () => {
  expect(shapeUtils.getPrevId(1)).toBe(4);
});

test("if the current point id is less then 4, next is id plus 1", () => {
  expect(shapeUtils.getNextId(2)).toBe(3);
});

test("if the current point id is 4, then next id should be 1", () => {
  expect(shapeUtils.getNextId(4)).toBe(1);
});

test("coefficient should be null for x on the same line", () => {
  const p1 = new Point(10, 10);
  const p2 = new Point(10, 20);
  expect(shapeUtils.coefficient(p1, p2)).toBeNull();
});

test("coefficient should be 1 for coordenates: (10,10) & (20,20)", () => {
  expect(shapeUtils.coefficient(p1, p2)).toBe(1);
});

test("for coordenates: (10,10) (20,20) (30, 30), the 4th point should be (20,20) with id 4", () => {
  const p4 = new Point(20, 20, 4);
  expect(shapeUtils.generateFourthPoint([p1, p2, p3])).toMatchObject(p4);
});
