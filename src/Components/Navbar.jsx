import * as React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky top-0 z-50 opacity-80 bg-slate-700 text-white border-b-2 border-cyan-600">
      <nav className="w-11/12 mx-auto py-2.5 flex items-start justify-between">
        <Link to="/" className="text-2xl font-bold hover:text-sky-600">
        <i class="fas fa-code"></i> DevConnector
        </Link>
        <div className="flex gap-10 text-xl font-bolder">
          <Link to="/profiles" className=" hover:text-sky-300">
            Developers
          </Link>
          <Link to="/register" className="hover:text-sky-300">
            Register
          </Link>
          <Link to="/login" className="hover:text-sky-300">
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;