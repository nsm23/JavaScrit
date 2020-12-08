//1. Почему код даёт именно такие результаты? -->
var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2 //В префиксной форме инкрементирование производится сразу, а возврат — уже с обновленным значением.
d = b++; alert(d); // 1 //постфиксной форме сначала происходит возвращение значения, а потом выполняется инкрементирование
c = (2+ ++a); alert(c); // 5 //Ранее в примере мы прибавили 1 к переменной "а"(line 3), сейчас мы снова прибавляем 1 и а=3 	
d = (2+ b++); alert(d); // 4 //т.к. в строке 4 была постфиксное икременирование и на данный момент  b = 2
alert(a); // 3	//прибавили единицу в 3 и 5 строке
alert(b); // 3	// прибавили единицу в 4 и 6 строке






//2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2); // данное выражение равносильно х = 1 + (2 * 2) т.е. (a *= 2) === (a = a*2)

console.log(x) // 5

/*3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.*/
function CalcNumber() {
    let a = parseInt(prompt('Input first number.'));
    let b = parseInt(prompt('Input second number.'));
    if (a >= 0 && b >= 0) {
        return (a - b);
    }
    else if (a< 0 && b<0) {
        return (a * b);
    } 
    else if ((a>=0 && b<0) || (a<0 && b>=0) ) {
        return (a + b);
    }
}
alert(CalcNumber())

/*4. Присвоить переменной а значение в промежутке [0..15]. 
С помощью оператора switch организовать вывод чисел от a до 15.*/
let a = Math.floor(Math.random()*15); //a = prompt('Введите число от 1 до 15.');
switch (a) {
case 1:
	alert (++a);
case 2:
	alert (++a);
case 3:
	alert (++a);
case 4:
	alert (++a);
case 5:
	alert (++a);
case 6:
	alert (++a);
case 7:
	alert (++a);
case 8:
    alert (++a);
case 9:
    alert (++a);		
case 10:
    alert (++a);		
case 11:
    alert (++a);
case 12:
    alert (++a);		
case 13:
    alert (++a);	
case 14:
    alert (++a);		
    break;	
        }       
        
        
/*5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
Обязательно использовать оператор return.*/        
const a = Math.floor(Math.random()*10);
const b = Math.floor(Math.random()*10);
function Summa(a,b) {
    return (a + b);
}
function Subtraction(a,b){
    return (a - b);
}
function Multiplication(a,b){
    return ( a * b);
}
function Division(a,b){
    return (a / b);
}
/*6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции выполнить одну из арифметических операций 
(использовать функции из пункта 3) и вернуть полученное значение (использовать switch).*/
function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case 'summa':
            return arg1 + arg2;
            break;
        case 'division':
            return arg1 / arg2;
            break;
        case 'subtraction':
            return arg1 - arg2;
            break;
        case 'multiplication':
            return arg1 * arg2;
            break;

    }
}