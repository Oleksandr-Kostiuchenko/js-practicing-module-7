'use strict';

//! ====================================== Контекст виконання ====================================== !//
//TODO: 1. Що буде виведено в консоль?
// console.log(this); // Window
// function showThis() {
//     console.log(this);
// }
// showThis(); //Undefined

//TODO: 2. Що буде виведено в консоль?
// const person = {
//     name: 'Alice',
//     greet() {
//         console.log(`Hello, ${this.name}`);
//     },
// };

// person.greet(); // Hello, Alice

// const greetFn = person.greet;
//   greetFn(); // Error


//TODO: 3. Створіть об'єкт із методом showName. Викличте метод двома способами: напряму і через змінну. Як зміниться контекст?
// const user = {
//     name: 'Alex',
    
//     showName(){
//         console.log(`Name: ${this.name}`);
//     }
// }

// user.showName();  

// const funcName =  user.showName();  
// console.log(funcName);

//TODO: 4. Є об'єкт user із полем name. Напишіть функцію greet, яка виводить привітання з ім'ям, використовуючи call та apply.
// const user = {
//     name: 'Alex',
// }

// function greet(name) {
//     return console.log(`Hi bro! Wassup doin ${this.name}!`);
// }

// const greetAdd = greet.call(user);
// console.log(greetAdd);

//TODO: 4. Напишіть функцію, яка працює зі стрілочним методом та функцією bind. Покажіть, як закріплений контекст змінює результат.
// const user = {
//     name: 'Alex',
// }

// function sayHello(){
//     console.log(`Hello ${this.name}`); 
// }

// let str = sayHello.bind(user);

// str();

//TODO: 5. Є об'єкт user з інформацією про користувача. Напишіть функцію getDetails, яка виводить рядок у форматі:
//? "Name: <ім'я>, Age: <вік>, Status: <статус>".
//? Використовуйте call для прив'язки функції до об'єкта
// const user = {
//     name: 'Alex',
//     age: 25,
//     status: 'active',
// };

// function getDetails(){
//     console.log(`Name: ${this.name}. Age: ${this.age}. Status: ${this.status}`)
// }

// getDetails.call(user);


//TODO: 6. Є декілька користувачів у вигляді масиву об'єктів. Напишіть функцію greetUser, яка приймає параметр greeting і виводить повідомлення:
//? "<привітання>, <ім'я>!".
//? Використовуйте apply  або call для виклику цієї функції для кожного користувача.
// const users = [
//     { name: 'Alex' },
//     { name: 'Mango' },
//     { name: 'Poly' },
// ];

// function greetUser(greeting){
//     console.log(`${greeting}, ${this.name}`);
// }

// users.forEach((person) => greetUser.call(person, 'Hello'));

//TODO: 6. Напишіть функцію calculateArea, яка приймає параметри width і height та обчислює площу. Використовуйте call і apply для виклику цієї функції для об'єктів rectangle і square.

// const rectangle = {
//     width: 20,
//     height: 10,
// };
// const rectangleArea = calculateArea.bind(rectangle);
// console.log(rectangleArea());

// const square = {
//     width: 15,
//     height: 15,
// };
// const squareArea = calculateArea.bind(square);
// console.log(squareArea());

// function calculateArea() {
//     return this.width * this.height;
// }

//TODO: 7. Є об'єкти з інформацією про користувачів. Напишіть функцію changeStatus, яка приймає новий статус і змінює його у відповідному об'єкті. Використовуйте call і apply.
// const list = [
//     { name: 'Alex', status: 'inactive' },
//     { name: 'Mango', status: 'inactive' }
// ]

// function changeStatus(person, newStatus){
//     let actualPerson = this.find(object => object.name.toLowerCase() === person.toLowerCase());

//     actualPerson.status = newStatus;
//     return actualPerson;
// }

// console.log(changeStatus.call(list, 'Alex', 'active'));
// console.log(changeStatus.call(list, 'mango', 'inactive'));

//TODO: 8. Напишіть функцію addToCart, яка додає товар у кошик користувача. Використовуйте call для прив'язки до відповідного об'єкта.
// const list = [
//     { name: 'Alex', cart: [] },
//     { name: 'Admin', cart: [] }
// ]

// function addToCart(person, product){
//     let actualPerson = this.find(object => object.name.toLowerCase() === person.toLowerCase());

//     actualPerson.cart.push(product);
//     return (`Person: ${actualPerson.name} Cart: ${actualPerson.cart}`);
// }

// console.log(addToCart.call(list, 'Alex', 'ipad'));
// console.log(addToCart.call(list, 'Alex', 'Samsung A54'));
// console.log(addToCart.call(list, 'admin', 'Asus'));

//TODO: 9. Напишіть функцію setDiscount, яка встановлює знижку на товар, використовуючи call для зміни властивості об'єкта product.
// const product = {
//     name: 'Laptop',
//     price: 1500,
//     discount: 0,
// };

// function setDiscount(discount) {
//     this.discount = discount;
//     return(`Product: ${this.name} Price:${this.price * (1 - (this.discount/100))}, Discount: ${this.discount}%`);
// }

// console.log(setDiscount.call(product, 10));

//! ====================================== Завдання на тему ООП і класи ====================================== !//
//TODO: 10. Створіть клас User із властивостями firstName, lastName, і email.
//? Додайте метод getFullName(), який повертає повне ім'я користувача.
//? Додайте метод updateEmail(newEmail), який змінює адресу електронної пошти.

// class User{
//     #email;

//     constructor(firstName, lastName, email) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.#email = email;
//     }

//     updateEmail(newEmail) {
//         return this.#email = newEmail;
//     }
// }

// const alex = new User('Alex', 'Kostiuchenko', 'judogoldman@gail.com');
// console.log(alex.updateEmail('alex@gmail.com'));

//TODO: 11. Напишіть клас Car із властивостями brand, model, year, і price.
//? Додайте метод getCarInfo(), який повертає рядок у форматі: "Car: brand model (year), price USD".
//? Додайте геттер і сеттер для властивості price.

// class Car{
//     #price;
    
//     constructor(brand, model, year, price) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//         this.#price = price;
//     }

//     get price(){
//         return (`Price: ${this.#price}$`);
//     }

//     set price(newPrice){
//         this.#price = newPrice;
//     }

//     getCarInfo(){
//         return (`Car: ${this.brand} (${this.year}), price: ${this.price} USD`);
//     }
// }

// const bmw = new Car('BMW', 'M8', '2020', 150000);
// console.log(bmw.getCarInfo());

// console.log(bmw.price);

// bmw.price = 200000;
// console.log(bmw.getCarInfo());

//TODO: 12. Напишіть клас Library, який зберігає масив книг у властивості books. Книга — це об'єкт із полями title, author, і year.
//? Додайте метод addBook(book), який додає нову книгу до масиву.
//? Додайте метод findBooksByAuthor(author), який повертає всі книги автора.
//? Додайте метод removeBookByTitle(title), який видаляє книгу за назвою.

// class Library{
//     constructor() {
//         this.books = [
//             {title: 'Rich Dad, Poor Dad', author: 'Robert Kyosaki', year: 1997},
//             {title: 'Who Will Cry When you Die?', author: 'Robin Sharma', year: 2000},
//             {title: '100 life lessons from monk', author: 'Robin Sharma', year: 2010},
//         ]
//     }

//     getList(){
//         return this.books;
//     }
    
//     addBook(title, author, year) {
//         this.books.push({title: title, author: author, year: year});
//         return (`Book: ${title} by ${author} successfully added!`);
//     }
// }

// const library = new Library;
// console.log(library.getList());

// console.log(library.addBook('My Unbelievably True Life Story', 'Arnold Schwarznegger', 1977));
// console.log(library.books);

//TODO: 13. Створіть клас Robot із приватними властивостями #name і #batteryLevel.
//? Додайте методи:
//? chargeBattery(percent) — додає енергію в батарею.
//? performTask(taskName, batteryUsage) — виконує завдання, знижуючи рівень батареї.
//? checkBattery() — повертає стан батареї у відсотках.
//? Використовуйте геттер і сеттер для доступу до імені робота.


class Robot {
    #name;
    #batteryLevel;

    static storyBattery = 10;
    static calculatorBattery = 30;
    static cleaningBattery = 50;

    constructor(robotName, robotBattery) {
        this.#name = robotName;
        this.#batteryLevel = robotBattery;
    }

    calculator(numA, numB, action) {
        if (action === '-') return `${numA} - ${numB} = ${numA - numB}`;
        if (action === '+') return `${numA} + ${numB} = ${numA + numB}`;
        if (action === '*') return `${numA} * ${numB} = ${numA * numB}`;
        if (action === '/') return `${numA} / ${numB} = ${numA / numB}`;
    }

    cleanMyDevice() {
        console.log(`Cleaning your device...`);
        return console.log(`Nice! Job done!`);
    }

    tellingStory() {
        const characters = ["a brave knight", "a curious cat", "an adventurous child", "a mischievous robot"];
        const places = ["a mysterious forest", "a bustling city", "a haunted castle", "a futuristic spaceship"];
        const events = ["found a hidden treasure", "saved the day", "uncovered a dark secret", "started a grand adventure"];
        const twists = ["but forgot their way home", "while being chased by a villain", "with an unexpected ally", "just as night fell"];

        const character = characters[Math.floor(Math.random() * characters.length)];
        const place = places[Math.floor(Math.random() * places.length)];
        const event = events[Math.floor(Math.random() * events.length)];
        const twist = twists[Math.floor(Math.random() * twists.length)];

        return console.log(`${character} in ${place} ${event} ${twist}.`);
    }

    sayHi() {
        console.log(`Hi! My name is ${this.#name}. I'm here to help! └|∵|┘`);
        console.log(`My available tasks are: -sayHi() -name -chargeBattery(%) -checkBattery() -performTask(taskName, batteryUsage)`);
    }

    get name() {
        return console.log(`I am ${this.#name}. Feel free to ask for help! └|∵|┘`);
    }

    chargeBattery(chargePercentage) {
        this.#batteryLevel += chargePercentage;
        console.log(`Great! My battery is charged by ${chargePercentage}% └|∵|┘`);
    }

    checkBattery() {
        if (this.#batteryLevel > 40) {
            console.log(`My battery level is ${this.#batteryLevel}%. Everything is fine! └|∵|┘`);
        } else if (this.#batteryLevel > 0) {
            console.log(`My battery level is ${this.#batteryLevel}%. Please charge me! ┌|∵|┘`);
        } else {
            throw new Error(`I'm dead. Battery is at ${this.#batteryLevel}% ┌|--|┌`);
        }
    }

    performTask(taskName, batteryUsage) {
        if (this.#batteryLevel >= batteryUsage) {
            this.#batteryLevel -= batteryUsage;
            console.log(`Performing task: ${taskName}...`);
            this[taskName]();
        } else {
            console.log(`Not enough battery to perform ${taskName}. Please charge me! ┌|∵|┘`);
        }
    }
}


const chillRobot = new Robot('Chill_Rob', 100);
chillRobot.sayHi();
chillRobot.name;

chillRobot.chargeBattery(20);
chillRobot.checkBattery();

chillRobot.performTask('cleanMyDevice', 50);
chillRobot.checkBattery();

chillRobot.performTask('tellingStory', 10);
chillRobot.checkBattery();

console.log(chillRobot.calculator(2, 2, '*'));
chillRobot.checkBattery();