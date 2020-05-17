import React, {useContext, Fragment} from 'react';
import {rootContext} from '../../contexts/RootContext';
import {requestContext} from '../../contexts/request';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {StickWidth} from '../../utils/Layout';
import QuickNav from './QuickNav';
import {genBaseStyle} from '../../utils/consts/theme';
import {isGuest} from '../../utils/helpers/user';
import {CollectSvg, QuestionSvg, ServiceSvg} from '../../utils/Svg';

const NavList = () => {
  const {user} = useContext(rootContext);
  const {Chapter} = useContext(requestContext);
  const classes = makeStyles(theme => ({
    ...genBaseStyle(theme),
    root: {
      width: StickWidth,
      display: 'flex',
      flexDirection: 'column',
      padding: '23px',
      marginBottom: '10px',
      backgroundColor: theme.palette.background.default,
    },
    navItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
      textDecoration: 'none',
      color: theme.palette.text.hint,
    },
    iconLabel: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'first',
    },
    customIcon: {
      height: '18px',
      marginRight: '10px',
    },
  }))();
  const StickNavList: any[] = [
    {
      label: '我的收藏',
      value: 'collection',
      icon: CollectSvg,
      query: Chapter.getTotalCollectNum,
      linkTo: '/collections',
    },
    {
      label: '我的关注',
      value: 'interest',
      icon: QuestionSvg,
      query: false,
      linkTo: '/people/adam_gllue/following/',
    },
    // {
    //   label: '我的邀请',
    //   value: 'collection',
    //   icon: InvatisionSvg,
    //   query: false,
    //   linkTo: 'creator/tools/question/invited',
    // },
    {
      label: '站务中心',
      value: 'service',
      icon: ServiceSvg,
      query: false,
      linkTo: '/community',
    },
  ];
  if (isGuest(user)) {
    return <></>;
  }
  return (
    <Card classes={{root: classes.root}}>
      {StickNavList.map((config: any, index: number) => {
        const {label, query, icon, linkTo} = config;
        return (
          <Fragment key={index}>
            {' '}
            <QuickNav label={label} query={query} icon={icon} linkTo={linkTo} />
          </Fragment>
        );
      })}
    </Card>
  );
};

export default NavList;
