

let filterScratch = function (theArray, callback) {
    //write a plain old for-loop
    //that will use the call back to return only the elments
    //that will meet the criteria
let newArray = [];
for(let i = 0; i < theArray.length; i++){
    let element = theArray[i];
    let newElement = callback.filter(element, i);
    newArray.push(newElement);
    return newElement
}
}
   
// returns and array 
let mapScratch = function (theArray, callback) {
    let newArray = [];
    for (let i = 0; i < theArray.length; i++) {
        let element = theArray[i];
        let newElement = callback(element, i);
        newArray.push(newElement);
        return newElement
    }
}

let findScratch = function (theArray, callback) {
    let newArray = [];
    for (let i = 0; i < theArray.length; i++) {
        let element = theArray[i];
        let newElement = callback.find(element, i);
        newArray.push(newElement);
        return newElement
    }
}



let findIndexScratch = function (theArray, callback) {
    //code here
    let newArray = [];
    for (let i = 0; i < theArray.length; i++) {
        let element = theArray[i];
        let newElement = callback.findIndex(element,i);
        newArray.push(newElement);
        return newElement
    }

}

let forEachScratch = function (theArray, callback) {
    let newArray = [];
    for(let i = 0; i < theArray.length; i++){
        let element = theArray[i];
        let newElement = callback.forEach(element, i);
        newArray.push(element);
        return newElement
    }
}   
