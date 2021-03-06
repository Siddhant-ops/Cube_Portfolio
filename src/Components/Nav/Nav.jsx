import React from "react";
import "bootstrap/dist/js/bootstrap.bundle";

const Nav = () => {
  return (
    <nav
      class="navbar navbar-expand-lg p-4 navbar-dark"
      style={{ background: "#0D0D0D" }}
    >
      <span
        class="navbar-brand ml-3 font-weight-bold"
        style={{ fontSize: "1em" }}
      >
        <a id="nb">I.Code</a>
      </span>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar-collapse-id"
        aria-controls="navbar-collapse-id"
        aria-expanded="true"
        style={{ border: 0 }}
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbar-collapse-id"
      >
        <ul class="navbar-nav p-2">
          <li class="nav-item">
            <a class="nav-link hvr-float-shadow" href="#h">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link hvr-float-shadow" href="#mydeeds">
              My Deeds
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link hvr-float-shadow" href="#myskills">
              My Skills
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link hvr-float-shadow" href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
