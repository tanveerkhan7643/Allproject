function largest(arr) {
    let max = arr[0];   // pehle element ko max maan lo

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

let numbers = [20, 40, 60, 70, 100];
console.log("The maximum = " + largest(numbers));
