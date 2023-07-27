// 4. Enum
var NumberColor;
(function (NumberColor) {
    NumberColor[NumberColor["RED"] = 0] = "RED";
    NumberColor[NumberColor["GREEN"] = 1] = "GREEN";
    NumberColor[NumberColor["BLUE"] = 2] = "BLUE";
})(NumberColor || (NumberColor = {}));
var StringColor;
(function (StringColor) {
    StringColor["RED"] = "red";
    StringColor["GREEN"] = "green";
    StringColor["BLUE"] = "blue";
})(StringColor || (StringColor = {}));
/* 화면에 나오는 부분 */
const appDiv = document.getElementById("app");
appDiv.innerHTML = `
<section>
<h1>TypeScript 숫자형 Enum</h1>
<h3 class="red${NumberColor.RED}">${NumberColor.RED}</h3>
<h3 class="green${NumberColor.GREEN}">${NumberColor.GREEN}</h3>
<h3 class="blue${NumberColor.BLUE}">${NumberColor.BLUE}</h3>
</section>


<section>
<h1>TypeScript 문자형 Enum</h1>
<h3 class="${StringColor.RED}">${StringColor.RED}</h3>
<h3 class="${StringColor.GREEN}">${StringColor.GREEN}</h3>
<h3 class="${StringColor.BLUE}">${StringColor.BLUE}</h3>
</section>
`;
//# sourceMappingURL=04_Enum.js.map