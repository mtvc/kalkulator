import AllCalc from "./_components/AllCalc";

function NotFound() {
  return (
    <div className="text-center space-y-6 mt-4 py-16">
      <h1 className="text-3xl font-semibold">
        Stranica koju tražite ne postoji 💔
      </h1>
      <AllCalc />
    </div>
  );
}

export default NotFound;
