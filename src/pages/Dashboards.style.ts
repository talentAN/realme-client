import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      padding: "5px, 10px",
      maxWidth: "1200px"
    },
    header: {},
    content: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      flexWrap: "wrap",
    }
  });

export default useStyles