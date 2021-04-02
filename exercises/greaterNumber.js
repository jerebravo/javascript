/*
    Descripción: dado un array de números, retornar el mayor, solamente
    se puede iterar el array una sola vez
*/

const getBiggest = (arr) => arr.reduce((acc, el) => acc > el ? acc : el);

console.log(getBiggest([20,50,-123,37]))