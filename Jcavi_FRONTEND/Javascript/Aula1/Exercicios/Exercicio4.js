/*
    If values are null or not acceptable then will return an error message 
    and false value, if not, will return true.
*/
function validaValores(parcela, valorProduto){

    if (parcela == null || valorProduto == null) {
        console.log("Por favor preencha a parcela e/ou o valor do produto.........");
        return false
    } else if (valorProduto <= 0) {
        console.log("Por favor digite um valor válido.......");
        return false;
    } else {
        return true;
    }
}

/*
    If validateValues() returns true, the function will calculate interest, final price, and price per month.
*/
function calculoParcela(parcela, valorProduto) {

    if (validaValores(parcela, valorProduto) == true) {

        if (parcela == 0) {
            console.log("Preço a vista...");
            console.log("Valor total: R$", valorProduto);
        }else if (parcela == 3) {

            console.log("Preço em 3X...");

            valorJurosParcela = valorProduto * 0.1;
            console.log("Valor do acréscimo será de R$",valorJurosParcela);

            valorDoProdutoComJuros = valorProduto + valorJurosParcela;
            console.log("Valor total do produto será de R$", valorDoProdutoComJuros);

            valorParcelas = valorDoProdutoComJuros / 3;
            console.log("Valor das parcelas em 3X será de R$", valorParcelas);
        }else if (parcela == 5) {

            console.log("Preço em 5X...");

            valorJurosParcela = valorProduto * 0.2;
            console.log("Valor do acréscimo será de R$",valorJurosParcela);

            valorDoProdutoComJuros = valorProduto + valorJurosParcela;
            console.log("Valor total do produto será de R$", valorDoProdutoComJuros);

            valorParcelas = valorDoProdutoComJuros / 5;
            console.log("Valor das parcelas em 5X será de R$", valorParcelas);
        }else{
            console.log("Por favor selecione uma parcela valida(a vistá = 0, 3X ou 5X)");
        }

    }
}

// test1
calculoParcela();

// test2
calculoParcela(3, -2500);
calculoParcela(3, 0);

// -----------------------

// test1
calculoParcela(4, 2500);

// test2
calculoParcela(0, 1500);

// test3
calculoParcela(3, 1500);

// test4
calculoParcela(5, 1500);
