import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../contexts/userContext";
import logout from "../services/logout";
import logo from "../assets/img/logokake.svg";
import { Button } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import styles from './Nav.module.css'

const Nav = () => {
  const { user, setUser } = useUser();

  const renderInfo = () => {
    if (user) {
      return <p className="nav-color">Bienvenido: {user.firstName} </p>;
    }
  };

  const logOut = async () => {
    const { success } = await logout();
    if (success) setUser(null);
    else window.alert("Error. No se pude desloguear");
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light  bg-nav-new">
        <div className="container-fluid">
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
            <Link to="/">
              <img className="logo" src={logo} alt=""></img>
            </Link>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <Link
                  to="/"
                  className="nav-link navbar-link"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>


              {!user &&
              <li>
              <Link
                to="/login"
                className="nav-link navbar-link nav-color"
                aria-current="page"
                href="#"
              >
                Loging
              </Link>
            </li>
              }

              { !user &&
              <li>
              <Link
                to="/register"
                className="nav-link navbar-link "
                aria-current="page"
                href="#"
              >
                Registro
              </Link>
              </li>
              }


              <li className="nav-link navbar-link">{renderInfo()}</li>

              {user && user.rol === "administradorGeneral" ? (
                <li className="nav-link navbar-link">
                  <Button
                    variant="contained"
                    disableElevation
                    className={styles.btn_navbar}
                    size="small"
                    startIcon={<FileUploadIcon />}
                    href="/addProduct"
                  >
                    Add products
                  </Button>
                </li>
              ) : null}

              {(user && user.rol === "administrador") || (user && user.rol === "administradorGeneral")  ? (
                <li className="nav-link navbar-link">
                  <Button
                    variant="contained"
                    disableElevation
                    className={styles.btn_navbar}
                    size="small"
                    startIcon={<FileUploadIcon />}
                    href="/productList/"
                  >
                    Ver Stock
                  </Button>
                </li>
              ) : null}

              <li className="nav-link navbar-link">
                {user && (
                  <Button
                    variant="outlined"
                    className={styles.btn_salir}
                    size="small"
                    onClick={logOut}
                  >
                    Salir
                  </Button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
