let tarefas = [];
let proximoId = 1;


function adicionarTarefa(descricao, prioridade) {
  let tarefa = {
    id: proximoId,
    descricao: descricao,
    concluida: false,
    prioridade: prioridade
  };

  tarefas.push(tarefa);
  proximoId++;
}


function listarTarefas() {
  console.log("\n📋 LISTA DE TAREFAS");

  if (tarefas.length === 0) {
    console.log("Nenhuma tarefa cadastrada.");
    return;
  }

  for (let i = 0; i < tarefas.length; i++) {
    let tarefa = tarefas[i];

    console.log(
      "ID: " + tarefa.id +
      " | Descrição: " + tarefa.descricao +
      " | Prioridade: " + tarefa.prioridade +
      " | Concluída: " + (tarefa.concluida ? "Sim" : "Não")
    );
  }
}


function marcarComoConcluida(id) {
  for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].id === id) {
      tarefas[i].concluida = true;
      console.log("Tarefa " + id + " marcada como concluída.");
      return;
    }
  }

  console.log("Tarefa não encontrada.");
}


function removerTarefa(id) {
  for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].id === id) {
      tarefas.splice(i, 1);
      console.log("Tarefa " + id + " removida.");
      return;
    }
  }

  console.log("Tarefa não encontrada.");
}


//Testes


adicionarTarefa("Estudar JavaScript", "alta");
adicionarTarefa("Fazer exercícios da faculdade", "média");
adicionarTarefa("Lavar a louça", "baixa");

listarTarefas();

marcarComoConcluida(2);

listarTarefas();

removerTarefa(1);

listarTarefas();