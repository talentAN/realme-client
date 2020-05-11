import { LandingContainerMinWidth } from "../../utils/Layout";

const genLandingStyle = (theme: any) => {
  return {
    root: {
      flexGrow: 1,
      minWidth: LandingContainerMinWidth,
      padding: theme.spacing(2),
      display: "flex",
      justifyContent: "center",
      backgroundColor: theme.palette.background.paper
    },
    content: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "space-between",
      maxWidth: LandingContainerMinWidth,
    }
  }
};

export default genLandingStyle;
