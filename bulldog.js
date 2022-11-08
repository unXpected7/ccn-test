const bullDog = (value) => {
    sum = 0;

    while (value) {
        sum += value % 10;
        value = Math.floor(value / 10);
        let i = value;
        if (i % 4 === 0 && i % 8 === 0) {
            console.log('bulldog')
        } else if (i % 4 === 0) {
            // Is the number a multiple of 4?
            console.log('bull')
            // Is the number a multiple of 8?
        } else if (i % 8 === 0) {
            console.log('dog')
        } else {
            console.log(i) 
        }
        
    }
    
    for (let i = 1; i <= value; i++) {
        // Is the number a multiple of 4 and 8?
        if (i % 4 === 0 && i % 8 === 0) {
            console.log('bulldog')
        } else if (i % 4 === 0) {
            // Is the number a multiple of 4?
            console.log('bull')
            // Is the number a multiple of 8?
        } else if (i % 8 === 0) {
            console.log('dog')
        } else {
            console.log(i) 
        }
    }
}