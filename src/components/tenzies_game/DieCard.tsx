interface DieProps {
  id: string;
  value: number;
  isHeld: boolean;
  onClick: (id: string) => void;
}

const DieCard = ({ id, value, isHeld, onClick }: DieProps) => {
  return (
    <button
      onClick={() => onClick(id)}
      aria-pressed={isHeld}
      aria-label={`Die with value ${value}, ${isHeld ? "held" : "not held"}`}
      className={`w-12 md:w-16 h-12 md:h-16 flex items-center justify-center rounded-md border-2 text-xl font-bold cursor-pointer select-none
        ${
          isHeld ? "bg-green-400 border-green-500" : "bg-white border-gray-300"
        }`}
    >
      {value}
    </button>
  );
};

export default DieCard;
