/**
 * 
Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [X]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [X]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

O resultado final desse desafio deve ser algo em torno de:
 */

let students = [
  {nome:'Jonas',nota01:7,nota02:7},
  {nome:'Maria',nota01:9,nota02:10},
  {nome:'João',nota01:3,nota02:2}  
  ]

  function averageFunction(nota01,nota02){
    return ((nota01+nota02) / 2)
  }
  for (const student of students) {
    let average = averageFunction(student.nota01,student.nota02)

    if(average >= 7){
      alert(`Parabéns ${student.nome} você está APROVADO com média: ${average}`)
    }
    else{
      alert(`${student.nome} você está REPROVADO com média: ${average}`)
    }
  }
  

