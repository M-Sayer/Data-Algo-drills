// 1) O(1)
// 2) O(n)

//

function isEven(value) {
  if (value % 2 === 0) {
    return true;
  }
  else
    return false;
}

//O(1) - fixed number of operations regardless of input (constant time)

function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
        const el2 = arr2[j];
        if (el1 === el2) return true;
    }
  }
  return false;
}

// O(n^2) - iteration for every value in the second array for each value in the first array creates a polynomial time complexity

function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

// O(n) - complexity is proportional to input size (linear time)

function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
        return i;
    }
  }
}

// O(n) - complexity is proportional to input size (linear time)

function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ", " +  arr[j] );
    }
  }
}

// O(n^2) - iteration of loop inside a loop creates a polynomial time complexity

function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    if (i === 1) {
      result.push(0);
    }
    else if (i === 2) {
      result.push(1);
    }
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
}

// function returns the fibonacci sequence from 0 until the num arg. it's runtime complexity is O(n) - it's runtime will change linearly according to its input size.

function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    }
    else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    }
    else {
      return currentIndex;
    }
  }
  return -1;
}

// O(log n) - Logarithmic Time - function splits sorted array, checks if index is greater or less than desired item,
//  moves the index accordingly, then repeats the process.

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// O(1) - constant time, will always generate a random number in one step regardless of input size

function isWhat(n) {
  if (n < 2 || n % 1 !== 0) {
    return false;
  }
  for (let i = 2; i < n; ++i) {
    if (n % i === 0) return false;
  }
  return true;
}

// Function checks to see if number input is odd or even. O(n) - complexity is proportional to input size (number size)
//  as it uses a loop

function hanoi(arr) {
  if (arr.length === 1) {
    return arr
  }

  let rod1 = ['']

  for (let i = 0; i <= arr.length; i++) {
    console.log(rod1[i])
    
    if (arr[i].length > rod1[i].length) {
      rod1.push(arr[i])
    }
    // for (let j = 0; j < arr.length; j++) {
    //   if (arr[i].length > arr[j].length) {
    //     rod1.push(arr[i])
    //   }
    // }
  }

}

console.log(hanoi(['- -', '-', '- - -']))