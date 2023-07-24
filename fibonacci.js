// Using iteration, write a function fibs which takes a number 
// and returns an array containing that many numbers from the 
// fibonacci sequence. Using an example input of 8, this function 
// should return the array [0, 1, 1, 2, 3, 5, 8, 13].

// Iterative
function fibsIterate (n) {
  let arr = [0, 1];
  if (n <= 2){
    return arr;
  } else if (n > 2){
    for (let i = 2; i < n; i += 1)  {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  return arr;
  }
}

// Recursive (calls itself)
function fibsRecursive (n) {
  let arr = [0, 1];
  for (let i = 2; i < n; i += 1){
    arr.push(arr[i - 1] + arr[i - 2])
    fibsRecursive(n - 1);
  }
  return arr;  
} 