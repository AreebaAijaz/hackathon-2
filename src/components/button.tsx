import { BiColor } from "react-icons/bi";

interface Iprops {
  text: string;
  color: string;
}

export default function Button({ text, color }: Iprops) {
  return (
    <div>
      <button className={`hero-btn px-8 py-4 text-body-md ${color}`}>
        {text}
      </button>
    </div>
  );
}
