/* 2. Function */
/* 1-1번 */
function sumNumber(a, b) {
  return a + b;
}
/* 1-2번 */
const sumNumber2 = (a, b) => {
  return a + b;
};
console.log(sumNumber(1, 2));
console.log(sumNumber2(1, 2));
/* 2번 */
let sumString = (first, last) => {
  return `${first} ${last}`;
};
console.log(sumString("hi", "codestates"));
/* 3번 */
// let sumString2 = (first: string, last?: string): string => {
//   return `${first} ${last}`;
// };
let sumString2 = (first, last = "kim") => {
  return `${first} ${last}`;
};
//아래 코드도 동작하도록 구현해봅시다.
console.log(sumString2("hi"));
/* 4번 */
let printError = () => {
  console.log("error message");
};
printError();
//# sourceMappingURL=02_Function.js.map
