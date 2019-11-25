/*
 * Learn JavaScript with Me - Project File
 * checkEquality
 * @version v1.0
 * @license Mozilla Public License 2.0
 * @copyright 2019 Josiah Horton.
 */


function assertEquals(c, d){
  if (typeof c != "boolean"){ // c is not a boolean
    return "Fail";
  }else if (typeof d != "boolean"){ // d is not a boolean
    return "Fail"
  }else if (c == d){ // c & d are the same boolean
    return "Pass";
  }else{ // c & d are not equal
    return "Fail";
  }
}





function checkEquality(a, b) {
  // TODO: check the quality of a and b
}
