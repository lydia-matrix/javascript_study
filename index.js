const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
//배열을 마지막 요소 찾기
console.log(arr[arr.length-1]);

//at()은 위치가 아닌 값을 나타냄
//배열의 마지막 요소를 수정할 때 arr.at(-1) = 'i'; 라고 하면 'h' = 'i'라는 식이 되어 error
console.log(arr.at(4));
console.log(arr.at(-4));

//Q.9 배열의 마지막에서 세번째 요소 찾기
console.log(arr[arr.length-3]);

//배열에 요소 추가
const target = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
target[target.length] = 'i';
//배열 맨 앞에 요소 추가
target.unshift('A');
//배열에 값 추가(맨 뒤에 요소 추가)
target.push('j');
console.log(target);

//배열의 요소 수정
const upArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
upArr[upArr.length-1] = '에이치';
console.log(upArr);

//배열에서 요소 삭제
const delArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
//마지막 요소 삭제
//delArr.pop();

//첫 번째 요소 삭제
//delArr.shift();

//중간 요소 삭제 splice(idx, 삭제할 값의 개수)
//delArr.splice(1,1);
//인덱스 부터 배열 끝까지 모든 요소 삭제
//delArr.splice(1);
console.log(delArr);