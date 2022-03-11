let originalDogs =["BullDog","Beagle","Labrador"];
let cat = new Array("Americal curl","Bengal");
let birds =["Falcons","Ducks","Flamingoes"];

//Array copy elements

let sliceDogs = originalDogs.slice(1,2);
let copyDogs = [...originalDogs];
let dogs = originalDogs.slice(0);

//stack function push and pop

let pushDog = dogs.push("Golden Retriver");
let popDog = dogs.pop();
dogs[dogs.length] = "poodle" ;

//Add and Remove from First
let addFirst = dogs.unshift("Golden Retriver");
let shiftDog = dogs.shift();

//Atomic add and remove elements
let animals = dogs.concat(cat,birds);
let newAnimal = [...dogs, ...cat, ...birds].toString();
let sortDog = dogs.slice(0).sort();
function scanArray([first,second])
{console.log("scan:" + first + "" + second)}
scanArray(animals);
let joinAnimals = animals.join("");
let allAnimals = "";
for(let animal of animals) allAnimals +=animal + " ";

console.log("Animals " + allAnimals);




