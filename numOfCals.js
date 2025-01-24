// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.
// [1,1,1] et k=2 => output = 2
// [1,2,3,0,3] et k=3 => output = 5
// [4, 2, 9, 7, 19] et k=5 => output = 0
// [-1,1] et k = 0 ⇒ output = 1

const numOfCals = (arr, num) => {
  let additions = 0
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === num) {
      additions++
    }
    let currentAdd = arr[index]
    for (let j = index + 1; j < arr.length; j++) {
      if (currentAdd + arr[j] === num) {
        additions++
      }
      currentAdd += arr[j]
    }
  }

  console.log("total", additions)
  return additions
}

numOfCals([-1, 1], 0)
