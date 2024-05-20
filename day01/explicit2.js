//explicit numerical conversions
let m = Number("9689");
console.log("m=" + m);
console.log("type of input is:" + typeof(m));
let str1 = Number(undefined); //undefined
console.log("str1=" + str1);
console.log("type of input is:" + typeof(str1));
let str2 = Number(null); //null
console.log("str2=" + str2);
console.log("type of input is:" + typeof(str2));
let s; //value not assign
w = Number(s);
console.log("w=" + w);
console.log("type of input is:" + typeof(w));
let str3 = Number("hi how are you?"); //null
console.log("str3=" + str3);
console.log("type of input is:" + typeof(str3));
/*op
m=9689
type of input is:number
str1=NaN
type of input is:number
str2=0
type of input is:number
w=NaN
type of input is:number
str3=NaN
type of input is:number*/