import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import MuiCardActions from '@material-ui/core/CardActions';
import Hug from './Hug';
import Like from './Like';
import Collect from './Collect';
import ShowLess from './ShowLess';
const useStyles = makeStyles({
  customActionRoot: {
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '14px',
  },
  actions: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
  },
});
const _isActionExit = (action: string, actions: string[]) => actions.some(a => a === action);
const CardActions = (props: any) => {
  const classes = useStyles({});
  const {
    id,
    actions,
    is_show_more,
    setIsShowMore,
    num_huged = 0,
    num_liked,
    num_collected,
    is_huged = false,
    is_liked,
    is_collected,
  } = props;
  const is_hug_exist = _isActionExit('hug', actions);
  const is_like_exist = _isActionExit('like', actions);
  const is_collect_exist = _isActionExit('collect', actions);

  return (
    <MuiCardActions classes={{root: classes.customActionRoot}}>
      <div className={classes.actions}>
        {is_hug_exist && <Hug id={id} is_huged={is_huged} num_huged={num_huged} />}
        {is_like_exist && <Like id={id} is_liked={is_liked} num_liked={num_liked} />}
        {is_collect_exist && (
          <Collect id={id} is_collected={is_collected} num_collected={num_collected} />
        )}
      </div>
      {is_show_more && <ShowLess setIsShowMore={setIsShowMore} />}
    </MuiCardActions>
  );
};
export default CardActions;
