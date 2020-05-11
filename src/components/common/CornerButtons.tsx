import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {genBaseStyle} from '../../utils/consts/theme';
import Card from '@material-ui/core/Card';
import {CornerButtonsConfig} from '../../utils/consts/PageConfig';
import {CornerButton} from '../../utils/Types';

const CornerButtons = () => {
  const classes = makeStyles(theme => ({
    ...genBaseStyle(theme),
    root: {
      position: 'fixed',
      right: '10px',
      bottom: '10px',
      width: '50px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      width: '40px',
      height: '40px',
      margin: '5px',
      backgroundPosition: 'center',
      backgroundRepeat: `no-repeat`,
      '&:hover': {
        // backgroundColor: "#666"
      },
    },
  }))();
  return (
    <Card classes={{root: classes.root}}>
      {CornerButtonsConfig.map((config: CornerButton, index: number) => {
        let linkToMethod: any;
        const {svg, onClick, linkTo = ''} = config;
        if (linkTo) {
          linkToMethod = () => {
            window && window.open(linkTo);
            return false;
          };
        }
        return (
          <div
            key={index}
            className={clsx(classes.button, classes.hover)}
            style={{
              backgroundImage: svg,
            }}
            onClick={linkTo ? linkToMethod : onClick}
          ></div>
        );
      })}
    </Card>
  );
};

export default CornerButtons;
