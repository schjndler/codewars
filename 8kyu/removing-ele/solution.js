// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

// function removeEveryOther(arr){
//     //your code here
//   }

// My Solution
function removeEveryOther(arr) {
  let neuerArr = [];
  for (let i = 0; i < arr.length; i += 2) {
    neuerArr.push(arr[i]);
  }
  return neuerArr;
}
