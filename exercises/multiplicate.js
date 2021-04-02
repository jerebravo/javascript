/*
    Descripcón: dados dos números, multiplicar los mismos, sin usar
    el signo de  multplicación.
*/

const multiply = (a, b) => {
    let result = 0, absA = Math.abs(a), absB = Math.abs(b);
    const positive = absA == a && absB == b;
    const bothNegatives = absA != a && absB != b
    for(let i = 0; i < absA; i++){
        result = positive ? 
                    result + b : 
                    result - (bothNegatives ? b : absB);
    }

    return result;
}

console.log(multiply(-3,-5));
