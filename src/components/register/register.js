import { makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme)=>({
    signup:{
        background:"var(--third-color)",
        height:"100%",
        width:"100%",
        marginTop:"1%"
        
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
        marginTop:"2%",
        margin:"auto",
        backgroundColor:"var(--first-color)",
        borderRadius:"30px",
        textAlign:"center",
        width:"50%",
        height:"50%",
        padding:"4%",
        paddingBottom:"5%",
        paddingTop:"2%",

    },
    txt:{
        marginLeft:"-20%",
        color:"var(--third-color)",
        fontWeight:"550",
        fontFamily:"Calibri",
        fontSize:"45px",

    },
    point:{
        color:"var(--fourth-color)",
        fontSize:"50px"
    },
    question:{
        marginLeft:"-55%",
        marginTop:"-3%",
        color:"var(--third-color)",

        
        // fontFamily:"Karla"


    },
    login:{
        TextDecoration:"inerit",
        color:"inerit"
    },
    form:{
        // display:"flex",
        // flexDirecton:"column"
        // padding:"50px"
        marginTop:"5%"

    },
    div_input:{
        padding:"10px",
        marginLeft:"5%",


    },
    input: {
        backgroundColor:"var(--third-color)",
        display:"block",
        margin:"auto",
        borderRadius:"40px",
        border:"1px",
        width:"100%",
        paddingTop:"10px",
        paddingBottom:"10px",
        color:"var(--first-color)",


    },
    btn1:{
        color:"var(--third-color)",
        backgroundColor:"var(--fourth-color)",
        borderRadius:"23px",
        border:"1px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        width:"25%",
        padding:"5px",
        fontFamily:"Calibri",
        fontSize:"20px",
        marginRight:"4%",
        marginTop:"7%",
        fontWeight:"570"
    },
    btn2:{
        color:"var(--first-color)",
        backgroundColor:"var(--third-color)",
        borderRadius:"23px",
        border:"1px",
        // boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        width:"25%",
        padding:"5px",
        fontFamily:"Calibri",
        fontSize:"20px",
        marginTop:"7%"



    },

}));
function Register(){
    const classes = useStyles();
    return(
        <div className={classes.signup}>
           <div className={classes.welcome}>
               Welcome to <span className={classes.logo}>Logo name</span> 
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
                    <div className={classes.div_input}><input className={classes.input} type="text" placeholder="Username"/></div>
                    <div className={classes.div_input}><input className={classes.input}  type="email" placeholder="E-mail"/></div>
                    <div className={classes.div_input}><input className={classes.input}  type="password" placeholder="Password"/></div>
                    <div className={classes.div_input}><input className={classes.input}  type="password" placeholder="Confirm password"/></div>
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