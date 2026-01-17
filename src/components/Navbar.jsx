// components/Navbar.jsx
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import {
  ChevronLeft,
  ChevronDown,
  ShoppingCart,
  Search,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [submenuStack, setSubmenuStack] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = (menu) => {
    if (timeoutId) clearTimeout(timeoutId);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setActiveDropdown(null);
    }, 200); // ← 200ms delay
    setTimeoutId(id);
  };
  const searchRef = useRef(null);

  const openSubmenu = (menu) => {
    setSubmenuStack((prev) => [...prev, menu]);
  };

  const goBack = () => {
    setSubmenuStack((prev) => prev.slice(0, -1));
  };

  const currentMenu = submenuStack[submenuStack.length - 1] || null;

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen]);

  // Close search on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Sample data for submenus
  const mapsByPlace = [
    "ORTOFOTO",
    "MDT",
    "CURVAS DE NÍVEL",
    "MAPA TEMÁTICO",
    "SHAPEFILE/GEODATABASE",
  ];
  const mapsByTheme = [
    "GEOLOGY MAPS",
    "VINTAGE TOPOGRAPHIC",
    "IMAGERY SERIES",
    "DISTILLERIES",
    "LIGHTHOUSE MAPS",
    "SIMPLE SERIES",
    "LIDAR SERIES",
    "MODERN TOPOGRAPHIC",
    "FLAG SERIES",
    "ISLAND AND COASTAL MAPS",
    "HIKING TRAILS",
  ];

  return (
    <>
      {/* === MAIN NAVBAR === */}
      <nav className="sticky top-0 bg-[#17233a] text-white select-none relative z-50 ">
        <div className="border-b border-slate-800/60">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="relative flex items-center justify-between h-20 md:h-24">
              <Link to={"/"}>
                <div className="pointer-events-none">
                  <div className="text-21xl sm:text-2xl md:text-2xl font-black tracking-tight whitespace-nowrap">
                    <span>Topo</span> <span>GeoCenter</span>
                  </div>
                </div>
              </Link>
              {/* LEFT - Desktop menu */}
              <div className="hidden lg:flex items-center gap-7 xl:gap-10 text-sm uppercase font-semibold tracking-wide">
                <Link
                  to={"/"}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Início
                </Link>
                {/* MAPS BY PLACE - with dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("place")}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link to={"/biblioteca_de_geodados"}>
                    <button className="flex items-center gap-1 hover:text-cyan-300 transition-colors">
                      BIBLIOTECA DE GEODADOS
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          activeDropdown === "place" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </Link>

                  {activeDropdown === "place" && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-[#17233a] border border-slate-700 rounded-md shadow-xl py-3 z-50">
                      {mapsByPlace.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block px-5 py-2.5 text-sm hover:bg-slate-800 hover:text-cyan-300 transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                {/* MAPS BY THEME - with dropdown 
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("theme")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 hover:text-cyan-300 transition-colors">
                    MAPS BY THEME
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        activeDropdown === "theme" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {activeDropdown === "theme" && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-[#17233a] border border-slate-700 rounded-md shadow-xl py-3 z-50">
                      <div className="px-5 pb-2 border-b border-slate-600 mb-1">
                        <span className="text-xs uppercase tracking-wider text-slate-400">
                          THEMES
                        </span>
                      </div>
                      {mapsByTheme.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block px-5 py-2.5 text-sm hover:bg-slate-800 hover:text-cyan-300 transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                */}
                <Link
                  to={"/services"}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Serivços
                </Link>
                <Link
                  to={"/academia_digital"}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Academia Digital
                </Link>
                <Link
                  to={"/contacto"}
                  className="hover:text-cyan-300 transition-colors"
                >
                  contacto
                </Link>
              </div>

              {/* RIGHT - Icons */}
              <div className="flex items-center md:gap-6 lg:gap-8">
                <button className="p-1.5 relative hover:text-cyan-300 transition-colors">
                  <ShoppingCart size={22} strokeWidth={1.8} />
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center px-1">
                    0
                  </span>
                </button>

                {/* Search button */}
                <button
                  className="p-1.5 hover:text-cyan-300 transition-colors"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                >
                  <Search size={22} strokeWidth={1.8} />
                </button>

                {/* Hamburger */}
                <button
                  className="lg:hidden focus:outline-none"
                  onClick={() => setIsSidebarOpen(true)}
                  aria-label="Open menu"
                >
                  <Menu size={26} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* === SEARCH PANEL - slides down from top === */}
        <div
          className={`fixed left-0 right-0 top-0 bg-[#17233a] border-b border-slate-700 z-40 transform transition-all duration-300 ease-in-out ${
            isSearchOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }`}
          ref={searchRef}
        >
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search maps, places, themes..."
                className="w-full bg-[#0f172a] text-white border border-slate-600 rounded-lg pl-12 pr-5 py-4 text-lg focus:outline-none focus:border-cyan-400 transition-colors"
                autoFocus={isSearchOpen}
              />
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={24}
              />
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                onClick={() => setIsSearchOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            {/* Optional: quick suggestions or recent searches */}
            <div className="mt-6 text-sm text-slate-400">
              Popular searches: World Map, Geology, Vintage Topographic...
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar (your existing code unchanged) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => {
            setIsSidebarOpen(false);
            setSubmenuStack([]);
          }}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#3385FF] border-l border-slate-700 z-50 overflow-hidden lg:hidden transition-transform duration-400 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-slate-700">
          {submenuStack.length > 0 ? (
            <button
              onClick={goBack}
              className="flex items-center gap-3 text-lg font-semibold hover:text-cyan-300 transition-colors"
            >
              <ChevronLeft size={24} />
              Back
            </button>
          ) : (
            <div className="text-xl font-bold">Menu</div>
          )}
          <button
            onClick={() => {
              setIsSidebarOpen(false);
              setSubmenuStack([]);
            }}
            className="p-2 hover:text-cyan-300 transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        {/* Sliding panels */}
        <div className="relative h-[calc(100%-80px)]">
          {/* Main menu */}
          <div
            className={`absolute inset-0 transition-transform duration-400 ease-in-out
              ${currentMenu ? "-translate-x-full" : "translate-x-0"}`}
          >
            <div className="h-full overflow-y-auto py-6 px-5 space-y-1 text-base font-medium">
              <a
                href="#"
                className="block py-3 px-4 rounded-md hover:bg-slate-800/50 hover:text-cyan-300 transition"
                onClick={() => setIsSidebarOpen(false)}
              >
                Home
              </a>

              <button
                onClick={() => openSubmenu("place")}
                className="w-full text-left py-3 px-4 rounded-md hover:bg-slate-800/50 hover:text-cyan-300 transition flex justify-between items-center"
              >
                Maps by Place
                <ChevronLeft size={20} className="rotate-180" />
              </button>

              <button
                onClick={() => openSubmenu("theme")}
                className="w-full text-left py-3 px-4 rounded-md hover:bg-slate-800/50 hover:text-cyan-300 transition flex justify-between items-center"
              >
                Maps by Theme
                <ChevronLeft size={20} className="rotate-180" />
              </button>

              <a
                href="#"
                className="block py-3 px-4 rounded-md hover:bg-slate-800/50 hover:text-cyan-300 transition"
                onClick={() => setIsSidebarOpen(false)}
              >
                Reviews
              </a>
              <a
                href="#"
                className="block py-3 px-4 rounded-md hover:bg-slate-800/50 hover:text-cyan-300 transition"
                onClick={() => setIsSidebarOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#"
                className="block py-3 px-4 rounded-md hover:bg-slate-800/50 hover:text-cyan-300 transition"
                onClick={() => setIsSidebarOpen(false)}
              >
                About
              </a>
              <a
                href="#"
                className="block py-3 px-4 rounded-md hover:bg-slate-800/50 hover:text-cyan-300 transition"
                onClick={() => setIsSidebarOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>

          {/* Maps by Place */}
          <div
            className={`absolute inset-0 transition-transform duration-400 ease-in-out
              ${
                currentMenu === "place" ? "translate-x-0" : "translate-x-full"
              }`}
          >
            <div className="h-full overflow-y-auto py-6 px-5 space-y-1">
              {mapsByPlace.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block py-3 px-6 rounded-md hover:bg-slate-800/50 hover:text-cyan-300 transition"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Maps by Theme */}
          <div
            className={`absolute inset-0 transition-transform duration-400 ease-in-out
              ${
                currentMenu === "theme" ? "translate-x-0" : "translate-x-full"
              }`}
          >
            <div className="h-full overflow-y-auto py-6 px-5 space-y-1">
              {mapsByTheme.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block py-3 px-6 rounded-md hover:bg-slate-800/50 hover:text-cyan-300 transition text-sm"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
