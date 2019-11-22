const numeros = [1, 5, 7, 3, 2, 4];
const pares = [];

//obtener los numeros pares
for (let i = 0; i < numeros.length; i++) {
    //si el n es multiplo d 2
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
    }
}

//con forEach
numeros.forEach(function(n) {
    if (n % 2 === 0) {
        pares.push(n);
    }
});

//filter
const pares = numeros.filter(function(n) {
    if (n % 2 === 0) {
        return true;
    }
    return false;
});

//mas resumida
const pares = numeros.filter(function(n) {
    return n % 2 === 0;
});

// ecma6
const pares = numeros.filter(n => n % 2 === 0);
//ecma6 FIND UN SOLO ELEMENTO
const unPar = numeros.find(n => n % 2 === 0);

console.log(pares);
