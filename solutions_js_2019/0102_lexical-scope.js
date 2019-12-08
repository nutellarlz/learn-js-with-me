/*
 * Learn JavaScript with Me - Project File
 * checkEquality
 * @version v1.0
 * @license Mozilla Public License 2.0
 * @copyright 2019 Josiah Horton.
 */


var b = 3;

 function one(){
   // this a is specific to this scope
   var a = 1;
   console.log(a);
 }

  one(); // 1

 function two(){
   // this a is specific to this scope
   var a = 2;
   console.log(a);
 }

 two(); // 2

 function three(){
   // b's scope is the whole file
   console.log(b);
 }

 three(); // 3

 function four(){
   // x's scope is all of four
   var x = 4;
   function addOne(){
     // y's scope is only addOne
     var y = 1;
     console.log(x + y);
   }
   console.log(x);

   addOne();
 }

 four(); // 4 and 5

