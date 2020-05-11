import { makeStyles } from "@material-ui/core/styles";
import {StickWidth} from "../../utils/Layout"
const useStyles = makeStyles({
  root: {
    minWidth: StickWidth,
    display: "flex",
    flexDirection: "column",
  },
});

export default useStyles;
