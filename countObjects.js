/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
// Using for loop method
function getCount(objects) {
  let count = 0;
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].x === objects[i].y)
      count++;
  }
  return count;
}


// using for of method
function getCount1(objects) {
  let count = 0;
  for (const cur of objects) {
    if (cur.x === cur.y)
      count++;
  }
  return count;
}

// Using .filter method
function getCountX(objects) {
  return objects.filter(object => object.x === object.y).length;
}