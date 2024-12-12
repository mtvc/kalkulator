"use client";
import Logo from "./Logo";
import Menu from "./Menu";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-800 bg-opacity-90 shadow-lg z-50 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">
          <Logo />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Menu style={"flex gap-4"} />
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-40 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={() => setIsMenuOpen(false)}
          >
            &times;
          </button>
          <nav className="space-y-6 text-center text-white text-2xl">
            <Menu style={"flex-row space-y-8"} />
          </nav>
        </div>
      )}
    </header>
  );
}

// function Header() {
//   return (
//     <header className="w-full bg-gray-800 text-white">
//       <div className="max-w-screen- mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Logo />
//         </div>

//         {/* Menu */}
//         <nav className="hidden md:flex space-x-4">
//           <Menu />
//         </nav>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             className="text-white hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
//             aria-label="Open menu"
//           >
//             {/* Mobile menu icon */}
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }

export default Header;
