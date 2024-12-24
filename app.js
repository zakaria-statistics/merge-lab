function addnumbers(a,b){
    return a+b;
}

console.log(addnumbers(2,3));

function subnumbers(a,b){
    // This line will be executed
    return a-b;
    // This line won't be executed
}

console.log('This is line');
console.log(subnumbers(2,3));