import React from 'react';
import {useTheme} from '@material-ui/core/styles';

const Dot = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: theme.spacing(0, 1),
        color: theme.palette.grey[600],
      }}
    >
      ·
    </div>
  );
};
export default Dot;
