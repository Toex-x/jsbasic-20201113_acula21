/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {

  let num = [];
  arr.forEach((e) => {
    if(a === e || b-- === e) num.push(e);
  });
  return num;
}
