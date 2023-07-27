// 6. Type Aliases

//Todo 타입을 정의합니다.
type Show = {
  id: number;
  title: string;
  isDone: boolean;
};
//Todo 타입을 사용해 객체를 정의합니다.
const show: Show = {
  id: 1,
  title: "music show",
  isDone: false,
};

//Todo 타입을 사용한 객체를 출력해봅니다.
function getTodo(todo: Show) {
  console.log(todo);
}

getTodo(show);
