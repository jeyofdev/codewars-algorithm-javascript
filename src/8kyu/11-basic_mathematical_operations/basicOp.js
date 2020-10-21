/**
 * Perform an operation of addition, subtraction, multiplication or division between 2 numbers
 * 
 * @param {string} operation ("+", "-", "*" ou "/")
 * @param {number} numberA 
 * @param {number} numberB 
 */
const basicOp = (operation, numberA, numberB) => {
    switch (operation){
        case '+':
            return numberA + numberB
            break
        case '-':
            return numberA - numberB
            break
        case '*':
            return numberA * numberB
            break
        case '/':
            return numberA / numberB
            break
    }
}


module.exports = basicOp;