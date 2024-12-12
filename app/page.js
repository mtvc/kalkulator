import AllCalc from "./_components/AllCalc";
import HomeText from "./_components/textovi/HomeText";
//
export const metadata = {
  title: {
    template: " %s -Kalkulator onlajn",
    default: "Kalkulator onlajn",
  },
  description:
    "Online kalkulator - procenti, zarade, porez, registracija, cm u inče",
};

export default function Home() {
  return (
    <div className="py-12 max-w-full">
      <h1 className="text-3xl font-bold text-gray-700 mb-4 text-center">
        Kalkulatori online
      </h1>
      <div className="w-full py-5 bg-gray-200 rounded">
        <AllCalc />
      </div>
      <HomeText />
    </div>
  );
}
