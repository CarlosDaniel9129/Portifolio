document.querySelector(".hamburguer").addEventListener("click", () => /*ao clicar sobre, chama a função ja atribuida*/
    document.querySelector(".container").classList.toggle("show-menu")
    //        pego          all                   add/remo, uma classe
);


document.querySelector("#qtde").addEventListener("change", atualizaPreco)
                                            //qualquer alteração chamo o metodo



document.querySelector("#js").addEventListener("change", atualizaPreco)
/*o check tambem vai ter o msm metodo*/
document.querySelector("#layout-sim").addEventListener("change", atualizaPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizaPreco)

document.querySelector("#prazo").addEventListener("change", function () { //funcão anonima
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = "Prazo: " + prazo + " semanas"//pega o label com atributo for, o valor de prazo
    atualizaPreco()
})

function atualizaPreco(){
    const qtde = document.querySelector("#qtde").value //pego o valor do elemento com o id, e armazeno na const
    const temJS = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value
    
    let preco = qtde * 100;
    //calcula 10% em cima de cada pagina, 1 é o 100% e o outro é o 10% ou ( preco * 10/100)
    if(temJS) preco *= 1.1 /*se tiver checado*/
    if(incluiLayout) preco += 500
    let taxaUrgencia = 1 - prazo * 0.1; // o 1 é o 100%, prazo muito alto subtrai o 1 pelo prazo multiplicado por 0.1 = 10%, se for 10 semanas, sera 1-1
    preco *= 1 + taxaUrgencia;

    document.querySelector("#preco").innerHTML = "R$ " + preco.toFixed(2) //o id preco tera o seu html interno igual a quantidade que for calc
                                                         //add mais 2 casas
}
