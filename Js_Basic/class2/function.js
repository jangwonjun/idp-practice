function addNumbers(){
    const num1 = 5;
    const num2 = 10;
    const num3 = 15;
    const sum = num1 + num2 + num3;

    alert("결과값 : " + sum);

}


//매개변수 사용하기

function addNumbers2(num1, num2, num3){
    const sum = num1 + num2 + num3;

    alert("결과값 : " + sum);
}
var result = addNumbers2(20, 30, 40);
console.log(result); 


// 추가 익명함수

(function(a,b){
    const sum = a + b;
}(100,200));

//전역 변수는 가급적 사용하지 않는 것이 좋다!



//화살표 함수 ES6 이후 사용하는 => 표기법 
//익명 함수에서만 사용할 수 있음.

//매개변수가 없을 때

const hi = function(){
    return alert("안녕하세요!");
}

const hi = () => { return alert("안녕하세요!")};

const hi = () => alert("안녕하세요!"); 

//매개변수 있을 때

let hi = function(user){
    document.write(user + "님 안녕하세요!");
}

let hi = (user) => { document.write(user + "님 안녕하세요!"); }

//매개변수가 한개 일때는 소괄호 생략 가능! 
let hi = user => { document.write(user + "님 안녕하세요!"); }


//이벤트와 이벤트 처리기
//마우스, 키보드, 문서 로딩, 폼 이벤트 등등 이 있음.
//이벤트 발생 -> 리스너를 함수로 사용할 수 있음.
//근데 외울필요는 없음! -> 열심히 구글링 하셈 ㅋㅋㅋ


//이벤트를 발생했을때 처리하는 함수를 이벤트 핸들러라고 함!

//DOM을 이용한 이벤트 처리기
//-> index.html 참고

//자바스크립트 객체
//1. Json, 2. 브라우저 관련 객체, 3. 내장 객체
const now = new Date();
document.write(now.toLocaleDateString());

//Array 객체

const numbers = [10,20,30,40,50];
const numbers2 = [];

numbers.length; //5

//property Vs Method
//property : 객체의 속성 -> 값
//method : 객체의 기능(함수) -> 동작

//Array 객체 외울필요 없음
//concat()

//join()

//push()
const a = [1,2,3,4];
a.push(5); //a 배열에 5 추가
a.unshift(0); //a 배열의 맨 앞에 0 추가

//pop()
a.pop();
a.shift();


//splice()

//스프레드 연산자 잘쓰자! 불변성 지키기
[...a].splice

//window 객체

window.document

window.name

window.screenX

window.scrrenY  

alert();
window.alert();


//location 개체

location.href //현재 페이지 주소
location.port //포트 번호
location.protocol



//screen 객체

screen.width
screen.height



//문서 객체 모델(DOM)
//-> 웹 문서에 더 잘 접근하고 제어할 수 있도록 도와주는 객체
//attribute 값이 포함되는지 잘 확인하기

//DOM 요소 접근하기 (정말중요!!!)

//getElementById() -> 하나만 리턴


//s가 있냐없냐! 주의하자!!

//getElementsByClassName() -> 여러개 리턴

//getElementsByTagName()

querySelector() -> 하나만 리턴
querySelectorAll() -> 여러개 리턴
//id는 하나만 있어야하지만, Class는 여러개 있어도 됨!

//id 이름 앞에서는 #, class는 . 찍어야함!

//innerText, innerHTML
//textContent
//실습을 해보겠으면 좋곘음.

//getAtribute(), setAttribute()


//setAttribute() -> 속성값 설정
//getAttribute() -> 속성값 가져오기 -> getterAttribute(속성명, 바꿀값)

//근데 화살표 함수가 더 중요하고 편함!

//event 객체





//addEventListener() -> 이벤트 리스너 등록
//index.html 참고








//css 속성 접근하기

document.getElementById("box").style.backgroundColor = "red";




//querySelector()로 접근하기 -> DOM에서 노드 추가, 삭제하기


//document.createTextNode(텍스트);

//appendChild() -> 자식 노드 추가

//createElement() -> 요소 노드 생성

//createAttribute() -> 속성 노드 생성
// 꼭 속성 값을 선택해줘여함!


//removeChild() -> 자식 노드 삭제

//replaceChild() -> 자식 노드 교체



