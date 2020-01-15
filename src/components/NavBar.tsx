import * as React from "react";
import logo from '../resources/logo.svg';
export const NavBar: React.SFC = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/#">
        <img
          src= {logo}
          width="40"
          height="40"
          className="d-inline-block align-top"
          alt=""
          style={{marginRight: "10px"}}
        />
        Uride
      </a>
    </nav>
  );
};
