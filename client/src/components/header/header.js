import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { makeStyles, TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";

import profileImage from "../assets/profile.jpg";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: 400,
  },
  box: {
    width: "100%",
  },
  searchInput: {
    height: "34px",
    width: "300px",
    paddingLeft: "10px",
    padding: "4px",
    borderRadius: "12px",
    backgroundColor: "var(--third-color)",
  },
  logo: {
    marginLeft: "20px",
    color: "var(--fourth-color)",
    fontFamily: "karla",
    fontSize: "25px",
  },
  vertical: {
    borderLeft: "2px solid var(--first-color)",
    height: "35px",
    left: "50%",
  },
  rightMenu: {
    display: "flex",
    columnGap: "15px",
    alignItems: "center",
    color: "var(--first-color)",
  },
  profileImage: {
    height: "43px",
    width: "43px",
    objectFit: "cover",
    border: "1px solid var(--fourth-color)",
    borderRadius: "10px",
  },
  userName: {
    color: "var(--first-color)",
    fontFamily: "karla",
    fontSize: "18px",
  },
  settingsMenu: {
    display: "flex",
    alignItems: "center",
    columnGap: "5px",
  },
  navbar: {
    marginTop: "-10px",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar bg="white" expand="lg" fixed="top" className={classes.navbar}>
        <Container fluid>
          <Navbar.Brand href="#">
            <span className={classes.logo}>Ask2get</span>
          </Navbar.Brand>
          <Navbar.Brand>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <div className={classes.box}>
                <TextField
                  placeholder="Search for something..."
                  type="search"
                  className={classes.textField}
                  margin="none"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    className: classes.searchInput,
                    endAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </Nav>
          </Navbar.Brand>
          <Navbar.Brand></Navbar.Brand>
          <Navbar.Brand></Navbar.Brand>
          <Navbar.Brand className={classes.rightMenu}>
            <NotificationsIcon style={{ fill: "var(--first-color)" }} />
            <div className={classes.vertical}></div>
            <div className={classes.settingsMenu}>
              <img
                src={profileImage}
                alt="profile"
                className={classes.profileImage}
              />
              <span className={classes.userName}>John Doe</span>
              <NavDropdown align="end" title="" className={classes.dropdownNav}>
                <NavDropdown.Item href="/my-profile">
                  My profile page
                </NavDropdown.Item>
                <NavDropdown.Item href="/user-settings">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/login">Log Out</NavDropdown.Item>
              </NavDropdown>
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
