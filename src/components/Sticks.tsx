import React, { Children, cloneElement } from "react";

import useStyles from "../pages/containers/Sticks.style";
const LandingContainer = (props: any) => {
  const { children } = props;
  const classes = useStyles({});

  const childrenWithProps = Children.map(children, (child: any) =>
    cloneElement(child, { ...props })
  );
  return <div className={classes.root}>{childrenWithProps}</div>;
};

export default LandingContainer;
