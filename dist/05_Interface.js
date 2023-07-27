/* 5. interface */
// Todo 인터페이스를 타입으로 받는 todos를 완성합니다.
let todos = [];
// Todo 인터페이스를 타입으로 받는 addTodo를 완성합니다.
function addTodo(todo) {
    todos = [...todos, todo];
}
// Todo 인터페이스를 타입으로 받는 newTodo를 완성합니다.
const newTodo = {
    id: 1,
    content: "learn typescript",
    isDone: false,
};
addTodo(newTodo);
console.log(todos);
//Student 인터페이스를 받는 kimcoding을 완성합니다.
//kimcoding의 이름은 김코딩이고, 나이는 20세이며, 학년은 1입니다.
const kimcoding2 = {
    name: "kimcoding",
    age: 20,
    grades: 1,
};
console.log(kimcoding2);
//Closet 인터페이스를 받는 skirt를 완성합니다.
//skirt는 노란색이며, 밝기는 0이고, 종류는 치마이며 길이는 5 정도로 중간이며 여름용입니다.
const skirt = {
    name: "yellow",
    brightness: 0,
    kind: "skirt",
    length: 5,
    season: "summer",
};
console.log(skirt);
//# sourceMappingURL=05_Interface.js.map