/* You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs. */

let frankenSplice = (arr1, arr2, n) => {
  let arr2Copy = [...arr2];
  arr2Copy.splice(n,0, ...arr1)
  return arr2Copy;
}