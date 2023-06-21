import ListaTerafas from "../../model/ListaTarefas";
import Tarefa from "../../model/Tarefa";
import ListaItem from "./ListaItem";
import ListaRodape from "./ListaRodape";

interface ListaProps {
  tarefas: ListaTerafas;
  mudou: (tarefas: ListaTerafas) => void;
}

export default function Lista(props: ListaProps) {
  const { tarefas } = props;

  function alterarStatus(tarefa: Tarefa) {
    const tarefaModificada = tarefa.alternarStatus();
    const novaLista = tarefas.modificarTarefa(tarefaModificada);
    props.mudou(novaLista);
  }

  function renderizarTarefas() {
    return tarefas.itens.map((tarefa) => {
      return (
        <ListaItem
          key={tarefa.id}
          valor={tarefa.descricao}
          concluido={tarefa.concluida}
          alterarStatus={() => alterarStatus(tarefa)}
        />
      );
    });
  }

  return (
    <div
      className={`
        flex w-3/5
    `}
    >
      <ul
        className={`
            w-full list-none
            bg-white shadow-lg rounded-lg
      `}
      >
        {renderizarTarefas()}
        <ListaRodape tarefas={props.tarefas} mudou={props.mudou} />
      </ul>
    </div>
  );
}
