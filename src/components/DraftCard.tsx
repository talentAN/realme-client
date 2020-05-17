import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Dot from './common/Dot';
import {ChapterWidth} from '../utils/Layout';
import {contentToString, timestampToTimePassed} from '../utils/Helpers';
import {DRAFT} from '../utils/consts/Route';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: ChapterWidth,
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.background.default,
  },
  action: {
    color: theme.palette.grey[600],
    fontWeight: 500,
    margin: 0,
    padding: 0,
    cursor: 'pointer',
  },
  first_action: {
    marginLeft: theme.spacing(1),
  },
  lastModified: {
    marginLeft: `${theme.spacing(2)}px !important`,
    color: theme.palette.grey[600],
  },
}));
const DraftCard = (props: any) => {
  const classes = useStyles({});
  const {draft, onDelete, onPublish} = props;
  const {id, title, content, last_modified} = draft;
  return (
    <Card classes={{root: classes.root}}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="body2" component="p">
          {contentToString(content)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing={true}>
        <span className={clsx(classes.action, classes.first_action)} onClick={() => onDelete(id)}>
          删除
        </span>
        <Dot />
        <a
          className={classes.action}
          href={`${DRAFT}/${id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          编辑
        </a>
        <Dot />
        <span className={classes.action} onClick={() => onPublish(id)}>
          发布
        </span>
        <span className={classes.lastModified}>{timestampToTimePassed(last_modified)}</span>
      </CardActions>
    </Card>
  );
};
export default DraftCard;
