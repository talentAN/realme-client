import React, {FC} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Favorite from "@material-ui/icons/Favorite"
import {BookProps} from "../types/index";

const useStyles = makeStyles({
  card: {
    width: "345px",
  },
  media: {
    height: 140
  }
});
const Book: FC<BookProps>= (props) => {
  const classes = useStyles({});
  const {bookConfig} = props;
  const { author, title, abstract} = bookConfig;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg" //TODO:
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {author}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {abstract}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Favorite />
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Book;