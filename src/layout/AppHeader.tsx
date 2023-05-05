import { Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";

export function AppHeader() {
  return (
    <Navbar fluid={true} rounded={true}>
      <NavLink to={"/"}>
        <Navbar.Brand to="/navbars">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Howdy Sollicitant!
          </span>
        </Navbar.Brand>
      </NavLink>
      <Navbar.Toggle />
      <Navbar.Collapse className={"px-12"}>
        <Navbar.Link active={false}>
          <NavLink to={"/order/1"}>Order: 1</NavLink>
        </Navbar.Link>
      </Navbar.Collapse>

      <div className="flex-1"></div>
    </Navbar>
  );
}
