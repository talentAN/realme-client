import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardActions from './CardActions';
import genChapterCardStyle from './ChapterCard.style';

const ChapterCard = (props: any) => {
  const classes = makeStyles(theme => genChapterCardStyle(theme) as any)() as any;
  const {chapter} = props;
  const {title, content} = chapter;
  const [is_show_more, setIsShowMore] = useState(false);
  const onShowMoreClick = () => {
    setIsShowMore(true);
  };

  return (
    <Card classes={{root: classes.customCardRoot}}>
      <CardHeader title={title} />
      <CardContent>
        <div
          className={clsx(classes.content, is_show_more ? classes.contentOut : classes.contentIn)}
        >
          {content}
        </div>
        {!is_show_more && (
          <IconButton
            classes={{root: clsx(classes.readMore, classes.hover)}}
            onClick={onShowMoreClick}
            size="medium"
          >
            <span>阅读更多</span>
            <ExpandMoreIcon />
          </IconButton>
        )}
      </CardContent>
      <CardActions
        {...chapter}
        is_show_more={is_show_more}
        setIsShowMore={setIsShowMore}
        actions={['hug', 'like', 'collect']}
      />
    </Card>
  );
};

export default ChapterCard;
