import tarefasIniciais from "../data/mock";
import Tarefa from "../model/Tarefa";

export default function Home() {
  let tarefas = tarefasIniciais;
  tarefas = tarefas.filtrarAtivas();
  tarefas = tarefas.filtrarConcluidas();
  tarefas = tarefas.removerFiltro();
  //tarefas = tarefas.excluirConcluidas();
  tarefas = tarefas.adicionarTarefa(
    Tarefa.criarConcluida(4, "Lavar os pratos")
  );
  tarefas = tarefas.adicionarTarefa(
    Tarefa.criarAtiva(5, "Cuidar das crianças")
  );

  tarefas = tarefas.modificarTarefa(tarefas.itens[4].alternarStatus());

  function renderizarTarefas() {
    return tarefas.itens.map((tarefa) => {
      return (
        <div key={tarefa.id}>
          <span>{tarefa.id} | </span>
          <span>{tarefa.descricao} | </span>
          <span>{tarefa.ativa ? "Ativa" : "Concluída"}</span>
        </div>
      );
    });
  }

  return (
    <div
      className={`
      flex flex-col justify-center items-center
      text-white
      bg-gradient-to-tr from-purple-500 to-yellow-600 bg-purple-600
      h-screen
    `}
    >
      {renderizarTarefas()}
    </div>
  );
}
