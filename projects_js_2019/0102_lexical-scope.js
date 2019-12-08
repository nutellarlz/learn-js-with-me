/*
 * Learn JavaScript with Me - Project File
 * checkEquality
 * @version v1.0
 * @license Mozilla Public License 2.0
 * @copyright 2019 Josiah Horton.
 */


var b = 3; // this b has a global scope

 function one(){
   // this a is specific to this scope
   var a = 1;
   // TODO: log a
 }

 function two(){
   // this a is specific to this scope
   var a = 2;
   // TODO: log a
 }

 function three(){
   // b's scope is the whole js file
   // TODO: log b
 }

 function four(){
   // x's scope is all of four
   var x = 4;
   function addOne(){
     // y's scope is only addOne
     var y = 1;
     // TODO: log x + y
   }
   // TODO: log x

   addOne();
 }
