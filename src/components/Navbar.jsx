import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-8">
      <nav className="mx-auto w-full max-w-[1280px]">
        <div
          className="
    flex h-20 items-center justify-between
    rounded-full
    border border-black/5
    bg-white/90
    backdrop-blur-xl
    px-6
    shadow-lg
    transition-colors duration-300
    sm:h-24
    sm:px-8
    dark:bg-[#1f1f1f]/90
    dark:border-white
    dark:shadow-[0_0_4px_3px_rgba(0,0,0,0.5)]
  "
        >
          {/* Logo */}
          <NavLink
            to="/"
            onClick={closeMenu}
            className="whitespace-nowrap text-lg font-bold text-gray-900 transition-colors hover:text-accent sm:text-xl dark:text-white"
          >
            {"<Som Sokraksa />"}
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `relative pb-1 text-lg font-bold transition-colors ${
                      isActive && link.to !== "/#contact"
                        ? "text-accent after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-accent"
                        : "text-gray-800 hover:text-accent dark:text-gray-200 dark:hover:text-accent"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="
                flex items-center gap-2
                rounded-full
                bg-[#f2f2f2]
                px-3 py-2
                text-gray-800
                shadow-[0_0_4px_2px_rgba(0,0,0,0.15)]
                transition-all
                hover:scale-105
                sm:px-4
                dark:bg-[#141414]
                dark:text-white
                dark:shadow-[0_0_4px_2px_rgba(0,0,0,0.5)]
              "
            >
              <i
                className={`bi ${
                  theme === "light"
                    ? "bi-brightness-high-fill"
                    : "bi-moon-stars-fill"
                } text-lg`}
              />
              <span className="hidden font-medium sm:inline">
                {theme === "light" ? "Light" : "Dark"}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="
                flex size-11 items-center justify-center
                rounded-full
                bg-[#f2f2f2]
                text-xl
                text-gray-800
                shadow-[0_0_4px_2px_rgba(0,0,0,0.15)]
                transition-all
                hover:scale-105
                md:hidden
                dark:bg-[#141414]
                dark:text-white
                dark:shadow-[0_0_4px_2px_rgba(0,0,0,0.5)]
              "
            >
              <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            open ? "mt-3 max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul
            className="
              flex flex-col gap-1
              rounded-3xl
              bg-white
              p-4
              text-gray-800
              shadow-[0_0_4px_3px_rgba(0,0,0,0.15)]
              transition-all
              dark:bg-[#1f1f1f]
              dark:text-white
              dark:shadow-[0_0_4px_3px_rgba(0,0,0,0.5)]
            "
          >
            {links.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-lg font-bold transition-all ${
                      isActive && link.to !== "/#contact"
                        ? "bg-accent/10 text-accent"
                        : "text-gray-800 hover:bg-black/5 hover:text-accent dark:text-gray-200 dark:hover:bg-white/10 dark:hover:text-accent"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
