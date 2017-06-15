var input = process.argv[2];

if(input === NaN) {
    console.log("Invalid number");

}

var iterations = 0;

while(input != 1) {
    console.log("Current state: " + input);
    iterations++;

    if(input % 3 === 0) {
        input = input / 3;
        continue;
    }

    if((input + 1) % 3 === 0) {
        console.log("Plus one");
        input = (input + 1) / 3;
    }
    else {
        input = (input - 1) / 3;
        console.log("Minus one");
    }
}

console.log("Input = " + input);
console.log("Iterations: " + iterations);