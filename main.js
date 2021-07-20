

let filterScratch = function(theArray, callback){
    //write a plain old for-loop
    //that will use the call back to return only the elments
    //that will meet the criteria
    const newNumbers = [17, 22 , 45 , 3 , 101 , 56, 65, 34, 41, 89, 11];

    const result = newNumbers.filter(newNumber => newNumber.length > 6);
    
    console.log(result);
    
    function callback(value) {
        return value >= 17
      }
      
      let theArray = [17, 3, 11, 101, 41].filter(isBigEnough);
      for(let i = 0; i < theArray.length; i++){
let value = callback(element, i);
value.filter(newNumber);
return newNumber;
      }
}

// returns and array 
let mapScratch = function(theArray, callback){
let newArray = []; 
    for(let i = 0; i < theArray.length; i++){
let newElement = callback(element, i);
newArray.push(newElement);
return newElement
    }
}

let findScratch = function(theArray, callback){
    //code here
    const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 5);

console.log(found);
// expected output: 12
for(let i = 0; i < theArray.length; i++){
let array2 = callback(element, i);
array2.find(newArray);
return newArray
}
    

}
let findIndexScratch = function(theArray, callback){
    //code here
    const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 12;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3

for(let i = 0; i <theArray.length; i++){
    let array2 = callback(element, i);
    array2.findIndex(newArray);
    return newArray;
}
}