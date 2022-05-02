import { makeStyles } from "@material-ui/core";
import React from "react";


const useStyles = makeStyles((theme)=>({
    signup:{
        backgroundColor:"#F7F5F2",
        height:"100%",
        width:"100%"
        

    }

}));
function Login(){
    const classes = useStyles();
    return(
        <div className={classes.login}>
            <h2>Welcome to</h2> 
            <div className={classes.container}>

            </div>
        </div>
    );



}
export default Login;