import { useState } from "react";
import Lista from "../components/lista/Lista";
import TarefasInicias from "../data/mock";
import ListaTerafas from "../model/ListaTarefas";

export default function Home() {
  const [tarefas, setTarefas] = useState(TarefasInicias);

  function mudarTarefas(novasTarefas: ListaTerafas) {
    setTarefas(novasTarefas);
  }

  return (
    <div
      className={`
      flex flex-col justify-center items-center
      bg-gray-300
      h-screen
    `}
    >
      <Lista tarefas={tarefas} mudou={mudarTarefas} />
    </div>
  );
}
