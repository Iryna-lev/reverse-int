module.exports =  function reverse (n) {
    let numA = Math.abs(n);
    let numB = numA.toString();
    let numC = numB.split('').reverse().join('');
    let numResult = parseInt(numC , 10);
    return(numResult)
}