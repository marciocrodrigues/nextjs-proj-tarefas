import { useState } from "react";
import Lista from "../components/lista/Lista";
import TarefasInicias from "../data/mock";
import ListaTerafas from "../model/ListaTarefas";
import Cabecalho from "../components/template/Cabecalho";
import Conteudo from "../components/template/Conteudo";
import Formulario from "../components/formulario/Formulario";
import Tarefa from "../model/Tarefa";

export default function Home() {
  const [tarefas, setTarefas] = useState(TarefasInicias);

  function mudarTarefas(novasTarefas: ListaTerafas) {
    setTarefas(novasTarefas);
  }

  function novaTarefaCriada(novaTarefa: Tarefa) {
    setTarefas(tarefas.adicionarTarefa(novaTarefa));
  }

  return (
    <div
      className={`
      flex flex-col
      bg-gray-300
      h-screen
    `}
    >
      <Cabecalho>
        <Formulario novaTarefaCriada={novaTarefaCriada} />
      </Cabecalho>
      <Conteudo>
        <Lista tarefas={tarefas} mudou={mudarTarefas} />
      </Conteudo>
    </div>
  );
}
