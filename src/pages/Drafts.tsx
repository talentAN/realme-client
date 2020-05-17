import React, {useEffect, useContext} from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {rootContext, Severity} from '../contexts/RootContext';
import {requestContext} from '../contexts/request';
import CornerButtons from '../components/common/CornerButtons';
import DraftCard from '../components/DraftCard';
import {LandingContainerMinWidth, ChapterWidth} from '../utils/Layout';
import {useQueryListReducer} from '../utils/hooks/QueryList';
import Spinner from '../components/common/Spinner';
import Sticks from '../components/Sticks';
import Edit from '../components/stick/Edit';
import AuthCenter from '../components/stick/AuthCenter';
import NavList from '../components/stick/NavList';
import Footer from '../components/stick/Footer';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    minWidth: LandingContainerMinWidth,
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
  },
  content: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: LandingContainerMinWidth,
  },
  drafts: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    maxWidth: ChapterWidth,
  },
}));

const Drafts = () => {
  const classes = useStyles({});
  const theme = useTheme();
  const {setSnackbar} = useContext(rootContext);
  const {Draft} = useContext(requestContext);
  const {loading, list, setList, setOffset} = useQueryListReducer(Draft.queryList);
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
  const onPublish = (id: string) => {
    Draft.publish(id).then((data: any) => {
      if (data && data.status === 'success') {
        setSnackbar({
          open: true,
          variant: Severity.Success,
          message: '发布成功～',
          autoHideDuration: 3000,
        });
        setList(list.filter((item: any) => item.id !== id));
      }
    });
  };
  const onDelete = (id: string) => {
    Draft.del(id).then((data: any) => {
      if (data && data.status === 'success') {
        setList(list.filter((item: any) => item.id !== id));
        setSnackbar({
          open: true,
          variant: Severity.Success,
          message: '删除成功～',
          autoHideDuration: 3000,
        });
      }
    });
  };
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.drafts}>
          {list.map((draft: any, index: number) => {
            return (
              <div key={index} style={{marginBottom: theme.spacing(1)}}>
                <DraftCard draft={draft} onPublish={onPublish} onDelete={onDelete} />
              </div>
            );
          })}
          {loading && <Spinner />}
        </div>

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

export default Drafts;
