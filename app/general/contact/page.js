export const runtime = "edge";

export const metadata = {
  title: {
    default: "Kontakt podaci - kalkulatori.online",
  },
  description: "Slobodno nas možete kontaktirati.",
};

function page() {
  return (
    <div className="px-4 py-12">
      <h2 className="">www.kalkulatori.online</h2>
      <h3 className="">Možete nas kontaktirati na:</h3>
      <p>info(at)kalkulatori.online</p>
    </div>
  );
}

export default page;
