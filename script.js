

function CalcularIMC(){
    //pegando os valores de peso e altura do usuario.
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    //transfomando peso/altura em numeros legitimos.
    peso = parseFloat(peso);
    altura = parseFloat(altura);

     //aqui realizamos a operação de cacular o imc do corpo.
     let imc = peso / (altura * altura);


     //imc = Math.floor(imc);
 
     //sempre dê preferencia ao Math.trunc(), pois se comporta de maneira mais realista.
     imc = Math.trunc(imc)

    //usado para guardar a classficão com base no resultado de imc
     let Classificação = ClassificaçãoIMC(imc)
    //Classificação = Math.trunc(Classificação);
    
     if (isNaN (peso) || isNaN (altura)) {
            throw Error ("parametro não numero inserido.") && alert("Parametros invalidos");

    } else {
            alert(`Seu indice de massa muscular está em: ${imc}`)
    }
}

    
    function ClassificaçãoIMC(imc){

     if (imc <= 16.9){
        return alert("Muito abaixo do peso de 16 a 16,9 kg/m2");
     } else if(imc <= 18.4){
         return alert("Abaixo do peso 17 a 18,4 kg/m2");

     } else if (imc <= 24.9) {
         return alert("Peso normal 18,5 a 24,9 kg/m2");

     } else if (imc <= 29.9){
         return alert("Acima do peso 25 a 29,9 kg/m2");

     } else if (imc <= 34.9){
         return alert("Obesidade Grau I 30 a 34,9 kg/m2");

     } else if (imc <= 40){
         return alert("Obesidade Grau II 35 a 40 kg/m2");

     } else {
        return("Obesidade nivel III com 40 kg/m2");
     }
    }

document.getElementById("botão").addEventListener("click", CalcularIMC);
console.log(CalcularIMC)


/*Muito abaixo do peso 16 a 16,9 kg/m2

Abaixo do peso 17 a 18,4 kg/m2

Peso normal 18,5 a 24,9 kg/m2

Acima do peso 25 a 29,9 kg/m2

Obesidade Grau I 30 a 34,9 kg/m2

Obesidade Grau II 35 a 40 kg/m2

Obesidade Grau III maior que 40 kg/m2*/