import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Form,
  Input,
  Button,
} from "reactstrap";

const NavbarLayout = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">connectX</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <NavItem>
            <NavLink href="/feeds">Feeds</NavLink>
          </NavItem>
          <NavItem className="form-inline">
            <Form class="my-2 my-lg-0">
              <Button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </Button>
              <Input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </Form>
          </NavItem>
          <UncontrolledDropdown className="ml-auto" nav inNavbar>
            <DropdownToggle nav caret>
              Account
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Profile</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarLayout;
