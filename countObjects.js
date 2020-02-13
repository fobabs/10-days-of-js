/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
console.time('for loop');
function getCount(objects) {
  let count = 0;
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].x === objects[i].y)
      count++;
  }
  return count;
}
console.log(getCount([{ x: 1, y: 1 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 3, y: 4 }, { x: 4, y: 5 }]));
console.timeEnd('for loop');

// .filter method
console.time('filter');
function getCountX(objects) {
  return objects.filter(object => object.x === object.y).length;
}
console.log(getCountX([{ x: 1, y: 1 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 3, y: 4 }, { x: 4, y: 5 }]));
console.timeEnd('filter');