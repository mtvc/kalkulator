import AllCalc from "./AllCalc";

function Sidebar() {
  return (
    <div className="md:mx-5 px-5 py-5 w-full md:w-3/12 md:flex-col md:flex-wrap bg-gray-50 shadow-lg shadow-slate-200 rounded-md">
      <AllCalc />
    </div>
  );
}

export default Sidebar;
