import React, {useState, useContext, useRef, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import {Link as RLink, withRouter} from 'react-router-dom';
import {rootContext} from '../contexts/RootContext';
import {AppHeaderProfileMenu} from '../utils/consts/PageConfig';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Link from '@material-ui/core/Link';
import genNavTheme from './Nav.style';
import {isGuest} from '../utils/helpers/user';
import * as route from '../utils/consts/Route';

const Nav: React.FC = (props: any) => {
  const classes = makeStyles(theme => genNavTheme(theme) as any)() as any;
  const {user, setGuest} = useContext(rootContext);
  const [isPopOverOpen, setIsPopOverOpen] = useState(false);
  const PopOverRoot = useRef(null);
  const path = props.history.location.pathname;
  // TODO: what if add other tables use switch later?
  const tab: string = path === route.HOTS ? path : route.ROOT;
  const [tab_value, setTabValue]: any = useState(tab);

  const onTabChange = (e: any, new_value: string) => {
    props.history.push(new_value);
    setTabValue(new_value);
  };

  useEffect(() => {
    const body = document.body;
    const root = document.getElementById('root') || document.createElement('div');
    const hidePopOver = (e: any) => {
      if (!root.contains(e.currentTarget)) {
        setIsPopOverOpen(false);
      }
    };
    body.addEventListener('click', hidePopOver);
    return () => {
      body.removeEventListener('click', hidePopOver);
    };
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static" classes={{root: classes.muiRoot}}>
        <Toolbar className={classes.toolBar}>
          <Link color="textPrimary" title="" component={RLink} to={route.ROOT}>
            <div className={classes.logo} />
          </Link>
          <div className={classes.navAndSearch}>
            <Tabs value={tab_value} onChange={onTabChange} classes={{indicator: classes.tabs}}>
              <Tab
                classes={{
                  root: classes.customTabRoot,
                  selected: classes.selectedTab,
                }}
                label="首页"
                value={route.ROOT}
              />
              <Tab
                classes={{
                  root: classes.customTabRoot,
                  selected: classes.selectedTab,
                }}
                label="发现"
                value={route.EXPLORE}
              />
            </Tabs>
            <Paper className={classes.searchRoot}>
              <InputBase
                className={classes.input}
                placeholder="Search"
                inputProps={{'aria-label': 'search google maps'}}
              />
              <IconButton aria-label="search" classes={{root: classes.customIconRoot}}>
                <SearchIcon />
              </IconButton>
            </Paper>
          </div>
          <IconButton
            className={classes.menuButton}
            ref={PopOverRoot}
            onClick={() => {
              if (isGuest(user)) {
                props.history.push(route.LOGIN);
                return;
              }
              setIsPopOverOpen(true);
            }}
          >
            <AccountBoxIcon />
          </IconButton>
          <Menu
            classes={{paper: classes.customMenu}}
            anchorEl={PopOverRoot.current}
            open={isPopOverOpen}
          >
            {AppHeaderProfileMenu.map((item: any, index: number) => {
              const {label, icon, link, onClick} = item;
              const _wrappedClick = () => {
                setIsPopOverOpen(false);
                if (link) {
                  setTabValue(false);
                  typeof link === 'string'
                    ? props.history.push(link)
                    : props.history.push(link(user.id));
                  return;
                }
                onClick(setGuest);
                props.history.push(route.LOGIN);
              };
              return (
                <MenuItem
                  key={index}
                  classes={{
                    root: clsx(classes.customMenuItem, classes.hover),
                  }}
                  onClick={_wrappedClick}
                >
                  <ListItemIcon classes={{root: classes.customListItemIcon}}>
                    <div dangerouslySetInnerHTML={{__html: icon}} />
                  </ListItemIcon>
                  <ListItemText primary={label} />
                </MenuItem>
              );
            })}
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Nav);
