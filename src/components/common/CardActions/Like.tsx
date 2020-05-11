import React, {useState, useContext} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import {LikeSvg} from '../../../utils/Svg';
import {genBaseStyle} from '../../../utils/consts/theme';
import {rootContext} from '../../../contexts/RootContext';
import {requestContext} from '../../../contexts/request';
import {LOGIN} from '../../../utils/consts/Route';
import {isGuest} from '../../../utils/helpers/user';

const useStyles = makeStyles(theme => ({
  ...genBaseStyle(theme),
  collapsedText: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    fontSize: '14px',
  },
  selected: {
    color: theme.palette.primary.main,
  },
  iconWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '19.19px',
    height: '19.19px',
  },
}));
const Like = (props: any) => {
  const classes = useStyles({});
  const {user} = useContext(rootContext);
  const {Chapter} = useContext(requestContext);
  const {is_liked, id} = props;
  const [_is_liked, setIsLiked] = useState(is_liked);

  const onLikeClick = () => {
    if (isGuest(user)) {
      window.location.pathname = LOGIN;
      return;
    }
    setIsLiked(!_is_liked);
    const request = Chapter[_is_liked ? 'cancelLike' : 'like'];
    request(id);
  };
  return (
    <IconButton
      classes={{
        root: clsx(classes.collapsedText, classes.hover, {[classes.selected]: _is_liked}),
      }}
      onClick={onLikeClick}
    >
      <div dangerouslySetInnerHTML={{__html: LikeSvg}} className={classes.iconWrapper} />
      <span>like</span>
    </IconButton>
  );
};

export default Like;
