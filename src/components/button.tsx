import { BiColor } from "react-icons/bi";

interface Iprops {
  text: string;
  color: string;
}

export default function Button({ text, color }: Iprops) {
  return (
    <div className="">
      <button className={`px-8 py-4 text-body-md rounded whitespace-nowrap w-auto flex-shrink-0 ${color}`}>
        {text}
      </button>
    </div>
  );
}
