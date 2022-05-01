import { makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme)=>({
    signup:{
        background:"var(--third-color)",
        height:"100%",
        width:"100%"
        
    },
    welcome:{
        textAlign:"center",
        fontWeight:"bold",
        fontSize:"40px",
        color:"var(--first-color)"

    },
    logo:{
        backgroundColor:"var(--fourth-color)",
        borderRadius:"12px",
        fontSize:"30px",
        color:"#FFFFFF",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        padding:"6px"



    },
    container:{
        backgroundColor:"var(--first-color)",
        borderRadius:"30px",
        textAlign:"center",

    },
    // form:{
    //     display:"flex",
    //     flexDirecton:"row"
    // },
    input: {
        display:"block"
    }

}));
function Register(){
    const classes = useStyles();
    return(
        <div className={classes.signup}>
           <div className={classes.welcome}>
               Welcome to <span className={classes.logo}>Logo name</span> 
            </div>
            <div className={classes.container}>
                <h1>Create new account<span className={classes.point}>.</span></h1>
                <div className={classes.login}>
                    <span>Already a Member?</span>
                    <span className={classes.signin}><Link to="/login">Login</Link></span>
                </div>
                <form className={classes.form}>
                    {/* <label className="label">Name</label>
                    <input onChange={handleName} className="input"
                    value={name} type="text" /> */}
                    {/* <label>Username</label> */}
                    {/* <input/> */}
                    {/* <label className="label">Name</label> */}
                    <input className={classes.input} type="text" placeholder="Username"/>
                    <input className={classes.input}  type="email" placeholder="E-mail"/>
                    <input className={classes.input}  type="password" placeholder="Password"/>
                    <input className={classes.input}  type="password" placeholder="Confirm password"/>
                    {/* <button onClick={handleSubmit} className="btn" type="submit">
                    Submit
                    </button> */}
                    <button className="btn" type="submit"> Sign up</button>
                    <button className="btn" type=""> Cancel</button>


                </form>

            </div>
        </div>
    );



}
export default Register;