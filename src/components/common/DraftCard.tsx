import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import {contentToString, timestampToTimePassed} from '../../utils/Helpers';
import {ChapterWidth} from '../../utils/Layout';

const ContentBorder = () => <div style={{backgroundColor: 'red', width: '3px'}}></div>;
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: ChapterWidth,
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.background.default,
  },
  content: {
    maxHeight: '40px',
    overflow: 'hidden',
  },
}));
const DraftCard = (props: any) => {
  const classes = useStyles({});
  const {draft} = props;
  const {title, content, last_modified} = draft;

  return (
    <Card classes={{root: classes.root}}>
      <CardContent>
        <Typography variant="body2" component="p">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          <ContentBorder />
          {contentToString(content)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">发布</Button>
        <Button size="small">编辑</Button>
        <Button size="small">删除</Button>
        <span>{timestampToTimePassed(last_modified)}</span>
      </CardActions>
    </Card>
  );
};

export default DraftCard;
