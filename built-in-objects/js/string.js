var str = 'hello world';
console.log(str.length);

console.log(str.indexOf('world')); //returns -1 if the worf that we are looking for doesn't exist in the string

var str1 = 'fing where we "where" yesterday';
console.log(str1.indexOf('where'));
console.log(str1.indexOf('where', 7));
console.log(str1.lastIndexOf('where'));

console.log(str.search('world'));

