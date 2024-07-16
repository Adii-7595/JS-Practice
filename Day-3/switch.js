// let day = 5;

// switch (day){
//     case 1:{
//         console.log('monday');
//         break;
//     }
//     case 2:{
//         console.log('tuesday');
//         break;
//     }
//     case 3:{
//         console.log('wednesday');
//         break;
//     }
//     case 4:{
//         console.log('thursday');
//         break;
//     }
//     case 5:{
//         console.log('friday');
//         break;
//     }
//     case 6:{
//         console.log('saturday');
//         break;
//     }
//     case 7:
//         console.log('sunday');
//         break;
    
//     default:
//         console.log('invalid day');
    

// }


//write a prgoram to that uses a switch case to sasign a grade(A,B,C,D,F) based on score


let num = 67;

switch (true){
    case (num <= 10 && num <= 90): 
        console.log("Grade A");
        break;
    case (num < 90 && num >= 80): 
        console.log("Grade B");
        break;
    case (num < 80 && num >= 70): 
        console.log("Grade C");
        break;
    case (num < 70 && num >= 60): 
        console.log("Grade D");
        break;
    case (num < 60): 
        console.log("Grade F");
        break;
    default:
        console.log('invalid score')
}