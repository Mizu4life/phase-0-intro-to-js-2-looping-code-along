// Code your solutions in this file
function writeCards(names , type){
    let arr=[];
    for(let i=0; i< names.length;i++){
        arr.push(`Thank you, ${names[i]}, for the wonderful ${type} gift!`);
    }
    return arr;
};
// console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));

function countDown(countdown){
    while (countdown >= 0) {
        console.log(countdown--);
      }
}
// countDown(10);