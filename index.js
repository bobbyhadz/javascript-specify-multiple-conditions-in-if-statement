// EXAMPLE 1 - Specify multiple conditions in an if statement

// ✅ Using logical OR (||) - at least 1 condition has to be met

const num = 5;

if (num > 10 || num > 5 || num > 0) {
  // 👇️ if block runs
  console.log('✅ at least one condition is met');
} else {
  console.log('⛔️ neither condition is met');
}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using the logical AND (&&) operator - all conditions have to be met

// // ✅ Using logical AND (&&) - all conditions have to be met

// const num = 5;

// if (10 > num && 6 > num) {
//   // 👇️ if block runs
//   console.log('✅ all conditions are met');
// } else {
//   console.log('⛔️ not all conditions are met');
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using the logical AND (&&) and logical OR (||) operators in a single `if`

// const num = 5;

// if ((num > 20 && num > 30) || (10 > num && 15 > num)) {
//   // 👇️ if block runs
//   console.log('✅ at least one condition is met');
// } else {
//   console.log('⛔️ neither condition is met');
// }

// ------------------------------------------------------------------

// // EXAMPLE 4 - Using the `every()` method to specify multiple conditions

// const num = 5;

// const conditions = [num > 1, num > 2, num > 3];

// const allConditionsMet = conditions.every(
//   condition => condition,
// );
// console.log(allConditionsMet); // 👉️ true

// if (allConditionsMet) {
//   // 👇️ this runs
//   console.log('All conditions are met');
// } else {
//   console.log('Not all conditions are met');
// }

// ------------------------------------------------------------------

// // EXAMPLE 5 - Using the `some()` method to specify multiple conditions

// const num = 5;

// const conditions = [num > 10, num > 20, num > 3];

// const atLeastOneConditionMet = conditions.some(
//   condition => condition,
// );
// console.log(atLeastOneConditionMet); // 👉️ true

// if (atLeastOneConditionMet) {
//   // 👇️ this runs
//   console.log('At least one condition is met');
// } else {
//   console.log('None of the conditions are met');
// }

// ------------------------------------------------------------------

// // EXAMPLE 6 - Using an if/else if /else statement

// const num = 5;

// if (num > 5) {
//   console.log('num is greater than 5');
// } else if (num > 0) {
//   // 👇️ this runs
//   console.log('num is greater than 0');
// } else {
//   console.log('num is less than or equal to 0');
// }
