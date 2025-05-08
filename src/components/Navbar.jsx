import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {
  Building,
  HouseDoor,
  PersonAdd,
  PersonFill,
  PersonFillAdd,
} from "react-bootstrap-icons";
import { useUser } from "../contexts/UserContext"; // adapte le chemin si besoin

import { Link } from "react-router-dom";
import Logout from "./Lougout";

function Navbar() {
  const {user} = useUser();

  const [token] = useState(() => {
    const stored = localStorage.getItem("token");
    return stored;
  });

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent mb-2">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            GestionLogi
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active d-flex align-items-center"
                  aria-current="page"
                  to="/"
                >
                  <HouseDoor className="me-1 fs-1" /> Acceuil
                </Link>    
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link d-flex align-items-center"
                  aria-current="page"
                  to="/logement"
                >
                  <Building className="me-1 fs-1" />
                  Logements
                </Link>   
              </li>
              {user && token ? (
                <li className="nav-item">
                  <Link
                    className="nav-link d-flex align-items-center"
                    aria-current="page"
                    to="/addLogement"
                  >
                    <Building className="me-1 fs-1" />
                    Ajouter logement
                  </Link>
                </li>
              ) : null}
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {user && token ? (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      aria-current="page"
                      to={`/userPage/${user.id}`}
                    >
                      <Button
                        variant="dark"
                        size="sm"
                        className="d-flex align-items-center rounded-5 px-4"
                      >
                        <PersonFill className="me-1" />
                        {user.name + " " + user.lastName}
                      </Button>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      aria-current="page"
                      to="#"
                    >
                      <Logout />
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/signup">
                      <Button
                        variant="dark"
                        size="sm"
                        className="d-flex align-items-center rounded-5 px-4"
                      >
                        <PersonAdd className="me-1" />
                        S'inscrire
                      </Button>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/login">
                      <Button
                        variant="light"
                        size="sm"
                        className="d-flex align-items-center rounded-5 px-4"
                      >
                        <PersonFillAdd className="me-1" />
                        Se connecter
                      </Button>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
