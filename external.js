var k=150;
document.write(k*10,end=" ")
var l="30";
var o

document.write(k)
document.write("</br>HI ALL</br>WELCOME TO JSP</br>")
k="OREWA LUFFY "
k+="KIZOKU OUNI OREWA NARU"
document.write(k)
var name="</br>Sushant||"
name+="Hrithik&"
name+="Vijay"
document.write(name);
var l=['a','b','c'];
document.write("</br>")
for(i=1;i<=2;i++){
	document.write(l[i]," ");}
document.write("</br>")
var trainees=[{
	'name':'A',
	'rollno':'1',
	'clg':'AEC',
},
{
	'name':'B',
	'rollno':'2',
	'clg':'ACET',
},
{
	'name':'C',
	'rollno':'3',
	'clg':'ADTP',
},
{
	'name':'D',
	'rollno':'4',
	'clg':'ACOE',
}]
// for(i=0;i<dict.length;i++){
// 	document.write(i+1," ",dict[i].name," ",dict[i].rollno," ",dict[i].clg);
	
//     document.write("<br/>")

// }
for(i=0;i<trainees.length;i++){
	for (j in trainees[i]) {
				document.write(trainees[i][j]+" ")
		}
	document.write("</br>")
}

// var dictionary = {
//   key1: 'value1',
//   key2: 'value2',
//   key3: 'value3'
// }

// for (let key in dictionary) {
//   if (dictionary.hasOwnProperty(key)) {
//      var value = dictionary[key];
//     console.log(`Values for key '${key}':`);

//     for (let val of value) {
//       document.write(val , " ");
//     }
//   }
// }
