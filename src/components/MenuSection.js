import { makeStyles } from "@material-ui/core";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SettingsIcon from "@mui/icons-material/Settings";
import { NavLink } from "react-router-dom";
import React from "react";

const useStyles = makeStyles((theme) => ({
  menuSection: {
    margin: "8px",
    padding: "10px",
    backgroundColor: "white",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "karla",
    color: "var(--first-color)",
  },
  optionContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingTop: "7px",
    paddingBottom: "7px",
    "& :nth-child(2)": {
      marginLeft: "6px",
      textDecoration: "none",
      color: "var(--first-color)",
    },
  },

  activeOption: {
    marginLeft: "6px",
    textDecoration: "none",
    color: "var(--fourth-color)",
    '&:hover':{
      color:'var(--fourth-color)',
    }
  },
  link: {
    marginLeft: "6px",
    textDecoration: "none",
    color: "var(--second-color)",
    '&:hover':{
      color:'var(--fourth-color)',
    }
  },
}));

const MenuSection = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.menuSection}>
        <h4>Menu</h4>
        <div
          className={
             classes.optionContainer
          }
        >
          <NavLink
            className={({ isActive }) => 
              !isActive ? 
                classes.link : classes.activeOption
            }
            to="/"
          >
          <HomeIcon />
            Home
          </NavLink>
        </div>
        <div className={classes.optionContainer}>
          <NavLink
            className={({ isActive }) =>
              !isActive ? classes.link : classes.activelink
            }
            to="/my-profile"
          >
          <PersonIcon />
            My Profile
          </NavLink>
        </div>
        <div className={classes.optionContainer}>
          <NavLink
            className={({ isActive }) =>
              !isActive ? classes.link : classes.activelink
            }
            to="/saved-posts"
          >
          <WorkspacePremiumIcon />
            Saved Posts
          </NavLink>
        </div>
        <div className={classes.optionContainer}>
          <NavLink
            className={({ isActive }) =>
              !isActive ? classes.link : classes.activelink
            }
            to="/settings"
          >
          <SettingsIcon />

            Settings
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default MenuSection;
