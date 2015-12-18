function where(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  var index = arr.length;

  for (var i = arr.length - 1; i >= 0 ; i--) {
    if (num <= arr[i]) {
      index = i;
    }
  }
  // Find my place in this sorted array.
  return index;
}

// console.log(where([40, 60], 50));
console.log(where([10, 20, 30, 40, 50], 30));
