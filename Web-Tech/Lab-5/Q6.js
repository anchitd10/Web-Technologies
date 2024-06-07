for (let i = 2; i <= 100; i++) {
    let isPrime = true;

    // Check if the current number is prime
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}