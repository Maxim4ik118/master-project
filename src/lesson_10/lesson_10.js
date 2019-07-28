import './lesson_10.scss';
const numbers = [];
const btnLogIn = document.querySelector('#btn');
const btnAddNumber = document.querySelector('#addNumberBtn');
const output = document.querySelector('#output');

btnLogIn.onclick = logIn;
btnAddNumber.onclick = addNumber;

function logIn() {
  let userName = prompt();
  while (userName !== 'admin') {
    userName = prompt('Username not found!', '');
  }
  alert('Hello admin');
}

function calcTotal(numbersArray) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total;
}

function print(printString) {
  output.textContent = printString;
}

function addNumber() {
  let number = parseInt(prompt('Enter any number'));
  while (isNaN(number)) {
    number = parseInt(prompt('Enter any number'));
  }
  numbers.push(number);
  print('Total: ' + calcTotal(numbers));

}


function find(array, number) {
  let indexofNumber = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      indexofNumber = 1;
      break;
    }
  }
  return indexofNumber;
}

function findMax(array) {
  min = array[0];
  max = min;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]
    }
  }
  if (array[i] < max) {
    min = array[i]
  }
}


console.log(find([4, 6]), 23);
console.log(find([4, 6]), 4);
console.log(find([4, 6]), 6);

const salaries = [
  {
    name: 'John',
    salary: 2200
  },
  {
    name: 'Mike',
    salary: 250
  },
  {
    name: 'Alex',
    salary: 2560
  },
  {
    name: 'James',
    salary: 1200
  }
];
function findLargestSalary(arr) {
  // Your code here
  
  
let max = salaries[0].salary;
  for (let i = 0; i < salaries.length; i++) {
    if (max < salaries[i].salary) {
      max = salaries[i].salary
    }
  }
  console.log(max);
  return max;

}
function calcTotalSalaries(arr) {
  // // Your code here
  let result = 0;
  for (let i = 0; i < salaries.length; i++) {
    result = result + salaries[i].salary;
  }
  console.log(result);
  return result;
}
findLargestSalary(salaries);
calcTotalSalaries(salaries);


