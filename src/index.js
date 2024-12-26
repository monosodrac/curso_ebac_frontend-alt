const alunos = [
    { nome: "Gustavo", nota: 10 },
    { nome: "Cecilia", nota: 10 },
    { nome: "Rubens", nota: 5 },
    { nome: "Gilberto", nota: 7 },
];

function filtrarNotasAprovadas (alunosLista) {
    return alunosLista.filter(aluno => aluno.nota >= 6);
};

const aprovados = filtrarNotasAprovadas(alunos);

aprovados.forEach(aluno => {console.log(`${aluno.nome} tirou ${aluno.nota} e está aprovado(a)`)});