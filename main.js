/* let uservariant = Number(prompt("Your turn.Please, write Only 1-rock, 2-hole, 3-scissors or 4-paper:"))
// console.log(typeof uservariant)
let score=0
let pcvariant
function getRandomInt(){
	pcvariant = 1 + Math.floor(Math.random() * 4)
  console.log(pcvariant)
}
getRandomInt()
if (uservariant===1 && pcvariant===1) {
console.log("Your score is:" + score)

}

if (uservariant===1 && pcvariant===2) {
score--  
console.log("Your score is:" + score)

}
if (uservariant===1 && pcvariant===3) {
score++ 
console.log("Your score is:" + score)

}
if (uservariant===1 && pcvariant===4) {
score++
console.log("Your score is:" + score)

}
if (uservariant===2 && pcvariant===1) {
score++ 
console.log("Your score is:" + score)

}
if (uservariant===2 && pcvariant===2) {
console.log("Your score is:" + score)

}
if (uservariant===2 && pcvariant===3) {
score++
console.log("Your score is:" + score)

}
if (uservariant===2 && pcvariant===4) {
score--
console.log("Your score is:" + score)

}
if (uservariant===3 && pcvariant===1) {
score++
console.log("Your score is:" + score)

}
if (uservariant===3 && pcvariant===2) {
score++
console.log("Your score is:" + score)

}
if (uservariant===3 && pcvariant===3) {
console.log("Your score is:" + score)

}
if (uservariant===3 && pcvariant===4) {
score++
console.log("SCISSORS KILL! Your score is:" + score)

}
if (uservariant===4 && pcvariant===1) {
score--
console.log("Your score is:" + score)

}
if (uservariant===4 && pcvariant===2) {
score++
console.log("Your score is:" + score)

}
if (uservariant===4 && pcvariant===3) {
score--
console.log("Your score is:" + score)

}
if (uservariant===4 && pcvariant===4) {
console.log("Your score is:" + score)

}
console.log("Your final score is:"+ score) */


/* do {
  // попросить у пользователя число
  // проверка:
    // 1. если число пользователя === 0, то выйти из цикла
    // 2. иначе - выбрать один из вариантов, которые уже есть
  // вывести промежуточный результат
} while (true)
// вывести окончательный результат */

function fib(n) {
  if (n <= 1) {
    return n
  } else {
    return fib(n - 1) + fib(n - 2)
  }
}

for (let i = 0; i < 20; i++) {
  console.log(fib(i))
}
