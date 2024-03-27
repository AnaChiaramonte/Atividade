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
