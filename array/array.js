// Create and initialize the array
const numbers = [2, 5, 0, 8, 1, 9, 0, 4, 6];

// output the array
console.log("Масив: ");
for (let arrItem of numbers){
    console.log(arrItem);
}
// Output the length of the array
console.log("Довжина масиву:", numbers.length);

// Output elements with even indexes
console.log("Елементи з парними індексами:");
for (let i = 0; i < numbers.length; i += 2) {
  console.log(numbers[i]);
}

// Output only even elements
console.log("Парні елементи:");
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}

// Output indexes of elements which equal 0
console.log("Індекси нульових елементів:");
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 0) {
    console.log(i);
  }
}

// Calculate and output the count of elements which equal 0
let countZero = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 0) {
    countZero++;
  }
}
console.log("Кількість нульових елементів:", countZero);

