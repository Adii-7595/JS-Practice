//write a program to check if a year is a leap year using multiple conditions(divisib;e by 4 , but not 100 unless divisible by 400).


let year = 100;

if ((year % 4 == 0  &&  year % 100 != 0) || year % 400 == 0 ){
    console.log('leap year');
}
else {
    console.log('not leap year')
}