import React from "react";
import NewsItem from "./NewsItem";

function Navbar({ setCategory }) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">Haber Dergisi</span>
        </a>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div
                className="nav-link active"
                // onClick={() => setCategory(["lifestyle"])}
                aria-current="page"
              >
                Yaşam Tarzı
              </div>
            </li>
            <li className="nav-item active">
              <div
                className="nav-link"
                // onClick={() => setCategory("politics")}
                aria-current="page"
              >
                Siyaset
              </div>
            </li>
            <li className="nav-item active">
              <div
                className="nav-link"
                // onClick={() => setCategory("sports")}
                aria-current="page"
              >
                Spor
              </div>
            </li>
            <li className="nav-item active">
              <div
                className="nav-link"
                // onClick={() => {
                //   setCategory("environment");
                // }}
                aria-current="page"
              >
                Çevre
              </div>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
