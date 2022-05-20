import { makeStyles } from "@material-ui/core";
import adsImage from '../assets/ad.jpg'

const useStyles = makeStyles((theme) => ({
    adsImage:{
        width:'100%',
        borderRadius:'20px',
        filter: 'brightness(60%)',
    },
    adsContainer:{
        marginTop:'0px',
        borderRadius:'20px',
        position:'relative',
    },
    adSlogan:{
        position:'absolute',
        bottom:'20px',
        color:'white',
        fontFamily:'karla',
        padding:'8px',

    }
}))

const Ads = () => {
    const classes = useStyles();
    return (
        <div className={classes.adsContainer}>
            <img src={adsImage} alt="Ads" className={classes.adsImage}/>
            <div className={classes.adSlogan}><b>Get App on App Store or Google Play </b></div>
        </div>
    )
}

export default Ads;