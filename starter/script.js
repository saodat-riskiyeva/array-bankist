'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (value, key) {
    const type = value > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements">
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      key + 1
    } ${type}</div>
          <div class="movements__value">${value}</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const user = 'Steven Thomas Williams'; // stw

const calcPrintBalance = function (movements) {
  const balance = movements.reduce((bal, mov) => bal + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};

calcPrintBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const income = movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${income}EUR`;

  const withdrawal = movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${Math.abs(withdrawal)}EUR`;

  const interest = movements
    .filter(mov => mov > 1)
    .filter(mov => mov * 0.012 > 1)
    .reduce((acc, cur) => acc + cur * 0.012, 0);
  labelSumInterest.textContent = `${interest}EUR`;
};

calcDisplaySummary(account1.movements);

const createUsername = function (accs) {
  accs.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};

createUsername(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// // LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// /////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE method - does not mutate array
// console.log(arr.slice(2));
// console.log(arr);
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// // SPLICE method - mutates array
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// // REVERSE
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// //CONCAT
// arr = ['a', 'b', 'c', 'd', 'e'];
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN
// console.log(letters.join(' - '));

// // AT
// const arr3 = [23, 11, 64];
// console.log(arr3[0]);
// console.log(arr3.at(0));

// // getting last array element
// console.log(arr3[arr3.length - 1]);
// console.log(arr3.slice(-1)[0]);
// console.log(arr3.at(-1));

// console.log('jonas'.at(0));
// console.log('jonas'.at(-1));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}:You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('------- FOREACH -------');
// movements.forEach(function (movement, i, arr) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}:You withdrew ${Math.abs(movement)}`);
//   }
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;
// // MAP
// const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// const movementDescriptions = movements.map((mov, i) => {
//   return `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${mov}`;
// });
// console.log(movementDescriptions);

const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const deposits = movements2.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements2);
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements2) if (mov > 0) depositsFor.push(mov);

// console.log(depositsFor);

// const withdrawals = movements2.filter(mov => mov < 0);
// console.log(withdrawals);

// accumulator = snowball
//
// const balance = movements2.reduce(function (acc, curr, i, arr) {
//   console.log(`Iteration mumber ${i}: ${acc}`);
//   return acc + curr;
// }, 0);

// const balance = movements2.reduce((acc, curr) => acc + curr, 0);

// console.log(balance);

// let balance2 = 0;
// for (const mov of movements2) balance2 += mov;
// console.log(balance2);

// const max = movements2.reduce((fir, sec) => (fir > sec ? fir : sec));

// console.log(max);

const eurToUsd = 1.1;

// PIPELINE
const totalDepositInUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, cur) => acc + cur, 0);
console.log(totalDepositInUSD);
