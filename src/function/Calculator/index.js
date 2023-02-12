//calculator function

export default function Calculator(array1) {
let array2 = [...array1.matchAll(/[+\-*/]|[^+\-*/]+/g)];
console.log(array2);
array2 = array2.map(x => x[0]);
    
    let arrayWork = array2.map(value => {
        return isNaN(value) ? value : parseInt(value, 10);
    })
    console.log(arrayWork);
    for (let ind = 0; ind < arrayWork.length - 1; ind++) {
        if (arrayWork[ind] === "/") {
            let temp = (arrayWork[ind - 1]) / (arrayWork[ind + 1]);
            arrayWork[ind - 1] = temp;
            arrayWork.splice(ind, 2)
            ind=ind-2;
        }
    }
    
    for (let ind = 0; ind < arrayWork.length - 1; ind++) {
        if (arrayWork[ind] === "*") {
            let temp = (arrayWork[ind - 1]) * (arrayWork[ind + 1]);
            arrayWork[ind - 1] = temp;
            arrayWork.splice(ind, 2)
            ind=ind-2;
            console.log(arrayWork);
        }
    }
    
    for (let ind = 0; ind < arrayWork.length - 1; ind++) {
        if (arrayWork[ind] === "+") {
            let temp = (arrayWork[ind - 1]) + (arrayWork[ind + 1]);
            arrayWork[ind - 1] = temp;
            arrayWork.splice(ind, 2)
            ind=ind-2;
        }
    }
    
    for (let ind = 0; ind < arrayWork.length - 1; ind++) {
        if (arrayWork[ind] === "-") {
            let temp = (arrayWork[ind - 1]) - (arrayWork[ind + 1]);
            arrayWork[ind - 1] = temp;
            arrayWork.splice(ind, 2)
            ind=ind-2;
        }
    }
    console.log(arrayWork);
    return arrayWork
}


