/* 
    Function verify if salary is null or less then throws error message end return false.
    If not, then return true.
*/
function verificaSalario(salario) {
    
    if (salario == null) {
        console.log("Por favor insira o sálario....");
        return false;
    }else if (salario < 0) {
        console.log("Por favor insira um sálario válido.....");
        return false;
    }else{
        return true;
    }
}

/* 
    Function verify if porcentage is null or less then throws error message end return false.
    If not, then return true.
*/
function verificaPorcentagem(porcentagem) {
    
    if (porcentagem == null) {
        console.log("Por favor insira a porcentagem....");
        return false;
    }else if (porcentagem < 0.0) {
        console.log("Por favor insira uma porcentagem válida.....");
        return false;
    }else{
        return true;
    }
}

/*
    If after called the verifications and returned true then the math operation is made and print the new salary.
*/
function aumentoSalarial(salario, porcentagem) {

    if (verificaSalario(salario) == true && verificaPorcentagem(porcentagem) == true) {
        
        valorAumento = salario * porcentagem;
        salarioFinal = salario + valorAumento;
        
        console.log("Seu novo sálario éde R$", salarioFinal);
    }
}

// test1
aumentoSalarial(-1500, 0.1);

// test2
aumentoSalarial(null, 0.1);

// ----------------------------------

// test1
aumentoSalarial(1500, -0.1);

// test2
aumentoSalarial(1500, null);

// ----------------------------------

aumentoSalarial(1500, 0.1);