const world = (name: string): string => {
  console.log(name);
  return name;
};

world("hello");
//설치 npm install --save-dev ts-node
//터미널에서 뭐 나오는지 일회성으로 보는거 npx ts-node index.ts => hello가 나옴
