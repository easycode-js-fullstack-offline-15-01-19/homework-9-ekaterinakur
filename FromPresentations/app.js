// Презентация 10  ------------------------------------
// 1. Создать конструктор для производства автомобилей. Конструктор должен принимать марку автомобиля и возраст машины. Конструктор должен иметь метод, который возвращает марку, и второй метод, который возвращает год производства машины (год текущий минус возраст машины, использовать Date для получения текущего года)
function Car(name, age) {
	this.carBrand = function() {
		if (!name || typeof(name) != 'string') alert('Ведите марку машины');

  		return name[0].toUpperCase() + name.slice(1);
	}

	this.productionYear = function() {
		if (!age || typeof(age) != 'number') alert('Ведите возраст машины');

		const date = new Date();

		return date.getFullYear() - age;
	}
}

const lexus = new Car('lexus', 2);

lexus.carBrand();
lexus.productionYear();

// 2. Написать конструктор, который умеет элементарно шифровать строки (например, сделать из строки строку-перевертыш, или заменить все символы их цифровым представлением, или любой другой метод). Конструктор при инициализации получает строку и имеет следующие методы:
function Cipher(str) {
	let newStr = str.split('').join('h,lq');

	this.showOrigin = function() {
		return str;
	}

	this.showCipher = function() {
		return newStr;
	}
}

const str1 = new Cipher('Kate');

str1.showOrigin();
str1.showCipher();

//  Дата и время  --------------------------------------------------------
// 1. Написать функцию, которая принимает год, а возвращает день 1го января этого года. День должен быть в русском формате (например, для 2016 это будет “пятница”)
function weekDay1(year) {
	const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

	const myDate = new Date(year, 0, 1);

	return days[myDate.getDay()];
}

// 2. Написать функцию, которая принимает дату в виде строки “29.03.1985”, а возвращает день в русском формате (например, для указанной даты это будет “пятница”). Известно, что формат даты в строке всегда “дд.мм.гггг”.
function weekDay2(str) {
	const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
		date = str.split('.');

	const myDate = new Date(+date[2], (+date[1] - 1), +date[0]);

	return days[myDate.getDay()];
}

// 3. Узнать, сколько прошло полных недель с начала года (1го января 2016г.) до сегодняшней даты
function weeksNumber() {
	const now = Date.now(),
		then = new Date(2016, 0, 1),
		milisec = now - Date.parse(then);

	return Math.floor(milisec / (1000 * 60 * 60 * 24 * 7));
}

// Презентация 11  ------------------------------------
// 1. Реализовать конструктор в ES6 синтаксисе (также используйте аргументы по умолчанию):
class Component1 {
	constructor(tagName) {
	  this.tagName = tagName || 'div';
	  this.node = document.createElement(tagName);
	}
}

const comp1 = new Component1('span');

// 2. Реализовать конструктор и методы в ES6 синтаксисе:
class Component2 {
	constructor(tagName) {
	  this.tagName = tagName || 'div';
	  this.node = document.createElement(tagName);
	}

	setText(text) { 
	  this.node.textContent = text;
	}
}

const comp2 = new Component2('span');

// 3. Создать класс калькулятора который будет принимать стартовое значение и у него будут методы сложить, вычесть, умножить , разделить. Также у него должны быть геттер и сеттер для получения и установки текущего числа с которым производятся вычисления.
class Calc {
	constructor(num) {
		this.startNum = num;
		this.secondNum = num;
	}

	getSum() { return this.startNum + this.secondNum; }
	getMinus() { return this.startNum - this.secondNum; } 
	getMult() { return this.startNum * this.secondNum; } 
	getDiv() { return this.startNum / this.secondNum; } 

	get number() { return this.secondNum; }
  	set number(value) { this.secondNum = value; }
}

const calc = new Calc(20);
