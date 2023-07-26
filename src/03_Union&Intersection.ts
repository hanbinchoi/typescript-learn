/* 3. Union & Intersection */

// Union
function printAge(person: { name: string; age: number | string }): void {
  let age;
  if (typeof person.age === "number" || typeof person.age === "string") {
    age = person.age.toString();
  }
  console.log(`${person.name}의 나이는 ${age}살 입니다.`);
}

const kimcoding = {
  name: "김코딩",
  age: 30,
};

const parhacker = {
  name: "박해커",
  age: "서른",
};

printAge(kimcoding);
printAge(parhacker);

// Intersection
function sendEmail(user: {
  name: string;
  email: string;
  isAdmin: boolean;
}): void {
  console.log(`안녕하세요, ${user.name}!`);
  if (user.isAdmin) {
    console.log(
      `
      권한이 admin이시군요.
      이메일은 ${user.email} 입니다.
      `,
    );
  } else {
    console.log(
      `
      권한이 user이시군요.
      이메일은 ${user.email} 입니다.
      `,
    );
  }
}

const choipd = {
  name: "최PD",
  email: "choipd@codestates.com",
  isAdmin: false,
};

const parkhacker = {
  name: "박해커",
  email: "parkhacker@codestates.com",
  isAdmin: true,
};

sendEmail(choipd);
sendEmail(parkhacker);
