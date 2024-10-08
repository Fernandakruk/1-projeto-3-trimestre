const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/dados-globais.js'
console.log(url);

async function
visualizarInformacoesGlobais (){
    const res = await fetch(url);
    const dados = res.json()
    const paragrafos = document.createElement('p')
    paragrafos.classList.add('graficos-cotainer_texto')
    paragrafos.innerHTML = `Você sabia que o mundo tem
    ${dados.total_pessoas_mundo} de pessoas e 
    que aproximadamente ${dados.total_pessoas_concetadas}
    estão conectadas em alguma rede social e passem em médias 
    ${dados.tempo_medio} horas conectadas.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
    console.log(dados.tempo_medio)
}
visualizarInformacoesGlobais()
{
    "total_pessoas_conectadas"; 5.04e9,
    "total_medio"; 2.38,
    "total_pessoas_mundo"; 7.888e9
}
paragrafo.innerHTML = `você sabia que o mundo tem 
<span>${dados.total_pessoas_mundo}</span> de pessoas e 
que aproxmadamente <span>${dados.total_pessoas_concetadas}</span>
estão conectadas em alguma rede social e passam em media
<span>${dados.tempo_medio}</span> horas conectadas.`