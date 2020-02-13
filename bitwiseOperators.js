const getMaxLessThanK = (n, k) => {
  let max = 0;
  for (let a = 1; a <= n; a++) {
    for (let b = a + 1; b <= n; b++) {
      let ab = (a&b);
      if (ab < k && ab > max)
        max = ab;
    }
  }
  return max;
}

console.log(getMaxLessThanK(5, 2));
console.log(getMaxLessThanK(8, 5));