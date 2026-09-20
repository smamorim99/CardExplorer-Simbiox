import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="flex w-full bbh-[4vh] mt-10 gap-5 justify-center items-center">
        <NavLink
          to="/search"

          className={
            ({ isActive }) =>
          isActive ? "p-2 rounded bg-blue-900/55 hover:bg-blue-900/75 font-semibold" : "p-2 rounded bg-amber-900/55 hover:bg-amber-900/75 font-semibold"
          }
        >
          Buscar Carta
        </NavLink>

        <NavLink
          to="/SeeCards"
          className={({ isActive }) =>  
          isActive ? "p-2 rounded bg-blue-900/55 hover:bg-blue-900/75 font-semibold" : "p-2 rounded bg-amber-900/55 hover:bg-amber-900/75 font-semibold"
          }
        >
          Ver Cartas
        </NavLink>
  
    </nav>
  );
}