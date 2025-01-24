// Given an array of size n-1 and given that there are numbers from 1 to n with one missing, the missing number is to be found.
// [1, 3, 5, 4] => 2
// [6, 3, 4, 5, 2] => 1
// [5, 3, 2, 1, 4] => 6

const numManquant = (arr) => {
  const sortedArr = arr.sort()
  for (let index = 0; index <= sortedArr.length; index++) {
    if (index + 1 !== sortedArr[index]) {
      console.log(index + 1)
      return index + 1
    }
  }
}

numManquant([6, 3, 4, 5, 2])
