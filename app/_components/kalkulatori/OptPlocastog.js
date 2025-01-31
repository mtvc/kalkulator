"use client";

import { useState, memo } from "react";
import { useDrag, useDrop } from "react-dnd";

function OptPlocastog() {
  const [board, setBoard] = useState({ width: "", height: "" });
  const [cuttingWidth, setCuttingWidth] = useState(""); // Cutting tool width
  const [rectangles, setRectangles] = useState([
    { width: "", height: "", name: "", quantity: 1 }, // Updated state structure
  ]);
  const [layout, setLayout] = useState([]);

  const addRectangle = () => {
    setRectangles([
      ...rectangles,
      { width: "", height: "", name: "", quantity: 1 },
    ]); // Initialize new rectangle with default values
  };

  const removeRectangle = (index) => {
    if (rectangles.length > 1) {
      setRectangles(rectangles.filter((_, i) => i !== index));
    }
  };

  const handleRectangleChange = (index, key, value) => {
    const updatedRectangles = [...rectangles];
    updatedRectangles[index][key] = value;
    setRectangles(updatedRectangles);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/cut", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ board, cuttingWidth, rectangles }),
    });

    const data = await response.json();

    if (data.layout) {
      setLayout(data.layout); // Store layout for visualization
    } else {
      console.log(data.error); // Handle errors
    }
  };

  // Memoize the Rectangle component for performance
  const Rectangle = memo(({ rect, board, index, setRectangles }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: "RECTANGLE",
      item: { id: index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }));

    const [{ isOver }, drop] = useDrop(() => ({
      accept: "RECTANGLE",
      drop: (item) => {
        const newRectangles = [...rectangles];
        const draggedRectangle = newRectangles[item.id];

        let newX = rect.x + 10;
        let newY = rect.y;

        if (newX + draggedRectangle.width > board.width) {
          newX = 0;
          newY += rect.height + 10;
        }

        draggedRectangle.x = newX;
        draggedRectangle.y = newY;

        // Update the state with the new rectangle positions
        setRectangles(newRectangles);

        // Send updated layout to the backend
        sendUpdatedLayout(newRectangles);
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }));

    const sendUpdatedLayout = async (newRectangles) => {
      const response = await fetch("/api/update-layout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          board,
          cuttingWidth: 10, // Adjust if needed
          rectangles: newRectangles,
        }),
      });

      const data = await response.json();
      console.log(data); // Process the response as needed
    };

    return (
      <div
        ref={(node) => drag(drop(node))}
        style={{
          position: "absolute",
          top: `${(rect.y / board.height) * 100}%`,
          left: `${(rect.x / board.width) * 100}%`,
          width: `${(rect.width / board.width) * 100}%`,
          height: `${(rect.height / board.height) * 100}%`,
          backgroundColor: "rgba(0, 128, 0, 0.5)",
          border: "1px solid #008000",
          transform: rect.rotation === 90 ? "rotate(90deg)" : "none",
          transformOrigin: "top left",
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "2%",
            left: "2%",
            color: "white",
            fontSize: "14px",
          }}
        >
          {rect.width} x {rect.height} {rect.name}
        </span>
      </div>
    );
  });

  return (
    <div className="p-3 md:p-6 md:rounded shadow-md w-full align-middle bg-gradient-to-br from-gray-600 via-gray-500 to-gray-600">
      <div className="flex md:flex-col flex-col items-center justify-center gap-4 md:gap:3 mx-auto my-auto">
        <form onSubmit={submitForm} className="space-y-4 md:p-5">
          {/* Board Dimensions */}
          <div className="md:flex md:flex-row md:gap-5">
            <div>
              <label className="block text-xl w-full md:w-auto md:text-xl font-bold text-slate-50 py-2">
                Dimenzije ploče (mm):
              </label>
              <div className="flex space-x-2 items-center">
                <input
                  type="number"
                  placeholder="Širina"
                  value={board.width}
                  onChange={(e) =>
                    setBoard({ ...board, width: e.target.value })
                  }
                  className="md:w-36 w-1/2 px-2 md:px-3 py-2 border-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200 "
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
                <input
                  type="number"
                  placeholder="Visina"
                  value={board.height}
                  onChange={(e) =>
                    setBoard({ ...board, height: e.target.value })
                  }
                  className="md:w-36 w-1/2 px-2 md:px-3 py-2 border-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
            </div>

            {/* Cutting Tool Width */}
            <div>
              <label className="block text-xl w-full md:w-auto md:text-xl font-bold text-slate-50 py-2">
                Debljina reznog alata (mm):
              </label>
              <input
                type="number"
                placeholder="Debljina alata"
                value={cuttingWidth}
                onChange={(e) => setCuttingWidth(e.target.value)}
                className="md:w-36 w-1/2 px-2 md:px-3 py-2 border-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200 p-2"
              />
            </div>
          </div>
          {/* Rectangles List */}
          <div>
            <label className="block text-xl w-full md:w-auto md:text-xl font-bold text-slate-50 py-2">
              Delovi za sečenje (mm):
            </label>
            {rectangles.map((rect, index) => (
              <div key={index} className="flex space-x-2 my-2 items-center">
                <input
                  type="number"
                  placeholder="Širina"
                  value={rect.width}
                  onChange={(e) =>
                    handleRectangleChange(index, "width", e.target.value)
                  }
                  className="md:w-36 w-1/5 px-2 md:px-3 py-2 border-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200 p-2"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>

                <input
                  type="number"
                  placeholder="Visina"
                  value={rect.height}
                  onChange={(e) =>
                    handleRectangleChange(index, "height", e.target.value)
                  }
                  className="md:w-36 w-1/5 px-2 md:px-3 py-2 border-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200 p-2"
                />
                <input
                  type="text"
                  placeholder="Naziv (opciono)"
                  value={rect.name}
                  onChange={(e) =>
                    handleRectangleChange(index, "name", e.target.value)
                  }
                  className="md:w-36 w-2/5 px-2 md:px-3 py-2 border-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200 p-2"
                />
                <input
                  type="number"
                  placeholder="Količina"
                  value={rect.quantity}
                  onChange={(e) =>
                    handleRectangleChange(index, "quantity", e.target.value)
                  }
                  className="md:w-36 w-10 px-2 md:px-3 py-2 border-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200 p-2"
                />
                <button
                  type="button"
                  onClick={() => removeRectangle(index)}
                  className=""
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      stroke="red"
                    />
                  </svg>
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addRectangle}
              className="bg-blue-500 text-white px-3 py-2 rounded mt-2 flex gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>{" "}
              Dodaj deo za sečenje
            </button>
          </div>

          {/* Submit Button */}
          <div className="">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded flex gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
                />
              </svg>{" "}
              Optimizuj sečenje
            </button>
          </div>
        </form>

        {/* Board and Cut Visualization */}
        {layout.length > 0 && board.width != 0 && (
          <div
            className="mt-6 border border-gray-400 w-full bg-slate-300"
            style={{
              width: "100%", // Make board width responsive
              aspectRatio: `${board.width} / ${board.height}`, // Maintain aspect ratio of board
              position: "relative", // Keep the rectangles inside the board
            }}
          >
            {layout.map((rect, index) => (
              <Rectangle
                key={rect.id}
                rect={rect}
                board={board}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default OptPlocastog;
