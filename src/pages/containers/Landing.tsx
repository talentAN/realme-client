import React, {useState, useEffect, useContext, useCallback} from 'react';
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
import {len_query} from '../../utils/consts';
const useLandingReducer = (request: Function) => {
  const [loading, setLoading] = useState(false);
  const [chapters, setChapters]: any = useState([]);
  const [offset, setOffset] = useState(0);

  const fetchNewChapters = useCallback(
    async (offset: number) => {
      const newChapters: any = await request({limit: len_query, offset});
      if (newChapters) {
        setChapters((chapters: any[]) => [...chapters, ...newChapters]);
      }
      setLoading(false);
    },
    [request]
  );
  useEffect(() => {
    setLoading(true);
    fetchNewChapters(offset);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);
  return {
    loading,
    chapters,
    setOffset,
  };
};
const LandingContainer = () => {
  const classes = makeStyles(LandingStyle)();
  const {Chapter} = useContext(requestContext);
  const {loading, chapters, setOffset} = useLandingReducer(Chapter.queryList);

  useEffect(() => {
    const _fetch = () => {
      const clientHeight = document.documentElement.clientHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      if (scrollHeight === clientHeight + scrollTop) {
        const newOffset = chapters.length;
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
  }, [chapters]);

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Chapters loading={loading} chapters={chapters} actions={[]} />
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
