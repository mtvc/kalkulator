import Bmi from "../_components/kalkulatori/Bmi";
import Sidebar from "../_components/Sidebar";
import BmiText from "../_components/textovi/BmiText";

export const metadata = {
  title: {
    default: "Kalkulator indeksa telesne mase - BMI",
    description:
      "Kalkulator indeksa telesne mase (BMI) sa klasifikacijom SZO. Namenjen deci i odraslima.",
  },
};

function page() {
  return (
    <div className="py-14">
      <h1 className="px-5 text-3xl font-semibold text-gray-700 mb-4 text-center">
        Kalkulator indeksa telesne mase - Body Mass Index (BMI)
      </h1>
      <Bmi />
      <div className="md:flex-row md:flex">
        <BmiText />
        <Sidebar />
      </div>
    </div>
  );
}

export default page;
