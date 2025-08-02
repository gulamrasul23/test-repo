// Task-1:
// Count how many times a string has the letter a



// const str = "Count how many times a string has the letter a";
// count = 0;
// for(let i = 0; i <= str.length - 1; i++){
//     if(str[i]=== "a"){
//         count++;
//     }
// }
// console.log('Letter "a" has' + ' ' + count + ' ' + 'times');


// Task-2:
// Count how many times a string has the letter a or A

// const str2 = "Count how many times a string has A the letter a or A";
// count = 0;
// for(let j = 0; j <= str2.length -1; j++){
//     if(str2[j].toUpperCase() === 'A'){
//         count++;
//     }
// }
// console.log(count);


// Task-3:
// Check whether a string contains all the vowels a, e, i, o, u



// const str3 = "Check whether a string contains all the vowels a, e, i, o, ";
// let check = '';
// if(str3.includes('a')){
//     check += 'a';
// }else{
//     console.log('Not found vowel "a"')
// }  
// if(str3.includes('e')){
//     check += 'e';
// }else{
//     console.log('Not found vowel "e"')
// }
// if(str3.includes('i')){
//     check += 'i';
// }else{
//     console.log('Not found vowel "i"')
// }
// if(str3.includes('o')){
//     check += 'o';
// }else{
//     console.log('Not found vowel "o"')
// }
// if(str3.includes('u')){
//     check += 'u';
// }else{
//     console.log('Not found vowel "u"')
// }

// console.log('Found vowels:' + ' ' + check.split(''));


// Task-4:
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.



// let str4 = "If a given string has either x, replace x by y. if the given string has X, replace it by Y. xxxx XXXX";
// if(str4.includes('x')||str4.includes('x')){
//     let newStr4 = str4.replace(/x/g,'y').replace(/X/g,'Y');
//     console.log(newStr4);
// }else {
//     console.log('"x" or "X" not found');
// }


// let price = 580;
// let newPrice = price - (10/100)*580;
// console.log(newPrice);



// Task-5:
// Capitalize Every first Letter of each word in a String

let str = 'Capitalize Every first Letter of each word in a String';
let str2 = str.split(' ');
let result = '';

for(let i = 0; i <= str2.length-1; i++){
    let word = str2[i];
    result += word[0].toUpperCase() + word.slice(1);
    if(i<str2.length -1){
        result += " ";
    }
}
console.log(result);





