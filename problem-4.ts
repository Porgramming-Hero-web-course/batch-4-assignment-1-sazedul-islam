type Circle = {
    shape:'circle';
    radius: number;
}

type Rectangle= {
    shape: 'rectangle';
    width:number;
    height: number;
}

type union = Circle | Rectangle;

function calculateShapeArea<T extends Circle, U extends Rectangle>(circle: T, rectangle: U): { circleArea: number; rectangleArea: number } {
  let circleArea = 0;
  let rectangleArea = 0;

  if (circle.shape === 'circle') {
    circleArea = Math.PI * Math.pow(circle.radius, 2);
  }

  if (rectangle.shape === 'rectangle') {
    rectangleArea = rectangle.width * rectangle.height;
  }

  return { circleArea, rectangleArea };
}
const myCircle: Circle = { shape: 'circle', radius: 7 };
const myRectangle: Rectangle = { shape: 'rectangle', width: 4, height: 6 };
const areas = calculateShapeArea(myCircle, myRectangle);
