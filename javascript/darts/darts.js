export const solve = (x, y) => {
  if (!isValidInput(x,y)) return null;
  if (isPointWithinCircle(x, y, 1)) return 10;
  if (isPointWithinCircle(x, y, 5)) return 5;
  if (isPointWithinCircle(x, y, 10)) return 1;
  return 0;
}

const isValidInput = (x,y) => {
  return !isNaN(x) && !isNaN(y)
}

const isPointWithinCircle = (x, y, radius) => {
  return x <= radius && y <= radius
}
