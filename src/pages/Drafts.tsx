import React, {useEffect, useContext, Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {requestContext} from '../contexts/request';
import QuickLinks from '../components/QuickLinks';
import DraftCard from '../components/DraftCard';
import CornerButtons from '../components/common/CornerButtons';
import {ChapterWidth} from '../utils/Layout';
import {useQueryListReducer} from '../utils/hooks/QueryList';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: '1200px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  draftsContainer: {
    width: ChapterWidth,
  },
  draftNav: {},
  draftList: {},
});

const Drafts = () => {
  const classes = useStyles({});
  const {Draft} = useContext(requestContext);
  const {loading, list, setOffset} = useQueryListReducer(Draft.queryList);

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
      <div className={classes.draftsContainer}>
        {list.map((draft: any, index: number) => {
          return (
            <Fragment key={index}>
              <DraftCard draft={draft} />
            </Fragment>
          );
        })}
      </div>
      <QuickLinks />
      <CornerButtons />
    </div>
  );
};

export default Drafts;
