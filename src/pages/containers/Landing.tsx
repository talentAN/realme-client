import React, {useEffect, useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Chapters from './Chapters';
import Sticks from '../../components/Sticks';
import Edit from '../../components/stick/Edit';
import AuthCenter from '../../components/stick/AuthCenter';
import NavList from '../../components/stick/NavList';
import Footer from '../../components/stick/Footer';
import CornerButtons from '../../components/common/CornerButtons';
import {requestContext} from '../../contexts/request';
import LandingStyle from './Landing.style';
import {useQueryListReducer} from '../../utils/hooks/QueryList';

const LandingContainer = () => {
  const classes = makeStyles(LandingStyle)();
  const {Chapter} = useContext(requestContext);
  const {loading, list, setOffset} = useQueryListReducer(Chapter.queryList);

  useEffect(() => {
    const _fetch = () => {
      const clientHeight = document.documentElement.clientHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      if (scrollHeight === clientHeight + scrollTop) {
        const newOffset = list.length;
        setOffset(newOffset);
      }
    };
    window.addEventListener('scroll', _fetch);
    window.addEventListener('mousewheel', _fetch);
    return () => {
      window.removeEventListener('scroll', _fetch);
      window.removeEventListener('mousewheel', _fetch);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Chapters loading={loading} chapters={list} actions={[]} />
        <Sticks>
          <Edit />
          <AuthCenter />
          <NavList />
          <Footer />
        </Sticks>
      </div>
      <CornerButtons />
    </div>
  );
};

export default LandingContainer;
