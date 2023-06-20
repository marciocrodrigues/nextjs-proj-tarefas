import ListaItem from "../components/lista/ListaItem";

export default function Home() {
  return (
    <div
      className={`
      flex flex-col justify-center items-center
      text-white
      bg-gradient-to-tr from-gray-600 to-gray-900
      h-screen
    `}
    >
      <ul>
        <ListaItem
          valor="Exemplo de Item #01"
          concluido={false}
          alterarStatus={() => {}}
        />
        <ListaItem
          valor="Exemplo de Item #02"
          concluido={true}
          alterarStatus={() => {}}
        />
      </ul>
    </div>
  );
}
