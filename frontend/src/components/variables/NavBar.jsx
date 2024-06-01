import React from "react";
import { FaMoon, FaSun, FaUserCircle, FaSearch } from "react-icons/fa";
import { Button, Offcanvas } from "react-bootstrap";

const Navbar = () => {
  const [colorMode, setColorMode] = React.useState("dark");
  const toggleColorMode = () => {
    setColorMode(colorMode === "dark" ? "light" : "dark");
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-white');
  };
  const handleLogout = () => {
    alert("You have been successfully logged out.");
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark py-4 sticky-top`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#home" style={{fontSize: 24, fontWeight: "bold"}}>Visualisation</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <form className="d-flex me-auto w-75">
            <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
            <button className="btn btn-outline-light" type="submit"><FaSearch /></button>
          </form>
          <ul className="navbar-nav ml-auto me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="btn btn-outline-light me-2 mx-2" onClick={toggleColorMode}>
                {colorMode === "light" ? <FaMoon /> : <FaSun />}
              </button>
            </li>
            <li className="nav-item dropdown mx-3">
              <button className="btn btn-outline-light dropdown-toggle" id="navbarDropdown"  data-bs-toggle="dropdown" aria-expanded="false">
                <FaUserCircle />
              </button>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#profile">Profile</a></li>
                <li><a className="dropdown-item" href="/Settings">Settings</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
              </ul>
            </li>
            <li className="nav-item">
                <Button className="btn bg-dark btn-outline-light ms-2 hover:bg-white" onClick={handleShow}>
                <span className="navbar-toggler-icon"></span>
                </Button>
              </li>
          </ul>
        </div>
      </div>
    </nav>
    <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Variables</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="list-group">
  <a href="/Likelihood" className="list-group-item list-group-item-action rounded" aria-current="true">
    Likelihood Chart</a>
    <br/>
  <a href="/Intensity" className="list-group-item list-group-item-action rounded">Intensity</a>
  <br/>
  <a href="/Country" className="list-group-item list-group-item-action rounded">Country</a>
  <br/>
  <a href="/Region" className="list-group-item list-group-item-action rounded">Region</a>
</div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navbar;
