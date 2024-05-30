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

function Student(name,fatherName,age,marks){
    this.name=name;
    this.fatherName=fatherName;
    this.age=age;
    this.marks=marks
    this.positin = function(){
        // var details = this.name + this.fatherName +this.age +this.marks
        // console.log(details);
        console.log(`your name is ${this.name + this.fatherName}`);
    }
}
var student1 =new Student("faiz","ismail",21,90)
var student2 =new Student("umair","abdullah",21,90,32)
var student3 =new Student("Talha","Ali",12,222)

// console.log(student1.name +" "+ student1.fatherName);
// console.log(student2.name +" "+ student2.fatherName);
// console.log(student3.name +" " + student3.fatherName);
student1.positin()
student2.positin()
student3.positin()



