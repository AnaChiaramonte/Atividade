const exercicio1 = () => {
  document.getElementById("resposta").innerHTML =
    " <h2>Resposta da Atividade</h2>";
  for (let i = 1; i <= 10; i++)
    document.getElementById("resposta").innerHTML += `<h3>#${i}</h3>`;
  // console.log(resposta ${i});
};

//--------------------------------------------------------------

const exercicio2 = () => {
  document.getElementById("resultado").innerHTML = "<h2></h2>";
  for (let i = 0; i <= document.getElementById(`num`).value; i += 2)
    document.getElementById("resultado").innerHTML += `#${i}`;
};

//-----------------------------------------------------------------

const exercicio3 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  if (num <= 1) {
    error.innerText = `O número ${num} não é primo.`;
    result.innerText = "";
  } else {
    error.innerText = "";
    let primo = true;
    for (let i = 0; i < num; i++) {
      if (num % i == 0) primo = false; //% = resto da divisão
    }
    primo
      ? (result.innerText = `O número ${num} é primo!`)
      : (result.innerText = `O número ${num} não é primo!`);
  }
};

//-----------------------------------------------------------------
const exercicio4 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");

  if (num <= 0) {
    error.innerText = `esse numero não é válido`; //se acontecer da pessoa colocar número negativo
  } else {
    result.innerText = "";
    error.innerText = "";

    for (let i = 0; i <= 10; i++) {
      //laço de repetição para fazer a tabuada

      result.innerHTML += `${num}x ${i} = ${num * i} <br>`; //formulação da resposta
      error.innerText = "";
    }
  }
};

//------------------------------------------------------------------

const exercicio5 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");

  let contador = 0;
  result.innerText = "";

  while (num >= contador) {
    if (contador % 2 !== 0) result.innerText += `${contador},`;
    contador++;
  }
};

//---------------------------------------------------

const exercicio6 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");

  let contador = 0;
  let soma = 0;
  result.innerText = "";

  while (num >= contador) {
    if (contador % 2 == 0) {
      soma += contador;
    }
    contador++;
    result.innerHTML = soma;
  }
};

//--------------------------------------------------------

const exercicio7 = () => {
  let cont = 10;
  let result = document.getElementById("resposta");

  while (cont > 0) {
    result.innerText += ` ${cont},`;
    cont--;
  }
};
//----------------------------------------------------------------
const exercicio8 = () => {
  let palavra = document.getElementById("palavra").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  error.innerText = "";
  result.innerText = "";

  let inversa = "";

  if (palavra == "") {
    error.innerText = "Favor informar uma palavra";
  } else {
    for (let i = 1; i <= palavra.length; i++) {
      inversa += palavra.charAt(palavra.length - i);
    }

    palavra.toLowerCase() == inversa.toLowerCase()
      ? (result.innerText = "A palavra é um palíndromo!")
      : (error.innerText = "A palavra não é um palíndromo!");
  }
};

//-----------------------------------------------------------

const exercicio9 = () => {
  let somar = 0;

  let result = document.getElementById("resposta");

  for (let i = 1; i <= 100; i++) {
    somar += i;
  }

  result.innerText = `${somar}`;
};

//-------------------------------------------------------------

const exercicio10 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let cont = 0;
  let soma = 0;

  result.innerHTML = "";
  error.innerText = "";

  if (num <= 0) {
    error.innerText = "informar um número válido";
  } else {
    while (cont <= num) {
      soma += cont;
      cont++;
    }
    let medida = soma / num;
    result.innerHTML += `A soma é igual a ${soma}, `;
    result.innerHTML += `a média é igual a ${medida}`;
  }
};

//---------------------------------------------------------------

const exercicio11 = () => {
  let result = document.getElementById("resposta");
  result.innerHTML = "";
  // let cont = 0
  for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0) result.innerHTML += ` #${i}<br> `;
  }
};

//-------------------------------------------------------------------

const exercicio12 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let soma = 0;
  let error = document.getElementById("erro");
  result.innerHTML = "";
  error.innerHTML = "";
  if (num < 10) {
    error.innerHTML = "informe um número com no minimo dois digitos";
  } else {
    for (let i = 0; i < num.length; i++) {
      soma += parseInt(num.charAt(i));
    }
    result.innerText = `${soma}`;
  }
};

//-------------------------------------------------------------------

const exercicio13 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");

  let maior, menor;

  if (num1 < num2) {
    menor = num1;
    maior = num2;
  }

  result.innerText = "";
  if (num1 <= 0 || num2 <= 0) {
    error.innerText = " algum dos números não é válido";
    result.innerText = "";
  } else {
    error.innerText = "";
    result.innerText = "";

    for (let i = menor; i <= maior; i++) {
      let verificação = vericaPrimo(i);
      if (verificação) {
        result.innerText += ` ${i},`;
      }
    }
  }
};

function vericaPrimo(numero) {
  let primo = true;
  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) primo = false;
  }
  return primo;
}

//---------------------------------------------------------------------

const exercicio14 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let result = document.getElementById("resultado");
  let mult = (num1 *= num2);
  let error = document.getElementById("erro");

  if (num1 <= 0 || num2 <= 0) {
    error.innerText = "digite um número positivo";
    result.innerText = "";
  } else {
    result.innerHTML = `A área do retangulo é ${mult}`;
  }
};

//------------------------------------------------------------------

const exercicio15 = () => {
  let palavra = document.getElementById("palavra").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("resultado");
  let vogais = [];
  consoante = [];
  result.innerText = "";
  error.innerText = "";

  if (!isNaN(palavra)) {
    error.innerText = "Apenas letras";
  } else {
    for (let i = 0; i < palavra.length; i++) {
      let letra = palavra[i].toLowerCase();

      if (
        letra == "a" ||
        letra == "e" ||
        letra == "i" ||
        letra == "o" ||
        letra == "u"
      ) {
        vogais.push(letra);
      } else {
        consoante.push(letra);
      }
    }
    result.innerHTML = `vogais ${vogais} consoante ${consoante} `;
  }
};

//-----------------------------------------------------------------------

const exercicio16 = () => {
  let num1 = document.getElementById("num1").value;
  let result = document.getElementById("resultado");
  let pi = 3.14;
  let area = pi * num1 ** 2;
  while (num1 <= 0) {
    result.innerHTML = "";
    error.innerText = " digite um número positivo";
  }
  result.innerText = `a área do circulo é ${area}`;
};

//-------------------------------------------------------------------------
const exercicio17 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let result = document.getElementById("resultado");
  let mult = (num1 *= num2) / 2;
  let error = document.getElementById("erro");

  if (num1 <= 0 || num2 <= 0) {
    error.innerText = "digite um número positivo";
    result.innerText = "";
  } else {
    result.innerHTML = `A área do triângulo o é ${mult}`;
  }
};

//-------------------------------------------------------------------

const exercicio18 = () => {
  let num1 = document.getElementById("num1").value * 1;
  let num2 = document.getElementById("num2").value * 1;
  let result = document.getElementById("resultado");
  let altura = document.getElementById("num3").value * 1;
  let area = num1 + (num2 * altura) / 2;
  let error = document.getElementById("erro");

  if (num1 <= 0 || num2 <= 0 || altura <= 0) {
    error.innerText = "digite um número positivo";
    result.innerText = "";
  } else {
    result.innerHTML = `A área do trapézio é ${area}`;
  }
};

//-------------------------------------------------------------------

const exercicio19 = () => {
  let data = document.getElementById("data").value;
  let result = document.getElementById("resposta");
  let error = document.getElementById("erro");
  let atual = new Date();
  result.innerText = "";
  error.innerText = "";

  if (data == "") {
    error.innerText = "inserir data";
  } else {
    error.innerText = "";
    data = new Date(data);

    let ano = atual.getTime() - data.getTime();

    const idade = Math.floor(ano / (1000 * 60 * 60 * 24 * 365.25));
    result.innerText += `${idade}`;
  }
};
//-------------------------------------------------------------------

const exercicio20 = () => {
  let frase = document.getElementById("frase").value;
  let result = document.getElementById("resposta");
  let error = document.getElementById("erro");
  let inverter = " ";

  if (frase == "") {
    error.innerText = " escreva a frase";
    result.innerText = "";
  } else {
    for (var i = frase.length - 1; i >= 0; i--) {
      inverter += frase[i];
    }
    result.innerHTML = `${inverter}`;
    error.innerText = "";
  }
};

//-----------------------------------------------------------------------

const exercicio21 = () => {
  let result = document.getElementById("resultado")
  let frase = document.getElementById("frase").value
  let error = document.getElementById("erro")
  
  if (frase === ""){
    error.innerText = "escreva a frase"
    result.innerText = ""
  }else{
    function removEspaço(frase) {
      let outrafrase = "";
      for (let i = 0; i < frase.length; i++) {
        if(frase[i] !== ` `)
        outrafrase += frase[i]
    }
   return outrafrase;
    }
  let frase1 = removEspaço (frase)
  result.innerText = `${frase1}`
  error.innerText = ""
  }
};

//--------------------------------------------------------------------------


  //------------------------------------------------------------------------
  let soma = 0;
  const exercicio22 = () => {
    let num = document.getElementById("num").value;
    let result = document.getElementById("resultado")
    let error = document.getElementById("erro");
    error.innerText = ""; 
    result.innerText = "";
  
    if (soma <= 100){
      soma += parseInt(num);
      result.innerText = `a soma é ${soma}`
    }else{
      result.innerText = "";
      error.innerText = `a soma ja chegou a 100`
    }
  };





  
//----------------------------------------------------------------------
const exercicio23 = () => {
  let palavra = document.getElementById("palavra").value
  let frase = document.getElementById("frase").value
  let result = document.getElementById("resultado")
  let error = document.getElementById("erro")
let cont = 0
  if (!isNaN(frase) || !isNaN(palavra)){
    error.innerText = "escreva a frase"
  }else{
    frase = frase.toLowerCase()
    palavra = palavra.toLowerCase()
    let palavras = frase.split(" ");

    for (var i = 0; i < palavras.length; i++){
      if(palavras[i] == palavra){
      cont++;
    }
  }
  result.innerHTML = `a palavra ${palavra} aparece ${cont}`
    }
    }
 //-------------------------------------------------------------------------------

const exercicio24 = () => {
  let valor  = document.getElementById("frase").value;
  let frase = valor.split(" ");
  let result = document.getElementById("resultado")
  let error = document.getElementById("erro")
const  letramaiuscula = [];
error.innerText = "";
result.innerText = ""


if (valor == ""){
  error.innerText = "escreva uma frase"
}else{
  const mudafrase = frase.map((palavra) => {
    const primeiramaiuscula = palavra[0].toUpperCase();
    letramaiuscula.push(primeiramaiuscula);
    return primeiramaiuscula + palavra.slice(1)
  });
  result.innerHTML = `${mudafrase.join(" ")}`
}
}

//--------------------------------------------------------------------------------

const exercicio25 = () => {
  let num1 = document.getElementById("num1").value
  let num2 = document.getElementById("num2").value
  let num3 = document.getElementById("num3").value
  let result = document.getElementById("resposta")
  let error = document.getElementById("erro")
  let array = []

  array.push(num1);
  array.push(num2);
  array.push(num3);
  array.sort((a, b) => a - b);
  console.log(array)

  if (num1 <= 0 || num2 <= 0 || num3 <= 0) {
error.innerHTML = "apenas números positivos"
result.innerText = "" 
}else{
  for (let i = 0; i <= 2; i++) {
    result.innertext += ` ${array[i]},`
    error.innerHTML = ""
  }
}
}