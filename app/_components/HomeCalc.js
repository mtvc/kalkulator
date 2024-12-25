import ButtonCalc from "./ButtonCalc";
import { calculators as buttons } from "../_lib/Api";

export default function HomeCalc({ category }) {
  return (
    <div className="px-5 py-5 flex-row flex-wrap md:flex-row flex gap-5">
      {buttons
        ?.filter((button) => button.category?.includes(category))
        .map((button) => (
          <ButtonCalc
            key={button.id}
            id={button.id}
            path={button.path}
            className={button.className}
          >
            {button.label}
          </ButtonCalc>
        ))}
    </div>
  );
}
