import HeroArea from "./_components/HeroArea";
import HomeText from "./_components/textovi/HomeText";

export const metadata = {
  title: {
    default: "Online kalkulatori - Besplatni online alati za računanje",
  },
  description:
    "Kalkulatori i konverteri za finansije, sport, matematiku, fiziku. Aplikacije za brzo izračunavanje.",
};

export default function Home() {
  return (
    <div className="py-12 max-w-full">
      <h1 className="text-3xl font-extrabold uppercase text-gray-700 mb-4 text-center">
        Online alati za računanje.
      </h1>

      <div className="w-full py-5 rounded">
        <HeroArea />
        <HomeText />
      </div>
    </div>
  );
}
