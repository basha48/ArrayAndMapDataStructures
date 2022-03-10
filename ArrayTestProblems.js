let randomArray = [];
let Array = findMinAndMax(randomArray);
primeFactorization();
mapTest();
   //sort array
let sortArray = Array.sort();
console.log("Second max value is :" + sortArray[sortArray.length -2] + "\n" + "second min value is " + sortArray[1]);

function primeFactorization(){
   let  number = 24;
   let primeFactor = [];
    for(let i = 2; i< number; i++) {
        while(number%i == 0) {
           console.log(i+" ");
           number = number/i;
        }
        if(number >2) {
            console.log(number);
         }
    }   
}

function findMinAndMax(randomArray){

    let temp =0;
   // let randomArray = [];
    for(let i=0; i<5;i++){
        let Number =  Math.floor(Math.random()*(999-100+1)+100);
        randomArray[i] = Number;
    }

    console.log(randomArray.toString());
    for(let j = 0;j<randomArray.length; j++){
        for(let k = j+1;k<randomArray.length;k++){
           if(randomArray[j]>randomArray[k]) {
               temp = randomArray[j];
             randomArray[j] =  randomArray[k];
             randomArray[k] = temp;

           }
        }
    }
    console.log("Second max value is :" + randomArray[randomArray.length -2] + "\n" + "second min value is " + randomArray[1]);
    return randomArray;
}

 function mapTest(){
    let myMap = new Map();
    let randomNumber = [];
    for(let i = 0; i<50; i++){
        randomNumber   =  Math.floor(Math.random() * 6 + 1 );
        myMap.set(i,randomNumber);
    }
    for(let [key,value] of myMap){

    console.log("The key  is " + key + " :" + "value is " +value + "\n");
    }
    
 }

