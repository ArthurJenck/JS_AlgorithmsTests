// Write a program that prints the numbers from 1 to 87. But for multiples of three print “Three” instead of the number and for the multiples of five print “Five”. For numbers which are multiples of both three and five print “Burger”

for (let index = 1; index <= 87; index++) {
  if (index % 3 === 0 && index % 5 === 0) {
    console.log("Burger")
  } else if (index % 3 === 0) {
    console.log("Three")
  } else if (index % 5 === 0) {
    console.log("Five")
  } else {
    console.log(index)
  }
}
