// import react from "react";
import { useContext } from "react";
import { UserContext } from "../../context";
import Link from "next/link";
import Router from "next/router";
function Navbar() {
  const [state, setState] = useContext(UserContext);
  const logout = () => {
    window.localStorage.removeItem("auth");
    setState(null);
    Router.push("/");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent me-5">
      <div className="container-fluid">
        <Link href="/">
        <a className="navbar-brand offset-1">
          Aidszanium
        </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse offset-7" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link active" aria-current="page">
                  Home
                </a>
              </Link>
            </li>
            {state !== null ? (
              <>
                <li className="nav-item">
                  <Link href="/game1">
                    <a className="nav-link">Game1</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/game2">
                    <a className="nav-link">Game2</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={logout}>
                    Log out
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link href="/login">
                    <a className="nav-link">Login</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/signup">
                    <a className="nav-link">Register</a>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
