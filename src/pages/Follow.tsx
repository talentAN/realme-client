import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { followChaptersRequest } from "../utils/Requests";
import ChaptersContainer from "./containers/Chapters";
import MyRelated from "../components/common/MyRelated";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: "1200px",
    display: "flex",
    justifyContent: "space-between"
  },
  header: {}
});

const Follow = (props: any) => {
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <ChaptersContainer {...props} request={()=>{}} />
      <MyRelated />
    </div>
  );
};

export default Follow;
