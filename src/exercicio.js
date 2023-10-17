// primeira etapa criar um array de objetos 
const alunos = [
    {
        nome: 'Leandro',
        nota: 7
    },
    {
        nome: 'Yuri',
        nota: 2
    },
    {
        nome: 'Leticia',
        nota: 8
    },
    {
        nome: 'Yan',
        nota: 5
    },
    {
        nome: 'Yago',
        nota: 9
    },
    {
        nome: 'Ramiro',
        nota: 10
    }
    
]



// segunda etapa criar uma função 

function escola(alunos) {
    const passei = alunos.map((aluno) =>{
        if(aluno.nota >= 6) {
            return aluno
        }
        else{
            return `o aluno ${aluno.nome} não passou`
        }
    })
    return passei
}

const resultado = escola(alunos)
console.log(resultado)


// fazer com o que essa função receba um parametro de Array de objeto




// verificar se esse meu array tem uma propiedade chamaada nota e se um dos meus array é igual ou maior que 6