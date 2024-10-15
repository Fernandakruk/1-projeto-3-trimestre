import { getsCSS } from "./common"
async function quantidadeUsuarios(){
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch (url)
    const dados = await res.json()
    const nomeDaRedes = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomeDaRedes,
            y: quantidadeUsuarios,
            type: 'bar',
            marker: {
                color: getCSS('--primary-clor')
            }
        }
    ]
    const grafico = document.createElement('div')
    grafico.className= 'grafico'
    document.getElementById('graficos-container').appendChild(graficos)
    Plotly.newPLot(grafico,data, layout)

}
const layout = {
    plot_bgcolor: getsCSS('--bg-color'),
    paper_bgcolor: getsCSS('--bg-color'),
    title: {
        text : 'Redes sociais com mais usuários no mundo',
        x: 0,
        font: {
            color: getsCSS('--primary-color'),
            family: getsCSS('--font'),
            size: 30
        }
    },
        xaxis:{
            tickfont: {
                color: getsCSS('--primary-color'),
                size: 16,
                family: getsCSS('--font')

            },
        title:{
            text: 'nome das redes sociais',
            font: {
                color: getsCSS('--secundary-color')
            } 
        }
    },
    yaxis:{
        title: {
        text:'bilhões de usuários ativos',
        color: getsCSS('--secundary-color')
        }
    }

}

quantidadeUsuarios()