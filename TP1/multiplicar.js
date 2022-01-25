function multiplicar (num1, num2){
    if(num1 == 0 || num2 == 0){
        return 0;
    } else{
        let resultadoMultiplicar = num1 * num2;
        return resultadoMultiplicar;
    }
}

module.exports = multiplicar;