const buttons = document.querySelectorAll('.number')
const display = document.querySelector('.display')
const operator = document.querySelectorAll('.operator')
const result = document.querySelector('.result')
const clear = document.querySelector('.clear')

//좌항 우항 연산자 변수 선언
let n1 = ""
let n2 = ""
let calOperator = ""

//숫자 버튼을 클릭했을 때 디스플레이에 기존 값이 0이면 새로 클릭한 버튼 값으로 대체
//만약 0이 아닌 다른 경우이면 기존의 숫자에 새로 입력한 숫자를 연결해 표시
buttons.forEach(number =>{
  number.addEventListener("click",(e)=>{
    if(display.textContent === "0"){
      display.textContent = e.target.innerText;
    }else{
      display.textContent = display.textContent + e.target.innerText;     
    }   
//좌항 값 표시   
    if(calOperator === ""){
      n1 = n1 + e.target.innerText
      console.log(n1)
    }
  })
})

//연산자를 클릭했을 때 콘솔에 연산자 기록이 남게 만들기
operator.forEach(operator =>{
  operator.addEventListener("click",(e)=>{
    display.textContent = n1
    calOperator = e.target.innerText
    console.log(calOperator)
  })
})
//좌항이 있고, 연산자를 클릭했을 때 우항 값이 좌항 + 우항 값이 되어서 콘솔에 출력되게 하기
buttons.forEach(number =>{
  number.addEventListener("click",(e)=>{
    if(n1 && calOperator){
      n2 = n2 + e.target.innerText 
      display.textContent = n2
      console.log(n2)
    }
  })
})

//계산 함수
let calculate = function(firstOperand, calOperator,secondOperand){
  let answer = eval(`${firstOperand} ${calOperator} ${secondOperand}`)
return answer
}

//=을 클릭했을 때 계산 함수가 실행된 결과값이 나오도록 만드는 부분
result.addEventListener("click", function(){
  let firstOperand = Number(n1)
  let secondOperand = Number (n2)

  let answer = calculate (firstOperand , calOperator , secondOperand)
  display.textContent = answer
  console.log(answer)
})
//c버튼을 클릭했을 때 디스플레이 값이 0으로 표시되게 하는 부분
clear.addEventListener("click", () => {
  n1 = ''
  n2 = ''
  calOperator = ''
  display.textContent = '0'
})