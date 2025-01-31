"use client";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import OptPlocastog from "../_components/kalkulatori/OptPlocastog";
import Sidebar from "../_components/Sidebar";
import OptPlocastiText from "../_components/textovi/OptPlocastiText";

export default function page() {
  return (
    <div className="md:py-14 py-6">
      <h1 className="px-5 text-3xl font-bold text-gray-700 mb-4 text-center">
        Optimizacija sečenja pločastog materijala
      </h1>
      <DndProvider backend={HTML5Backend}>
        <OptPlocastog />
      </DndProvider>
      <div className="md:flex-row md:flex">
        <OptPlocastiText />
        <Sidebar />
      </div>
    </div>
  );
}
