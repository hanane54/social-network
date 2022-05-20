import { makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const useStyles = makeStyles((theme) => ({
    signup: {
        background: "var(--third-color)",
        height: "100%",
        width: "100%",
        marginTop: "-3%"

    },
    
    logo: {
        backgroundColor: "var(--fourth-color)",
        borderRadius: "12px",
        fontSize: "30px",
        color: "#FFFFFF",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        width:"15%",
        padding: "4px",
        textAlign: "center",
        margin: "auto",
        // fontFamily:"poppins"




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
        paddingBottom: "3%",
        paddingTop: "2%",

    },
    txt: {
        marginLeft: "-82%",
        color: "var(--third-color)",
        fontWeight: "550",
        fontFamily: "Calibri",
        fontSize: "45px",

    },
    
    do: {
        marginLeft: "-57%",
        marginTop: "-3%",
        color: "var(--third-color)",




    },
    login: {
        color: "var(--fourth-color)",
        fontWeight:"bold",
        fontSize:"18px",
        
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
        color: "var(--first-color)",
        '&:focus': {
            outline: "none",
            border: "1px solid var(--fourth-color)"
        }


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
        margin:"auto",
        marginTop:"8%",
        fontWeight: "570"
    },
    forgotpasswd:{
        textDecoration:"underline",
        color:"var(--third-color)",
        textAlign: "center",
        '&:hover': {
            color: "var(--third-color)",
        }
    },
    question:{
        textAlign: "center",
        paddingTop:"1%",
        paddingBottom:"2%",
        color:"var(--first-color)",
        fontWeight:"bold"


    },
    link:{
        textDecoration: "none",
        color: "var(--fourth-color)",
        fontWeight: "bold",
        fontSize: "18px",
        '&:hover': {
            color: "var(--fourth-color)",
        }
    },
    
   

}));
function Signin() {
    const classes = useStyles();
    return (
        <div className={classes.signup}>
            <div className={classes.logo}>
            Ask2get
            </div>
            <div className={classes.container}>
                <h1 className={classes.txt}>Login</h1>
                <div className={classes.do}>
                    <span>Login to get and spread </span>
                    <span className={classes.login} >knowledge</span>
                </div>
                <form className={classes.form}>
                    {/* <label className="label">Name</label>
                    <input onChange={handleName} className="input"
                    value={name} type="text" /> */}
                    {/* <label>Username</label> */}
                    {/* <input/> */}
                    {/* <label className="label">Name</label> */}
                    
                    <div className={classes.wrapper}>
                        <div class={classes.icon}><MailOutlineIcon /></div>
                        <div className={classes.div_input}><input className={classes.input} type="email" placeholder="E-mail" /></div>
                    </div>

                    <div className={classes.wrapper}>
                        <div class={classes.icon}><VpnKeyIcon /></div>
                        <div className={classes.div_input}><input className={classes.input} type="password" placeholder="Password" /></div>

                    </div>

                    

                    {/* <button onClick={handleSubmit} className="btn" type="submit">
                    Submit
                    </button> */}
                   <Link to="/"> <button className={classes.btn1} type="submit"> Login</button></Link>


                </form>
                <Link to="/" className={classes.forgotpasswd}>Forgot password?</Link>

            </div>
            <div className={classes.question}>Don't have an account? <span ><Link to="/sign-up" className={classes.link}>Sign up</Link></span></div>
        </div>
    );



}
export default Signin;