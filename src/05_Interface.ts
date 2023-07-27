/* 5. interface */

interface Todo {
  id: number;
  content: string;
  isDone: boolean;
}
// Todo 인터페이스를 타입으로 받는 todos를 완성합니다.
let todos: Todo[] = [];

// Todo 인터페이스를 타입으로 받는 addTodo를 완성합니다.
function addTodo(todo: Todo) {
  todos = [...todos, todo];
}

// Todo 인터페이스를 타입으로 받는 newTodo를 완성합니다.
const newTodo: Todo = {
  id: 1,
  content: "learn typescript",
  isDone: false,
};

addTodo(newTodo);

console.log(todos);

// Interface Extends

interface User {
  name: string;
  age: number;
}

//Student 인터페이스를 작성합니다.
interface Student extends User {
  grades: number;
}

//Student 인터페이스를 받는 kimcoding을 완성합니다.
//kimcoding의 이름은 김코딩이고, 나이는 20세이며, 학년은 1입니다.
const kimcoding2: Student = {
  name: "kimcoding",
  age: 20,
  grades: 1,
};

console.log(kimcoding2);

interface Color {
  name: string;
  brightness: number;
}

interface ClothesType {
  kind: string;
  length: number;
}

//Closet 인터페이스를 작성합니다.
interface Closet extends Color, ClothesType {
  season: string;
}

//Closet 인터페이스를 받는 skirt를 완성합니다.
//skirt는 노란색이며, 밝기는 0이고, 종류는 치마이며 길이는 5 정도로 중간이며 여름용입니다.
const skirt: Closet = {
  name: "yellow",
  brightness: 0,
  kind: "skirt",
  length: 5,
  season: "summer",
};

console.log(skirt);
