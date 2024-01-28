let arr = [2, 5, 7, 15, -5, -100, 55];

function getLowestGreatest(arr) {
let lowest = arr[0];
let greatest = arr[0];

  for ( let i = 1; i < arr.length; i++ ) {
      if ( arr[i] < lowest ) {
        lowest = arr[i];
      }
      if ( arr[i] > greatest ) {
        greatest = arr[i];
      }
     
    }
    return [lowest, greatest];
  }


let numbers = getLowestGreatest(arr);
console.log(numbers); // [ -100, 55 ]