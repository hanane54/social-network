import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const useStyles = makeStyles((theme) => ({
    signup: {
        background: "var(--third-color)",
        height: "100%",
        width: "100%",
        marginTop: "-3%"


    },
    welcome: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "40px",
        color: "var(--first-color)"

    },
    logo: {
        backgroundColor: "var(--fourth-color)",
        borderRadius: "12px",
        fontSize: "30px",
        color: "#FFFFFF",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        padding: "6px",
        // fontFamily:"Ubuntu"




    },
    container: {
        marginTop: "2%",
        margin: "auto",
        backgroundColor: "var(--first-color)",
        borderRadius: "30px",
        textAlign: "center",
        width: "50%",
        height: "50%",
        padding: "4%",
        paddingBottom: "5%",
        paddingTop: "2%",

    },
    txt: {
        marginLeft: "-20%",
        color: "var(--third-color)",
        fontWeight: "550",
        fontFamily: "Calibri",
        fontSize: "45px",

    },
    point: {
        color: "var(--fourth-color)",
        fontSize: "50px"
    },
    question: {
        marginLeft: "-57%",
        marginTop: "-3%",
        color: "var(--third-color)",




    },
    login: {
        textDecoration: "none",
        color: "var(--fourth-color)",
        fontWeight: "bold",
        fontSize: "18px",
        '&:hover': {
            color: "var(--fourth-color)",


        }
    },
    form: {

        marginTop: "5%"

    },
    icon: {
        height: "1.5rem",
        width: "1.5rem",
        color: "var(--fourth-color)",

        padding: "4px",


    },
    div_input: {
        padding: "10px",
        marginLeft: "5%",


    },
    input: {
        backgroundColor: "var(--third-color)",
        display: "block",
        margin: "auto",
        borderRadius: "40px",
        border: "1px",
        width: "100%",
        paddingTop: "9px",
        paddingBottom: "9px",
        paddingLeft: "25px",
        '&:focus': {
            outline: "none",
            border: "1px solid var(--fourth-color)"
        },
        color: "var(--first-color)",


    },
    btn1: {
        color: "var(--third-color)",
        backgroundColor: "var(--fourth-color)",
        borderRadius: "23px",
        border: "1px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        width: "25%",
        padding: "5px",
        fontFamily: "Calibri",
        fontSize: "20px",
        marginRight: "4%",
        marginTop: "7%",
        fontWeight: "570"
    },
    btn2: {
        color: "var(--first-color)",
        backgroundColor: "var(--third-color)",
        borderRadius: "23px",
        border: "1px",
        // boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        width: "25%",
        padding: "5px",
        fontFamily: "Calibri",
        fontSize: "20px",
        marginTop: "7%"



    },

}));
function Register() {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("");
    const [password2, setPassword2]= useState("");

    const nameHandler = (event) => {
        setName(event.target.value);
    }

    const emailHandler = (event) => {
        setEmail(event.target.value);
    }

    const passwordHandler = (event) => {
        setEmail(event.target.value);
    }

    const password2Handler=(event)=>{
        setPassword2(event.target.value);
    }

    return (
        <div className={classes.signup}>
            <div className={classes.welcome}>
                Welcome to <span className={classes.logo}>Ask2get</span>
            </div>
            <div className={classes.container}>
                <h1 className={classes.txt}>Create new account<span className={classes.point}>.</span></h1>
                <div className={classes.question}>
                    <span>Already a Member?</span>
                    <span ><Link to="/login" className={classes.login}>Login</Link></span>
                </div>
                <form className={classes.form}>
                    {/* <label className="label">Name</label>
                    <input onChange={handleName} className="input"
                    value={name} type="text" /> */}
                    {/* <label>Username</label> */}
                    {/* <input/> */}
                    {/* <label className="label">Name</label> */}
                    <div className={classes.wrapper}>
                        <div class={classes.icon}><PersonOutlineIcon /></div>
                        <div className={classes.div_input}><input className={classes.input} type="text" placeholder="Username" /></div>
                    </div>
                    <div className={classes.wrapper}>
                        <div class={classes.icon}><MailOutlineIcon /></div>
                        <div className={classes.div_input}><input className={classes.input} type="email" placeholder="E-mail" /></div>
                    </div>

                    <div className={classes.wrapper}>
                        <div class={classes.icon}><VpnKeyIcon /></div>
                        <div className={classes.div_input}><input className={classes.input} type="password" placeholder="Password" /></div>

                    </div>

                    <div className={classes.wrapper}>
                        <div class={classes.icon}><VpnKeyIcon /></div>
                        <div className={classes.div_input}><input className={classes.input} type="password" placeholder="Confirm password" /></div>

                    </div>

                    {/* <button onClick={handleSubmit} className="btn" type="submit">
                    Submit
                    </button> */}
                    <button className={classes.btn1} type="submit"> Sign up</button>
                    <button className={classes.btn2} type=""> Cancel</button>


                </form>

            </div>
        </div>
    );



}
export default Register;