/**
현업에서는 For 문을 잘 안쓴다.
Higher Order Function 을 더 선호한다.

Array 

그외의 자료구조 (Map, Set)


Data Type 이랑 Data structure 랑은 다르다!
복잡한거를 다룰려면, 자료구조로 넘어가야한다.

일반적인 배열은 Dense Array 라고 한다.
-> 동일한 자료형이 연속적으로 들어있는 배열

Js에서의 배열은 Sparse Array 다!
배열의 요소가 연속적으로 이어져 있지 않고, 메모리 공간이 동일하지 않음.
**/

console.log(Object.getOwnPropertyDescriptors([1,2,3]));


/**
 * array에서 pop, push, shift, unshift
 * pop -> 배열의 끝에 요소를 뺀거
 * push -> 배열의 끝에 요소를 넣는거
 * 
 * unshift, shift 쓰지 마셈 ㅋㅋ
 */

const arr = [1,2,3];
const a = arr.pop();
console.log(a); // 3
console.log(arr); // [1,2]

/** 고차함수 
 * 하나 이상의 함수를 인수로 취하거나, 함수를 결과로 반환하는 함수 
 * 매우 중요함! React 들어가기전에 완벽히 익혀보자
 * 
*/

// 잘못된 예시

//클로저를 사용해야한다.

//하기 코드는 오류를 발생시킴!

function makeCounter(predicate) {
    let num = 0;
    return predicate(num);
}

function increase(n) { 
    return ++n;
}

const increaser = makeCounter(increase);

console.log(increaser()); 
console.log(increaser());


//왜 그럴까? 바로 increaser()이 아닌 increaser으로 호출해야한다!
//그래서 코드를 수정하면

function makeCounter(predicate) {
    let num = 0;
    return function() {
        num = predicate(num);
        return num;
    };
}

function increase(n) { 
    return ++n;
}   

const increaser = makeCounter(increase);

console.log(increaser()); //1
console.log(increaser()); //2

//화살표 함수로도 바꿔보자!

//완벽한 함수로 구성하기 위해서, for if을 억제하자!?
//2중 for문 없이 쓰도록 노력해봐라~~!


//map(), sort(), filter(), find(), forEach(), reduce()
//6개를 꼭 기억하자
//forEach는 반환을 안함!

//map 
//배열을 순회하면서, 각 요소에 대하여 인자로 주어진 반환값으로 새로운 배열을 생성하여 생성

const numbers = [1,4,9];
let result = numbers.map(function(item, index, array)
{
    console.log(`${array}의 ${index}번째 요소 ${item}에 접근`);
    return item;
});

//더 줄이기
//보통 item만 쓴다!
let result2 = numbers.map( i => i+1);

//sort()
//스프레드 오퍼레이터를 이용해서 복사를 뜨고 정렬을 해야한다.
//기본 정렬은 문자열 기준이다!
//때문에, 숫자의 경우 정렬의 기준을 함수로 알려주어야한다!

const fruits = ['banana', 'apple', 'orange', 'kiwi'];
const points = [1, 10, 21, 2];

fruits.sort();
points.sort(); 

//개선을 하려면?

points.sort((a,b)=> b - a); //내림차순
points.sort((a,b)=> a - b); //오름차순


let array = [{name: 'Lee', age: 20},
{name: 'Kim', age: 30},
{name: 'Park', age: 10}];

array.sort(); //안됨!

//정확하게 명시를 해줘야함!
array.sort((a,b)=> a.age - b.age); //오름차순
array.sort((a,b)=> b.age - a.age); //내림차순   


//쭉 풀면?
array.sort((a,b) => {
    if(a.age < b.age) return -1;
    if(a.age > b.age) return 1;
    return 0;
}); //오름차순

//이런식으로 적용할 수가 있다!

//filter()
//콜백함수의 실행 결과가 true인 요소만 모아서 새로운 배열을 반환
//원본 배열은 변경되지 않음!

let someUsers = users.filter(item=>item.age<3);

console.log(someUsers);


//find()

let someUsers2 = users.find(item=>item.age<3);
console.log(someUsers2); //객체 하나만 반환
//-> true인 배열의 첫번째 요소를 반환!

//indexof Vs Includes

[1,2,3,4].indexOf(3); //2
[1,2,3,4].indexOf(5); //-1 -> 값이 없으면 이렇게 나옴


//indexOf에서는 존재하지 않는 값을 찾을 때 -1을 반환하므로, 조건문에서는 true로 동작함.
//존재 여부를 찾기 위해서는 includes를 사용!


arr.includes(3); //true
arr.includes(5); //false

if(arr.includes(3)){
    console.log('3이 있다!');
}

//forEach()
//배열을 순회하는거 for 대신에 사용해라!

const number = [1,2,3];
let total = 0;

number.forEach((item, index, array) => {
    console.log(`${index}번째 요소 ${item}에 접근`);
    total += item;
});

number.forEach(i => total += i);

console.log(total); //6

//reduce()
/*
previousValue, currentValue, currentIndex, array
앞에 2개만 사용해라!
*/
//누적이 된다!

const sum = arr.reduce((previousValue, currentValue) => {previousValue + currentValue;});

console.log(sum); //6

//map 
//key에 있는 다양한 자료형을 허용할 수 있다.


let a = {name: 'Lee', age: 20};

a[0];
a["name"];


let map = new Map();
map.set(a, 'developer');
map.set(1, 'number');
map.set('1', 'string');

map.get(a)
map.get(1)
map.get('1')


//map의 순회 예시

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomato', 350],
    ['onion', 50],
]);

for (let vegetable of recipeMap.keys()){
    console.log(vegetable);
}
for (let amount of recipeMap.values()){
    console.log(amount);
}               

for (let entry of recipeMap){
    console.log(entry);
}   

//for을 쓰지 말고 forEach를 써라!!

recipeMap.forEach((value, key, map) => {
    console.log(`${key}: ${value}`);
});

recipeMap.forEach((v, k, s) => console.log(`${k}: ${v}`)); 


//set은 value간의 중복을 허용하지 않는다.
//중복제거한 값을 보고 싶으면 set이라는 자료 구조를 활용해라!

let set = new set(["oranges", "apples", "bananas", "oranges", "apples"]);

set.forEach((value, valueAgain, set) => {
    console.log(`${value}: ${valueAgain}`);
});

//Map과의 호환성 때문에, Value 인자를 2개 받는다!   

