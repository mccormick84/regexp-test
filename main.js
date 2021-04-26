let str = `
010-9397-5352.
thesecon@gmail.com
https://regexr.com/
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`;

//생성자 이용
// const regexp = new RegExp("the", "gi");

//리터럴 방식
// const regexp = /fox/gi;

// console.log(regexp.test(str));
// console.log(str.match(/\.$/gim));
// 각각의 줄을 시작과 끝으로 보겠다는 의미

// console.log(str.match(/https?/g));

// console.log(str.match(/[가-힣]{1,}/g));

// const h = "   the hello   world";

// console.log(h.replace(/\s/g, ""));

console.log(str.match(/(?<=@).{1,}/g));
