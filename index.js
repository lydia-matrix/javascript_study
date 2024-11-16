const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
//배열 마지막 요소 찾기
arr[arr.length-1];

//at()은 위치가 아닌 값을 나타냄
//배열의 마지막 요소를 수정할 때 arr.at(-1) = 'i'; 라고 하면 'h' = 'i'라는 식이 되어 error
arr.at(4);
arr.at(-4);

//Q.9 배열의 마지막에서 세번째 요소 찾기
arr[arr.length-3];

//배열에 요소 추가
const target = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
target[target.length] = 'i';
//배열 맨 앞에 요소 추가
target.unshift('A');
//배열에 값 추가(맨 뒤에 요소 추가)
target.push('j');

//배열의 요소 수정
const upArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
upArr[upArr.length-1] = '에이치';

//배열에서 요소 삭제
const delArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
//마지막 요소 삭제
delArr.pop();
//첫 번째 요소 삭제
delArr.shift();
//중간 요소 삭제 splice(idx, 삭제할 값의 개수)
delArr.splice(1,1);
//인덱스 부터 배열 끝까지 모든 요소 삭제
delArr.splice(1);
//값을 삭제한 자리에 다른 값 넣기
delArr.splice(1,3,'가','나');
//배열 중간에 값 넣기(값 삭제하지 않고 값만 추가)
delArr.splice(1,0,'삭제하지않고추가');

//배열에서 요소 찾기
//주어진 값의 배열 존재 여부(true/false)
const includeArr = ['a', 'b', 'c', 'd', 'c', 'd', 'e', 'f', 'g', 'h'];
const result = includeArr.includes('d');
console.log(result);
const result2 = includeArr.includes('k');
console.log(result2);

//값의 인덱스 찾기
//indexOf: 처음 부터 검색 lastIndexOf: 마지막 부터 검색 존재하지 않으면 -1
const result3 = includeArr.indexOf('c');
console.log(result3);
const result4 = includeArr.lastIndexOf('d');
console.log(result4);
const result5 = includeArr.indexOf('k');
console.log(result5); //-1

//배열에서 indexOf || includes 사용시 값의 자료형도 일치해야 함에 주의
const resultA = ['2', '3', '4', '5'].indexOf('5') === 3; //true
const resultB = ['2', '3', '4', '5'].indexOf(5) === -1; //true
const resultC = ['2', '3', '4', '5'].includes(5) === false; //true
console.log(resultA, resultB, resultC);

//Tip : ||를 사용한 코드는 inclueds로 반복을 줄일 수 있다
const diff = '사과';
const orResult = diff === '바나나' || diff === '사과' || diff === '오렌지';
const includesResult = diff.includes('사과');
console.log("orResult : ", orResult, "// includesResult : ", includesResult);

