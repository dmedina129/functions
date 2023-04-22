function firstLetterName (name){
    alert("The name " + name + " starts with the letter " + name[0]);
}



function divisibleByTwo(num){
    if(num % 2 === 0){
        console.log("The number " + num + " is divisible by 2: ");
        return true;
    } else if(num % 2 === 1){
        console.log("The number " + num + " is divisible by 2: ");
        return false;
    }

}


function largestNum(arr) {
    let largestNum = (arr[0]);
    for (let i = 0; i < arr.length; i++) {
       if(arr[i] > largestNum)   {
        largestNum = arr[i]
       }
    }
    return largestNum;
}

firstLetterName("Daniela");
divisibleByTwo(10);
largestNum([24, 100, 2, 135]);
