import AllCalc from "./AllCalc";

function Sidebar() {
  return (
    <aside className=" px-5 py-5 w-full md:w-3/12 md:flex-col md:flex-wrap">
      <div className=" w-full md:flex-col md:flex-wrap bg-gray-50 shadow-lg shadow-slate-200 rounded-md">
        <AllCalc />
      </div>
    </aside>
  );
}

export default Sidebar;
