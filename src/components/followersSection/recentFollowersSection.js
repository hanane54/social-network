import Image from "react-bootstrap/Image";
import FollowersData from "./followersData";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  followersContainer: {
    backgroundColor: "white",
    textAlign:'center',
    fontFamily:'karla',
    borderRadius:'20px',
  },
  title:{
      textAlign:'center',
      paddingTop:'14px',
      color:'var(--first-color)'
  },
  list:{
      listStyle:'none'
  },
  follower:{
      paddingBottom:'10px'
  },
  followerImage:{
      width:'55px',
    height:'55px',
    marginRight:'10px',
    objectFit:'cover',
    borderRadius:'50% !important',
    border:'1px solid var(--fourth-color)',
  },
  followerLink:{
      textDecoration:'none',
      color:'var(--first-color)',
      '&:hover': {
        textDecoration: 'none',
        color:"var(--fourth-color)"
        
     },
  }

}));

const RecentFollowers = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.followersContainer}>
        <p className={classes.title}>Recent Followers</p>
        <ul className={classes.list}>
          {FollowersData.map((val, key) => {
            return (
              <li className={classes.follower} key={key}>
                  <a href="#" className={classes.followerLink}>
                  <Image src={val.image} rounded className={classes.followerImage}/>
                  {val.name}
                  </a>
              </li>
            );
          })}

        </ul>
      </div>
    </>
  );
};

export default RecentFollowers;
