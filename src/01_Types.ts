/* 1. Type */

/* boolean형 */
let isDone: boolean = false;
let isShow: boolean = true;

console.log(isDone);
console.log(isShow);

/* 숫자형 */
let num1: number = 7;
let num2: number = 0.6878;

console.log(num1);
console.log(num2);

/* 문자형 */
let str: string = "hello";

console.log(str);

/* 숫자형 배열의 타입을 정하는 2가지 방법 */
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

console.log(list1);
console.log(list2);

/* 문자형 배열의 타입을 정하는 2가지 방법 */
let list3: string[] = ["banana", "apple", "mango"];
let list4: Array<string> = ["banana", "apple", "mango"];

console.log(list3);
console.log(list4);

/* 튜플 */
let list5: [number, string, boolean] = [1, "banana", true];

console.log(list5);

/* 객체형 타입을 정하는 2가지 방법 */
let obj: object = {};
let obj2: {
  name: string;
  age: number;
  isDeveloper: boolean;
} = {
  name: "kimcoding",
  age: 20,
  isDeveloper: true,
};

console.log(obj);
console.log(obj2);
