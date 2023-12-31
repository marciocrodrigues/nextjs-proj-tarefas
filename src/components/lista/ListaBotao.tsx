import { ReactNode } from "react";

interface ListaBotaoProps {
  selecionado?: boolean;
  className?: string;
  children: ReactNode;
  onClick: (event: any) => void;
}

export default function ListaBotao(props: ListaBotaoProps) {
  const borda = props.selecionado ? "border-b-4 border-purple-400" : "";
  return (
    <button
      className={`
        text-gray-500 font-semibold hover:text-black
        focus:outline-none
        ${borda}
        ${props.className}
      `}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
