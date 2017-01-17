console.log("Приветики!!");

var a=5;
console.log(a);

// var b=10;
// var c=b+a;
// console.log(c);
// console.log(typeof(null));
// var s=0;
// for(var i=1; i<11;i++) {
// s=s+i;
// console.log(i);
// };
// console.log("Summa " + s);
// var age=prompt("Сколько тебе лет?");

// if (age < 18) 
//     console.log("Тебе еще рано");
//     else
//      console.log("Проходи!");

 var str='<h1>Заголовок</h1>';
 document.write(str);
 document.write('<div style="width: 150px; height: 150px; border-radius: 10%; background: green;"></div>');

 function rec( x, y, color) {
    var str2=`<div style="width: ${x}px; height: ${y}px; background: ${color};"></div>`;
    console.log(str2);
    document.write(str2);
    //document.write("Это что?");
 }

 function circle( x, y, color) {

    var str2=`<div style="width: ${x}px; height: ${y}px; border-radius: 100%;  background: ${color};"></div>`;
     console.log(str2);
    document.write(str2);
    //document.write("Это что?");
 }
 
  function cir_rnd( x, y) {
      var xx = Math.random () * x;
      var yy = Math.random () * y; 
      var col = "#" + Math.floor( Math.random () * 16777256).toString(16);
      return `<div style="width: ${xx}px; height: ${xx}px;\
                     border-radius: 50%;  background: ${col};"></div>`;
    // console.log(str2);
    // document.write(str2);
    //document.write("Это что?");
 }

var circleMass=[];

 for(var i=0; i<7; i++) {
     circleMass.push(cir_rnd(100,90));
 }
circleMass.map( f => document.write(f) );
var circleMassRev=[];
circleMassRev.copyWithin(ircleMass.reverse);
circleMassRev.map( f => document.write(f) );

// rec(150, 50, "red");
// circle(100, 100, "blue");
// var tmp=0xFF, tmp2=0x10;
// tmp=tmp+tmp2; 
// console.log(tmp);
// rec(150, 200, "green");


// function funA( a, b) {
// for(var i=a; i<b; i++)
// console.log(i);
// }

// var a1=11, a2=100;
// funA(a1, a2);
// document.rec
