// function greet(){
//     console.log('hello');
// }
// let intervalId = setTimeout(greet,3000);
// console.log(`Id: ${intervalId}`)


// function myTime(){
//     let dateTime = new Date();

//     let time = dateTime.toLocaleTimeString();

//     console.log(time);

//     setTimeout(myTime,2000);
// }
// myTime();

function greet(fname, lname){
    console.log(`hello ${fname} ${lname}`)
}

setTimeout(greet,5000,'kishan','prajapati');