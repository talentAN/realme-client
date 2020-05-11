import React, {useState, useContext} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import {requestContext} from '../../../contexts/request';
import {rootContext} from '../../../contexts/RootContext';
import {CollectSvg} from '../../../utils/Svg';
import {genBaseStyle} from '../../../utils/consts/theme';
import {isGuest} from '../../../utils/helpers/user';
import {LOGIN} from '../../../utils/consts/Route';
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
const Collect = (props: any) => {
  const classes = useStyles({});
  const {user} = useContext(rootContext);
  const {Chapter} = useContext(requestContext);
  const {is_collected, id} = props;
  const [_is_collected, setIsCollected] = useState(is_collected);

  const onCollectClick = () => {
    if (isGuest(user)) {
      window.location.pathname = LOGIN;
      return;
    }
    setIsCollected(!_is_collected);
    const request = Chapter[_is_collected ? 'cancelCollect' : 'collect'];
    request(id);
  };
  return (
    <IconButton
      classes={{
        root: clsx(classes.collapsedText, classes.hover, {[classes.selected]: _is_collected}),
      }}
      onClick={onCollectClick}
    >
      <div dangerouslySetInnerHTML={{__html: CollectSvg}} className={classes.iconWrapper} />
      <span>collect</span>
    </IconButton>
  );
};

export default Collect;
