// 1)  Превратите массив чисел в длинную строку, состоящую из всех этих чисел.
// Пример: [1,2,3] => "1,2,3"

// const arr = [ 1, 2, 3];
// let string = "";
// arr.forEach((elem) => string += (elem + ",") );
// console.log(string);



// задача 2 Используя метод reduce, посчитайте сколько людей проголосовали.
// const voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];

// let result = voters.reduce((acc, cur) =>{
//     if(cur.voted === true){
//        return acc + 1;
//     } else {
//         return acc;
//     }
// }, 0);
// console.log(result);



// задача 3 Получив массив всех товаров из вашего списка желаний, прикиньте, сколько будет стоить купить все сразу.
// const wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];

// let sum = wishlist.reduce((acc, cur) => acc + cur.price ,0);
// console.log(sum);



// задача 4 У вас есть массив объектов, представляющих список клиентов с их заказами. 
// Каждый объект имеет свойства name и orders, где orders - это массив строк, представляющих товары, которые заказал клиент. 
// Ваша задача - создать новый массив объектов, где каждый объект имеет свойства name и totalOrders, 
// где totalOrders - общее количество товаров, заказанных клиентом.

const voters = [
      
        {name:'Phil' ,  type: [
            { title: "Tesla Model S", price: 3000 },
            { title: "4 carat diamond ring", price: 45000 },
        ]},
        {name:'Ed' , type: [
            { title: "Tesla Model S", price: 3000 },
            { title: "4 carat diamond ring", price: 45000 },
            { title: "Fancy hacky Sack", price: 5 },
            { title: "Gold fidgit spinner", price: 2000 },
            { title: "A second Tesla Model S", price: 90000 }
        ]},
        {name:'Tami' , type: [
                { title: "Tesla Model S", price: 3000 },
                { title: "4 carat diamond ring", price: 45000 },
                { title: "Fancy hacky Sack", price: 5 },
               
             ]},
            ];
        voters.forEach ((elem) => {
        elem.newtype = elem.type.reduce((acc, cur) =>{
            if(cur.price > 0){
               return acc + 1  
            }
        },0);
        delete elem.type;
     }) ;
     console.log(voters);



// задача 5Создайте массив объектов со свойствами 'name' и 'age'. Вычислите количество совершенолетних и несовершеннолетних людей.
// const voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 12, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 10, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 11, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 17, voted: false}
// ];
// let adult = voters.filter((object)=> object.age > 18);
// console.log(adult.length);

// let adultNo = voters.filter((object)=> object.age < 18);
// console.log(adultNo.length);




// Задача 6Создайте массив объектов со свойствами 'name' и 'age'. 
// Используя методы массива, создайте новый массив, содержащий только те объекты, возраст которых больше 30 лет.


// const voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 12, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 10, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 11, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 17, voted: false}
// ];
// let newArr = voters.filter((object)=> object.age > 30);
// console.log(newArr);