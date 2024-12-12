"use client";
import { useRouter } from "next/navigation";

function ButtonCalc({ children, className, path, id }) {
  const router = useRouter();

  const handleClick = () => {
    if (path) {
      router.push(path);
    }
  };

  return (
    <button
      id={id}
      type="button"
      onClick={handleClick}
      className={`rounded-full hover:bg-opacity-80 ${className || ""}`}
    >
      {children}
    </button>
  );
}

export default ButtonCalc;
