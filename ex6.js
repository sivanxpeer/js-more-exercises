// function gets params a,b,c and returns a quadratic equation

function quadratic(a, b, c) {
    let x1;
    let x2;
    let X = { x1, x2 };
    let delta = Math.pow(b, 2) - 4 * a * c;
    if (delta<0) 
        return -1;
    else {
        X.x1 = (-b + Math.sqrt(delta)) / (2 * a);
        X.x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return X;
    }
}

console.log(quadratic(1, 2, -3));
console.log(quadratic(-2, 1, -15));
console.log(quadratic(1, 3, -4));