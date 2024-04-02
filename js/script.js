const exercicio1 = () => {
    document.getElementById("resposta").innerHTML = " <h2>Resposta da Atividade</h2>"
  for (let i = 1; i <= 10; i++)
    document.getElementById("resposta").innerHTML += `<h3>#${i}</h3>`;
  // console.log(resposta ${i});
};

//--------------------------------------------------------------

const exercicio2 = () => {
    document.getElementById("resultado").innerHTML =  "<h2></h2>"
  for (let i = 0; i <= document.getElementById(`num`).value; i += 2)
    document.getElementById("resultado").innerHTML += (`#${i}`);
};

//-----------------------------------------------------------------

const exercicio3 = () => {
  let num = document.getElementById("num").value
  let error = document.getElementById("erro")
  let result = document.getElementById("resultado")
  if (num <=1){
    error.innerText = `O número ${num} não é primo.`;
    result.innerText = "";
  }else{
    error.innerText = "";
    let primo = true
for (let i = 0; i < num; i++) {
 if (num % i == 0)primo = false //% = resto da divisão
  
}   
   primo ? (result.innerText = `O número ${num} é primo!`) : (result.innerText = `O número ${num} não é primo!`)
  }
}

//-----------------------------------------------------------------
const exercicio4 = () => {
let num = document.getElementById("num").value;
let result = document.getElementById("resultado");
let error = document.getElementById("erro");

 if(num <=0) {
  error.innerText = `esse numero não é válido`//se acontecer da pessoa colocar número negativo
}else{
  result.innerText=""
  error.innerText=""


for (let i = 0; i <= 10; i++){//laço de repetição para fazer a tabuada

result.innerHTML += `${num}x ${i} = ${num * i} <br>`;//formulação da resposta
error.innerText =""
}
}
};

//------------------------------------------------------------------

const exercicio5 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");

  let contador = 0
  result.innerText=""

  while (num >= contador) {
    if (contador % 2 !== 0)  
    result.innerText += `${contador},`
  contador++
  
  }
}

//---------------------------------------------------

const exercicio6 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");

  let contador = 0
  let soma = 0
  result.innerText=""

  while (num >= contador) {
    
    if (contador % 2 == 0) {
      soma += contador
    }
  contador++
  result.innerHTML= soma
  }
}

//--------------------------------------------------------

const exercicio7 = () => {
  let cont = 10
  let result = document.getElementById("resposta")

  while (cont > 0) {
    result.innerText += ` ${cont},`
  cont--
  }
}
//-----------------------------------------------------------

const exercicio9 = () => {
  let somar = 0
  
  let result = document.getElementById("resposta")

  for (let i = 1; i <= 100; i++) {
    somar += i;
    
  }
  
   result.innerText = `${somar}`
}

//-------------------------------------------------------------

const  exercicio10 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let somar = 0

}
