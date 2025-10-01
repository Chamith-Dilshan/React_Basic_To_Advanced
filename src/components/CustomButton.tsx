import { twMerge } from "tailwind-merge";

interface ButtonProps {
  ref?: React.Ref<HTMLButtonElement>;
  onClick: () => void;
  children: React.ReactNode;
  containerClass?: string;
}

const CustomButton = ({
  ref,
  onClick,
  children,
  containerClass,
}: ButtonProps) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={twMerge(
        "bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-md mt-6 transition-colors ",
        containerClass
      )}
    >
      {children}
    </button>
  );
};

export default CustomButton;
