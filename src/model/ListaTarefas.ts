import Tarefa from "./Tarefa";
import TipoFiltro from "./TipoFiltro";

export default class ListaTerafas {
  #todas: Tarefa[];
  #filtroUtilizado: TipoFiltro;

  constructor(todas: Tarefa[], filtroUtilizado = TipoFiltro.NENHUM) {
    this.#todas = todas;
    this.#filtroUtilizado = filtroUtilizado ?? TipoFiltro.NENHUM;
  }

  get itens() {
    return this.aplicarFiltroEm(this.#todas);
  }

  get quantidade() {
    return this.itens.length;
  }

  get filtroUtilizado() {
    return this.#filtroUtilizado;
  }

  adicionarTarefa(novaTarefa: Tarefa): ListaTerafas {
    const todas = [...this.#todas];
    todas.push(novaTarefa);
    return new ListaTerafas(todas, this.filtroUtilizado);
  }

  modificarTarefa(tarefaModificada: Tarefa): ListaTerafas {
    const todas = this.#todas.map((tarefa) => {
      return tarefa.id === tarefaModificada.id ? tarefaModificada : tarefa;
    });
    return new ListaTerafas(todas, this.filtroUtilizado);
  }

  excluirConcluidas(): ListaTerafas {
    const somenteAtivas = this.#todas.filter((tarefa) => tarefa.ativa);
    return new ListaTerafas(somenteAtivas, TipoFiltro.NENHUM);
  }

  filtrarAtivas(): ListaTerafas {
    if (!this.exibindoSomenteAtivas()) {
      return new ListaTerafas(this.#todas, TipoFiltro.ATIVAS);
    } else {
      this;
    }
  }

  filtrarConcluidas(): ListaTerafas {
    if (!this.exibindoSomenteConcluidas()) {
      return new ListaTerafas(this.#todas, TipoFiltro.CONCLUIDAS);
    } else {
      this;
    }
  }

  removerFiltro(): ListaTerafas {
    if (!this.exibindoTodas()) {
      return new ListaTerafas(this.#todas, TipoFiltro.NENHUM);
    } else {
      return this;
    }
  }

  exibindoTodas(): boolean {
    return this.#filtroUtilizado === TipoFiltro.NENHUM;
  }

  exibindoSomenteAtivas(): boolean {
    return this.#filtroUtilizado === TipoFiltro.ATIVAS;
  }

  exibindoSomenteConcluidas(): boolean {
    return this.#filtroUtilizado === TipoFiltro.CONCLUIDAS;
  }

  private aplicarFiltroEm(tarefas: Tarefa[]): Tarefa[] {
    if (this.exibindoSomenteAtivas()) {
      return this.aplicarFiltroAtivas(tarefas);
    } else if (this.exibindoSomenteConcluidas()) {
      return this.aplicarFiltroConcluidas(tarefas);
    } else {
      return [...tarefas];
    }
  }

  private aplicarFiltroAtivas(tarefas: Tarefa[]): Tarefa[] {
    return tarefas.filter((tarefa) => tarefa.ativa);
  }

  private aplicarFiltroConcluidas(tarefas: Tarefa[]): Tarefa[] {
    return tarefas.filter((tarefa) => tarefa.concluida);
  }
}
