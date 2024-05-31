//       QUESTION ONE

var itemsArray = [
  { name: "juice", price: "50", quantity: "3" },
  { name: "cookie", price: "30", quantity: "9" },
  { name: "shirt", price: "880", quantity: "1" },
  { name: "pen", price: "100", quantity: "2" }
]; 

var totalpricAll = 0;
for (var i = 0; i <itemsArray.length; i ++){
  var items = itemsArray[i]
  var totalPriceOftwo = parseInt(items.price) * parseInt(items.quantity)
  console.log(`Total Price of ${items.name} is ${totalPriceOftwo}`);
  totalpricAll += totalPriceOftwo
}
console.log(`Total price of the products ${totalpricAll}`);

var rtValue = itemsArray.map((total)=> {
  if(total.price && total.quantity){
    return total.price * total.quantity
  }
}).reduce((acc,cur)=>acc + cur ,0)
console.log(rtValue)


///                         QUESTION TWO ////
// 2. Create an object with properties name, email, password, age,
// gender, city, country.
// Check if age and country properties exist in object or not.
// Also check firstName and lastName properties in object.

var propertiesName = {
  name : "Faiz",
  email :"faiz@gamil.com",
  password : 12345,
  age : 21,
  gender : "male",
  city : "karachi",
  country : "pakistan"
}
if(propertiesName.age){
  console.log("available");
}
console.log(propertiesName.hasOwnProperty('country'));//true
// console.log('valueOf' in propertiesName);
if(propertiesName.age){
  console.log("age is exists in the object");

}
console.log(propertiesName.hasOwnProperty('age'));//output is true as it exists in the object

if(propertiesName.firstName)
  console.log("it is exists in the object");
else{
  console.log("Sorry, It can not be found in the object");
}
console.log(propertiesName.hasOwnProperty('lastName'));


//            QUESTION THREE

 //  3. Create a constructor function with some properties. Now
// create multiple records using the constructor.

function Student(name,faterName,email,matialStutus){
  this.name = name ;
  this.faterName = faterName;
  this.email = email;
  this.matialStutus = matialStutus
}
var student1 =new Student ("faiz","M.Ismail","faiz@gmail.com","single")
var employee =new Student ("umair","Abdullah","umair@gmail.com","maried")
var employee2 =new Student ("HABIB","ALI","HABIB@gmail.com","maried")


console.log(student1.name);
console.log(employee.name);
console.log(employee2.name);






// var  info ={
//     userName : "faiz",
//     id :12344,
//     Dobp :"1/2/2223",

// }
// info.grd = "c"
// info.dob = new Date("04-19-1997").getMonth()
// console.log("fullyears",dob);

// // console.log(delete info.age);
// // console.log(delete info.Dob);

// console.log(info)
// var userInfo = {
//     name : "faiz",
//     father : "m.ismail",

// }
// userInfo.DOB = new Date("1/5/2003").getFullYear()
// console.log(userInfo);

// var checking ={
// dateOfBirth : new Date("1-5-2003"),


// }
// checking.calculateage =function (){
//     console.log("this dateofbirth",this.dateOfBirth);
// }
// console.log(checking);
//  userInfo ={
//     age: new Date("1-5-2003").getFullYear()
//  }
//  userInfo.dob =new Date().getFullYear()//2024
//  userInfo.calculate = function(){
// var getAge = userInfo.age
// var result = userInfo.dob
// return result-getAge
//  }

// var myInfo = {
//     name :"faiz",
//     address :"karachi",
//     DOB : new Date("1-5-2003").getFullYear(),
// currentYear : new Date().getFullYear(),

// }
// myInfo.calculate = function(){
//  var result =this.currentYear-this.DOB
//  return result
// }
// console.log("myinfo",myInfo,"calculate",myInfo.calculate());

// var myInfo = {
//     name: "faiz",
//     address: "karachi",
//     DOB: new Date("2003-01-05"), // Complete date of birth
//     currentYear: new Date().getFullYear(),
// };

// myInfo.calculate = function () {
//     var result = this.currentYear - this.DOB.getFullYear();
//     return result;
// };

// console.log("bb",myInfo.calculate());


// var objt = {
// name:"faiz"
// }
// objt.calculateYear = function(){
//     var MYBOD= new Date("01-05-2003").getMonth()
//     console.log(MYBOD);
    
//     var currentYear = new Date().getMonth()
//     var calculate = MYBOD - currentYear
//     return calculate
// }
// console.log(objt.calculateYear());

// var userInfo= {
//     name : "faiz",
   
// }
// userInfo.show =function(){
//     var num1 = true;
//     var num12 = !false;
//     var result= num1 ==num12
//     return result
// }
// console.log(userInfo.show());



// var info = {
//     name:"faiz",
//     address:"karachi",
// }
// info.age= function(){
//     var currentYear = new Date().getFullYear()
//     var userDOB = new Date("12-25-1999");
// var calculation = currentYear-userDOB.getFullYear()
// return calculation
// }
// console.log("user age =>",info.age(),info)
// var info = {
//     name :"john",
//     id:"74684246",

// }
// delete info.name
// info.naming ="faiz"
// console.log(info);
//  var userinfo = {
//     name :"faiz",
//     age:21,
// calculation = function{

// }
//  }


//  function Student(name, fatherName, age, attendance) {
//     this.name = name; // object ki propert add ki this ke through
//     this.fatherName = fatherName;
//     this.age = age;
//     this.attendance = attendance;
// }
// this.totalClasses = totalClasses;
  
//   Student.prototype.totalClasses = 60;
//   Student.prototype.isStudentPunctual = function () {
//     var userAttendance = this.attendance / this.totalClasses;
//     if (userAttendance >= 0.9) {
//       return true;
//     } else {
//       return false;
//     }
//   };
  
//   var student1 = new Student("Abdullah", "Ahmed", 14, 50);
//   var student2 = new Student("Asim", "Muneer", 20, 50);
//   var student3 = new Student("Usman", "Qadir", 14, 55);
//   var student4 = new Student("Ubaid", "Shahid", 20, 60);


// function Employee(name, fatherName,age){
// this.name = name;
// this.fatherName=fatherName;
// this.age=age;
// }
// // var student = new Employee ("FAIZ","MEHMOOD",21)
// Employee.prototype.greet =function(){
//     console.log("hello"+this.name);
// }
// var faiz = new Employee("faiz")
// faiz.greet()

// function Student (name,fatherName,age){
//     this.namae= name;
//     this.fatherName.fatherName;
//     this.age=age;
// }
// var men = new Student ("faiz","mehmood",21)
// Student.prototype.greeting = function(){
//     console.log("Welcome"+this.name+this.fatherName);
// }
// function car(name,model, color){
//     this.name=name;
//     this.model=model;
//     this.color=color
// }
// var car1 =new car("OD",2000,"red")
// var car2 =new car("xyz",333,"black")

// console.log(car1.name);
// console.log(car1.model);

// console.log(car2.name);

// console.log(car2.color);
// console.log(car2.model)




// function Student(name,fatherName,age,marks){
//     this.name=name;
//     this.fatherName=fatherName;
//     this.age=age;
//     this.marks=marks
//     this.positin = function(){
        // var details = this.name + this.fatherName +this.age +this.marks
        // console.log(details);
//         console.log(`your name is ${this.name + this.fatherName}`);
//     }
// }
// var student1 =new Student("faiz","ismail",21,90)
// var student2 =new Student("umair","abdullah",21,90,32)
// var student3 =new Student("Talha","Ali",12,222)

// console.log(student1.name +" "+ student1.fatherName);
// console.log(student2.name +" "+ student2.fatherName);
// console.log(student3.name +" " + student3.fatherName);
// student1.positin()
// student2.positin()
// student3.positin()


// function Employee(name,age){
//     this.name = name ;
//     this.age = age
//     this.year = function(){
//         console.log(`you are nice ${this.name}!`);
//     }

// }
// var details = new Employee("faiz","21")
// console.log(details.name);
// console.log(details.age);
// details.year()

// function Person(name,email){
//     this.name = name;
//     this.email = email
// }
// Person.prototype.greet = function(){
//     console.log("Hello!"+this.name ,this.email);
// }
// var result = new Person("Faiz","faiz@fsg")
// result.greet()

// function person (name,email,id){
//     this.name = name;
//     this.email = email;
//     this.id  = id
// }
// // person.prototype.greeting =function(){
// //     this.greeting= this.greeting
// // }
// person.prototype.greet = "HelloProto"
// person.prototype.greeting = "Nice to see!"
// var person1 = new person("Faiz","google@gmail.com",1232435)
// var person2 = new person("umair","umair@gmail.com",1232435)
// var person3 = new person("Habib","habib@gmail.com",1232435)




// console.log(person1);
// console.log(person2);
// console.log(person3);


// 1. Suppose You have an array of object
// var itemsArray = [
// {name:”juice”,price:”50”, quantity:”3”},
// {name:”cookie”,price:”30”, quantity:”9”},
// {name:”shirt”,price:”880”, quantity:”1”},
// {name:”pen”,price:”100”, quantity:”2”}];
// Calculate total price of each item and all items;





// var itemsArray = [
// {name : "juice",price :"50",quantity : "3"},
// {name : "cookie",price :"30",quantity : "9"},
// {name : "shirt",price :"880",quantity : "1"},
// {name : "pen",price :"100",quantity : "2"},
// ]
//  itemsArray.calculate= function(){
//    var juiceP =  this.price =price
//     var price = this.quantity =quantity
// return juiceP * quantity
// }
// console.log(itemsArray.calculate());


// Define the array of objects
var itemsArray = [
        { name: "juice", price: "50", quantity: "3" },
        { name: "cookie", price: "30", quantity: "9" },
        { name: "shirt", price: "880", quantity: "1" },
        { name: "pen", price: "100", quantity: "2" }
      ];
      
      // Initialize a variable to keep track of the total price of all items
//       var totalPriceItem = 0;

//       for(var i = 0; i<itemsArray.length; i++){
//         var item = itemsArray[i]
//         var totalPriceOftwo = parseInt(item.price) * parseInt(item.quantity)
//         // console.log(totalPriceOftwo);
//         console.log("total is of " + item.name + " is "+ totalPriceOftwo);
//               totalPriceItem +=totalPriceOftwo

//       }
// console.log(`Total price of all products: ${totalPriceItem}`); 



// var itemsArray = [
//   { name: "juice", price: "50", quantity: "3" },
//   { name: "cookie", price: "30", quantity: "9" },
//   { name: "shirt", price: "880", quantity: "1" },
//   { name: "pen", price: "100", quantity: "2" }
// ];

// var totalpricAll = 0;
// for (var i = 0 ; i <itemsArray.length; i++){
//    var item = itemsArray[i]
//   //  console.log(item);
//   var calculation = item.price * item.quantity;
//   console.log(`total price of ${item.name} is ${calculation}`);
//   totalpricAll +=calculation
// }
// console.log("total=>",totalpricAll);










