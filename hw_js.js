// - присвоить каждому из следующих значений свою переменную:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false
// Вывести каждую при помощи console.log , alert, document.write
let hello = 'hello';
console.log(hello);

let owu = 'owu';
document.write('<h1>owu</h1>');

let com = 'com';
alert(com);

let ua = 'ua';
console.log(ua);

let num1 = 1;
alert(num1);

let num10 = 10;
console.log(num10);

let num999 = -999;
console.log(num999);

let num123 = 123;
document.write(num123);

let PI = 3.14;
console.log(PI);

let num27 = 2.7;
document.write(num27);

let num16 = 16;
alert(num16);

let boolTrue = true
console.log(boolTrue);

let boolFalse = false;
document.write('<br/>' + boolFalse);



// - переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write
hello = 'Good bye';
console.log(hello);

owu = 'owu.com.ua';
document.write('<h1>owu</h1>');

com = 'com.ua';
alert(com);

ua = 'ua=ua';
console.log(ua);

num1 = 100500;
alert(num1);

num10 = -100;
console.log(num10);

num999 = 999000;
console.log(num999);

num123 = 123321;
document.write(num123);

PI = 3.14159265359;
console.log(PI);

num27 = 2.987;
document.write(num27);

num16 = 160;
alert(num16);

boolTrue = false
console.log(boolTrue);

boolFalse = true;
document.write('<br/>' + boolFalse);


// - Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
let num_0 = 123;
console.log(num_0);

let num_1 = 321;
alert(num_1);

let num_2 = 333;
document.write("<br/>" +num_2);


let str = "String1";
console.log(str);

let str1 = 'qwerty';
alert(str1);

let str2 = '6546dsdasada';
document.write("<br/>" +str2);

// - при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные.
// Вывести каждую при помощи console.log , alert, document.write

let surname = prompt("Input surname");

let name = prompt("Input name");

let secondName = prompt("Input secondName");
console.log(surname);
alert(name);
document.write("<br/>" +secondName);

// - Взять переменные из задания 4 и сконкатенировать их в одной переменной person.

let person = surname + " " + name + " " + secondName;
console.log(person);

// - Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.

surname = prompt("Input surname Cat");

name = prompt("Input name Cat");

secondName = prompt("Input secondName Cat");
console.log(surname);
alert(name);
document.write("<br/>" +secondName);


person = surname + " " + name + " " + secondName;
console.log(person);

// - при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.

let a1 = +prompt("Input number 1:");
let a2 = +prompt("Input number 2:");
let a3 = +prompt("Input number 3:");
console.log(a1 + a2 + a3);

// - при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
let b1 = prompt("Input number 1:");
let b2 = prompt("Input number 2:");
let b3 = prompt("Input number 3:");
let b4 = prompt("Input number 4:");
let result = parseInt(b1) + parseInt(b2) + parseInt(b3) + parseInt(b4);
console.log(result);

// - при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
let f1 = prompt("Input Float number 1:");
let f2 = prompt("Input Float number 2:");
let f3 = prompt("Input Float number 3:");
let resultFloat = parseFloat(f1) + parseFloat(f2) + parseFloat(f3);
console.log(resultFloat);

// - при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера
f1 = prompt("Input Float number 1:");
f2 = prompt("Input Float number 2:");
f3 = prompt("Input Float number 3:");
resultFloat = Math.round(parseFloat(f1)) + Math.round(parseFloat(f2)) + Math.round(parseFloat(f3));
console.log(resultFloat);

// - при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень.
// Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.

let n1 = prompt("Input number 1:");
let n2 = prompt("Input number 2:");

n1 = Math.round(n1);
n2 = Math.round(n2);
document.write('<br/>' + Math.pow(n1, n2));

// - При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;

let a = 100;
console.log(typeof (a));

let b = '100';
console.log(typeof (b));

let c = true;
console.log(typeof (c));

let d = undefined;
console.log(typeof (d));

// - Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//     В одинаковых выражениях в задании не использовать два одинаковых оператора.
//     Каждое выражение вложить в свою переменную
// 5 ? 6 -> true
//     5 ? 6 -> false
//         5 ? 6 -> false
//             5 ? 6 -> false
//                 10 ? 10 -> true
//                     10 ? 10 -> true
//                         10 ? 10 -> false
//                             10 ? 10 -> false
//                                 10 ? 10 -> false
//                                     123 ? '123' -> false
//                                         123 ? '123' -> true
console.log(5 < 6) //-> true
console.log(5 > 6) //-> false
console.log(5 == 6) //-> false
console.log(5 === 6) //-> false
console.log(10 == 10) //-> true
console.log(10 === 10) //-> true
console.log(10 > 10) //-> false
console.log(10 < 10) //-> false
console.log(10 != 10)// -> false
console.log(123 === '123') //-> false
console.log(123 == '123')//-> true


//
//                                             Дополнительно:
// - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
console.log("132 > 100 && 45 < 12 -> " + 132 > 100 && 45 < 12 ); //false
console.log("34 > 33 && 23 < 90 -> " + 34 > 33 && 23 < 90 ); //false
console.log("99 > 100 && 45 > 12 -> " + 99 > 100 && 45 > 12 ); //false
console.log("132 > 100 || 45 < 12 -> " + 132 > 100 || 45 < 12 ); //false
console.log("111 > 11 || 45 < 111 -> " + 111 > 11 || 45 < 111 ); //true
console.log("(111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) -> " + ( 111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); //true
console.log("(111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) -> " + (111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );//true
console.log("(132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) -> " + (132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );//true
console.log("(111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ) -> " + (111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));//true
console.log("!!'-1' -> " + !!'-1');//true
console.log("!!-1 -> " + !!-1);//true
console.log("!!'0' -> " + !!'0');//true
console.log("!!'null' -> " + !!'null');//true
console.log("!!'undefined' ->" + !!'undefined');//true
console.log("!!(3/'owu') ->" + !!(3/'owu')); //false
console.log("(111 > 11 || 45 < 111) ||  !!'0' -> " + (111 > 11 || 45 < 111) ||  !!'0');//true
console.log("(!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ) ->" + (!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); //false


// Дан массив:
    let users = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true}
    ];
// - обратиться в соответсвующую ячейку массива и соответсвующий параметр объекта и вывести в консоль
// Пример : вывести имя 1го объекта . Ответ : console.log(users[0].name). Будьте внимательны! 4й объект имеет индес 3!
//     -- статус Андрея
console.log(users[7].status);

// -- статус Максима
console.log(users[10].status);

// -- имя предпоследнего объекта
console.log(users[users.length - 2].name );

// -- имя третьего объекта
console.log(users[2].name);

// -- возраст Олега
console.log(users[6].age);

// -- возраст Оли
console.log(users[3].age);
console.log(users[9].age);

// -- возраст + имя 5го объекта
console.log(users[4].age + " " + users[4].name);

// -- возраст + сатус ани
console.log(users[5].age + " " + users[5].status);

/////////*****************************************************************************************************


//
// -Возьмите файл task1_template.html, подключите к нему скрипт, и работайте в нем.
//     Напишите код, который :
// -- получает текст из параграфа с id "content"
let content = document.getElementById("content").textContent;
console.log(content);

// -- получает текст из блока  с id "rules"
let rules = document.getElementById("rules").textContent;
console.log(rules);

// -- замените текст параграфа с id 'content' на любой другой
let content1 = document.getElementById("content");
content1.innerText = "Мойте руки!!!";
console.log(content1);

// -- замените текст параграфа с id 'rules' на любой другой
let rules1 = document.getElementById("rules");
rules1.innerText = "Смотри на второе правило БК."
console.log(rules1);

// -- поменятй каждому элементу цвет фона на красный
let li = document.getElementsByTagName("li");
content1.style.backgroundColor = 'red';
rules1.style.backgroundColor = 'red';
li[0].style.backgroundColor = 'red';
li[1].style.backgroundColor = 'red';
li[2].style.backgroundColor = 'red';
li[3].style.backgroundColor = 'red';

// or
for (let i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = 'red';
}

// -- поменятй каждому элементу цвет текста на синий
content1.style.color = "blue";
rules1.style.color = "blue";
li[0].style.color = 'blue';
li[1].style.color = 'blue';
li[2].style.color = 'blue';
li[3].style.color = 'blue';

//or

for (let i = 0; i < li.length; i++) {
    li[i].style.color = 'blue';
}

// -- получить весь список классов элемента id = rules и вывести в console.log()
rules = document.getElementById("rules");
console.log(rules);

// -- получить все элементы с классом fc_rules
let fc_rules = document.getElementsByClassName("fc_rules")
console.log(fc_rules);

// -- поменять цвет текста у всех элементов fc_rules на красный
for (let i = 0; i < fc_rules.length; i++) {
    fc_rules[i].style.color = 'red';
}
//
// CLASS
//
// 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
// При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.
//
let str12 = "Привет";
let num = 123;
let flag = true;
let txt = "true";
console.log(typeof str12);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);

// 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
//     5 + 3,
//     5 - 3,
//     5 * 3,
//     5 / 3,
//     5 % 3
// поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.
let a1a = 5 + 3;
let a2a = 5 - 3;
let a3a = 5 * 3;
let a4 = 5 / 3;
let a5 = 5 % 3;
console.log(a1a + " : " + a2a + " : " + a3a + " : " + a4 + " : " + a5);
//
// 3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'
//
let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = 5 + '3';
let a9 = '5' - 3;
let a10 = 75 + 'кг';
console.log(a6 + " : " + a7 + " : " + a8 + " : " + a9 + " : " + a10);
// 4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
// шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.
//
let height = 23;
let weight = 10;
s = height * weight;
console.log(s);

// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.
//
let heightC = 10;
let dC = 4;
let v =  Math.PI * (Math.pow((dC / 2),2)) * heightC;
console.log(v);
    //V=π r2 h

// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
//
let n = 3;
let m = 4;
let c1 = Math.sqrt(n**2 + m**2);
console.log(c1);

// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
//
let strr = "Hello world";
document.write(strr + "<br/>");
alert(strr);
console.log(strr);

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
//
let fio = "Гришков С";
let age = 36;
let hobby = 'QA';
alert(fio + "\n" + age + "\n" + hobby);

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write
//
let str1a = 'Кто ';
let str2a = 'ты ';
let str3 = 'такой?'
let str4 = str1a + str2a + str3;
document.write(str4);

// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
    let str5 = "20";
let aaa = 5;
document.write(str5 + aaa + "<br/>"); //205 строка + число конкатенируется в строку
document.write(str5 - aaa + "<br/>"); //15 строка - число, строка неявно приводится к типу данных число
document.write(str5 * "2" + "<br/>"); //40 строка * число, строка неявно приводится к типу данных число
document.write(str5 / 2 + "<br/>"); //10 строка / число, строка неявно приводится к типу данных число

// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?

console.log(parseInt("3.14")); //3 приведение к типу int  обрезает дробную часть
console.log(parseInt("-7.875")); //-7 приведение к типу int  обрезает дробную часть
console.log(parseInt("435")); //435 так и останется в оригинале, ибо здесь целое число
console.log(parseInt("Вася")); //NaN ибо текст не число.
//
// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
// let str = prompt("Enter something", "ho-ho")
// console.log(str);
let str11 = prompt("Enter something", "ho-ho");
console.log(str11);
//
// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
let first = +prompt("Input first number:");
let second = +prompt("Input second number:");
alert(first + second);

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
let name1 = prompt("Введите имя:");
let surName = prompt("Введите фамилию:");
age = +prompt("Введите возраст:");
alert("Доброго вечера " + name1 + " " + surName + ", мои поздравления что вам " + age);