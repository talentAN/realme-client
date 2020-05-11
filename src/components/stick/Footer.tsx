import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import clsx from 'clsx';
import {StickWidth} from '../../utils/Layout';
import {genBaseStyle} from '../../utils/consts/theme';

const Footer = () => {
  const classes = makeStyles(theme => ({
    ...genBaseStyle(theme),
    root: {
      width: StickWidth,
      padding: '23px',
      marginBottom: '10px',
      backgroundColor: theme.palette.background.default,
    },
    linkItem: {
      display: 'inline-block',
      margin: '0 10px 10px 0',
      textDecoration: 'none',
      color: theme.palette.text.hint,
    },
  }))();
  const footerList: any[] = [
    {label: 'LL指南', value: '', link: '/'},
    {label: 'LL协议', value: '', link: '/'},
    {label: 'LL隐私保护指引', value: '', link: '/'},
    {label: '工作', value: '', link: '/'},
    {label: '侵权举报', value: '', link: '/'},
    {
      label: '网上有害信息举报专区',
      value: '',
      link: 'https://tsm.miit.gov.cn/dxxzsp/',
    },
    {label: '沪 ICP 证 110745 号（fake）', value: '', link: '/'},
    {label: '儿童色情信息举报专区', value: '', link: '/jubao'},
    {label: '联系我们', value: '', link: '/'},
  ];
  return (
    <Card classes={{root: classes.root}}>
      {footerList.map((footer: any, index: number) => {
        const {label, link} = footer;
        return (
          <span key={index} className={classes.hover}>
            <a
              className={clsx(classes.linkItem, classes.hover)}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          </span>
        );
      })}
    </Card>
  );
};

export default Footer;
