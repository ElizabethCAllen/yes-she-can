// date object
var date = new Date(); //new date with vuttent date and time
    console.log(date);
    



console.log(date.getFullYear());
console.log(date.getYear()); //js starts at 1900 for some god forsaken reason

console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getMinutes());
console.log(date.getHours());
console.log(date.getTime());

var month = date.getUTCMonth();
var day = date.getDate();
var year = date.getFullYear(); //() ALWAYS NEEDED AFTER THE GETTIME COMMAND

if (month.length < 10  ){
    month = '0'+ month;
 }
var formattedDate = month + '/' + day + '/' + year;
console.log(formattedDate);

var newDate = new Date ("Januaray 31, 2019");

// set hour =18
newDate.setHours(18);
// s3et minute = 32
newDate.setMinutes(32);
// set second =45
newDate.setSeconds(45);
console.log(newDate);

console.log(date.toDateString());
console.log(date.toLocaleDateString());

// set timeout
setTimeout(function(){
    console.log(new Date());
    
}, 5000);
