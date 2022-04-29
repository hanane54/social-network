import { makeStyles } from "@material-ui/core";
import React from "react";
import { MenuData } from "./menuData";

const useStyles = makeStyles((theme)=>({
    container:{
        marginTop: "1%",
        marginLeft:"2%",
        backgroundColor:"#FFFFFF",
        width:"18%",
        height:"50%",
        borderRadius:"20px",
        alignItems:"center"
    },
    menu:{
    fontFamily: "karla",
    alignContent:"center",
    color:"#AAA6A6",
    fontStyle:"bolder",
    fontSize:"25px",
    marginLeft:"38%",
    paddingTop:"8%",

    },
    menuList:{
        height:"auto",
        padding:"0",
        alignItems:"center",
        paddingBottom:"8%",

    },
    row:{
        height:"100%",
        width:"100%",
        listStyleType:"none",
        margin:"0",
        display:"flex",
        flexDirection:"row",
        fontFamily: "karla",
        color:"#AAA6A6",
        justifyContent:"center",
        alignItems:"center",
        padding:"4%",
        paddingLeft:"23%",
        
        '&:hover': {
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            cursor:"pointer",
            color:"#F56D91"
            
         },
         "&#active":{
            color:"#F56D91",

             
         },
         

    },
    icon:{
        flex:"3"
    },
    title:{
        flex:"10"
    }
}));

function Menu() {
    const classes = useStyles();
    return(
        <div className={classes.container}>
            <h5 className={classes.menu}>Menu</h5>
            <ul className={classes.menuList}>
                {MenuData.map((val,key)=>{
                    return(
                        <li 
                        onClick={()=> {window.location.pathname=val.link}}
                        id={ window.location.pathname === val.link ? "active" : ""} className={classes.row} key={key} >
                            <div className={classes.icon}>{val.icon}</div> <div className={classes.title}>{val.title}</div> 
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default Menu;