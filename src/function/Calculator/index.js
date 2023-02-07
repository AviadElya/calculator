//calculator function

export default function Calculator(array1) {
    let arrayWork = array1.map(value => {
        return isNaN(value) ? value : parseInt(value, 10);})
    console.log(arrayWork);
        for (let ind = 0; ind < arrayWork.length - 1; ind++) {
            if (arrayWork[ind] === "/") {
                let temp = (arrayWork[ind-1])/(arrayWork[ind+1]);
                arrayWork[ind-1] = temp;
                arrayWork.splice(ind, 2)
            }
        }
        console.log(1);
        for (let ind = 0; ind < arrayWork.length - 1; ind++) {
            if (arrayWork[ind] === "*") {
                let temp = (arrayWork[ind-1])*(arrayWork[ind+1]);
               arrayWork[ind-1] = temp;
                console.log(arrayWork[ind-1]);
                arrayWork.splice(ind, 2)
                console.log(arrayWork);
            }
        }
        console.log(2);
        for (let ind = 0; ind < arrayWork.length - 1; ind++) {
            if (arrayWork[ind] === "+") {
                let temp = (arrayWork[ind-1])+(arrayWork[ind+1]);
               arrayWork[ind-1] = temp;
                arrayWork.splice(ind, 2)
            }
        }
        console.log(3);
        for (let ind = 0; ind < arrayWork.length - 1; ind++) {
            if (arrayWork[ind] === "-") {
                let temp = (arrayWork[ind-1])-(arrayWork[ind+1]);
                arrayWork[ind-1] = temp;
                arrayWork.splice(ind, 2)
            }
        }
    return arrayWork
}


