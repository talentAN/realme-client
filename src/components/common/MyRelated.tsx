//TODO: the length should be unread collections
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { genBaseStyle } from "../../utils/consts/theme";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";


const MyRelated = (props: any) => {
  const classes = makeStyles(theme => ({
    ...genBaseStyle(theme),
    customCardRoot: {
      flexGrow: 1,
      width: "296px",
      marginBottom: "20px"
    },
    content: {
      wordWrap: "break-word",
      wordBreak: "break-all"
    },
    option: {
      width: "100%",
      flexGrow: 1,
      position: "relative",
      display: "flex",
      alignItems: "center"
    },
    optionLabel: {
      flexGrow: 1,
      padding: "8px 16px"
    },
    unreadNum: {
      display: "flex",
      width: "20px",
      height: "20px",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#666"
    }
  }))()
  const { authConfig = {} } = props;
  const { collections = [], invitations = [] } = authConfig;

  const list = [
    { name: "collections", length: collections.length },
    { name: "invitations", length: invitations.length }
  ];
  return (
    <Card classes={{ root: classes.customCardRoot }}>
      <List>
        {list.map((item: any, index: number) => {
          return (
            <ListItem
              classes={{ root: classes.hover }}
              key={index}>
              <ListItemText
                primary={
                  <span className={clsx(classes.option, classes.hover)}>
                    <span className={classes.optionLabel}>{item.name}</span>
                    <span className={classes.unreadNum}>{item.length}</span>
                  </span>
                }
              />
            </ListItem>
          );
        })}
      </List>
    </Card>
  );
};

export default MyRelated;
