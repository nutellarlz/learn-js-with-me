/*
 * Learn JavaScript with Me - Solution File
 * checkEquality
 * @version v1.0
 * @license Mozilla Public License 2.0
 * @copyright 2019 Josiah Horton.
 */


function assertEquals(c, d){
  if (typeof c == "boolean" && // c is a boolean
      typeof d == "boolean" && // d is a boolean
      c == d){ // c & d are the same boolean
    return "Pass";
  }else{ // c & d are not equal
    return "Fail";
  }
}





function checkEquality(a, b) {
  if (a != a && b != b){ // a & b are both NaN
    return false; // NaN cannot be equal to NaN
  }else if (typeof a == typeof b){ // types match
    return a == b; // return true or false
  }else{ // types don't match
    return false;
  }
}


console.log(assertEquals(checkEquality(1, true), false));
console.log(assertEquals(checkEquality(0, "0"), false));
console.log(assertEquals(checkEquality(1, 1), true));
console.log(assertEquals(checkEquality(0, ""), false));
console.log(assertEquals(checkEquality(1, "1"), false));
console.log(assertEquals(checkEquality(0, false), false));
console.log(assertEquals(checkEquality(NaN, NaN), false));
console.log(assertEquals(checkEquality(null, undefined), false));
console.log(assertEquals(checkEquality(undefined, undefined), true));
console.log(assertEquals(checkEquality(false, null), false));
console.log(assertEquals(checkEquality(1, 2), false));
