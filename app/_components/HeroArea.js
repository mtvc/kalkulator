import HomeCalc from "./HomeCalc";

function HeroArea() {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row md:gap-5">
      <div className="w-full md:w-3/12 py-3 px-2 md:rounded-md bg-gradient-to-tl from-blue-400 via-blue-300 to-blue-400">
        <h3 className="text-xl font-bold px-5">Industrija</h3>
        <HomeCalc category={"industrija"} />
      </div>
      <div className="w-full md:w-3/12 py-3 px-2 md:rounded-md bg-gradient-to-tl from-green-300 via-green-200 to-green-300">
        <h3 className="text-xl font-bold px-5">Finansije</h3>
        <HomeCalc category={"finansije"} />
      </div>
      <div className="w-full md:w-3/12 py-3 px-2 md:rounded-md bg-gradient-to-tl from-purple-400 via-purple-300 to-purple-400">
        <h3 className="text-xl font-bold px-5">Sport i Zdravlje</h3>
        <HomeCalc category={"sport"} />
      </div>
      <div className="w-full md:w-3/12 py-3  px-2 md:rounded-md bg-gradient-to-tl from-yellow-300 via-yellow-200 to-yellow-300">
        <h3 className="text-xl font-bold px-5">Matematika i Fizika</h3>
        <HomeCalc category={"matematika"} />
      </div>
    </div>
  );
}

export default HeroArea;
