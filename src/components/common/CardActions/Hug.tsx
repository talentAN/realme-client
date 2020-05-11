import React, {useState, useContext} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import {requestContext} from '../../../contexts/request';
import {numFormatter} from '../../../utils/Formatter';

const useStyles = makeStyles(theme => ({
  readed: {
    width: '100px',
    height: '32px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.primary.main,
    borderRadius: theme.spacing(1),
    fontWeight: 'bold',
    border: 'solid 1px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  customIcon: {
    marginRight: '2px',
    fontSize: '1rem',
    width: '1.2rem',
    height: '1.2rem',
  },
  huged: {
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.text.hint} !important`,
    border: 'transparent !important',
  },
}));
const Hug = (props: any) => {
  const classes = useStyles({});
  const {Chapter} = useContext(requestContext);
  const {id, is_huged, num_huged = 0} = props;
  const [_is_huged, setIsHuged] = useState(is_huged);
  const [_num_huged, setNumHuged] = useState(num_huged);
  const onHugClick = () => {
    setIsHuged(!_is_huged);
    setNumHuged(_is_huged ? _num_huged - 1 : _num_huged + 1);
    if (!_is_huged) {
      const request = Chapter.hug;
      request(id);
    }
  };
  return (
    <div className={clsx(classes.readed, {[classes.huged]: _is_huged})} onClick={onHugClick}>
      <AccessibilityIcon classes={{root: clsx(classes.customIcon)}} />
      <span>{`hug ${numFormatter(_num_huged)}`}</span>
    </div>
  );
};

export default Hug;
