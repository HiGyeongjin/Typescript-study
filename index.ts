// //1.
// const world = (name: string): string => {
//   console.log(name);
//   return name;
// };

// world("hello");
//설치 npm install --save-dev ts-node
//터미널에서 뭐 나오는지 일회성으로 보는거 npx ts-node index.ts => hello가 나옴

//2.

// restOfChar를 rest parameters형식으로 수정해주세요
function makeWord(firstChar: string, ...restOfChar: string[]) {
  return firstChar + restOfChar.join("");
}

let word = makeWord("타", "입", "스", "크", "립", "트");

console.log(word); // 타입스크립트 출력
