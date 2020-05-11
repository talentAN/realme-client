import React, {useState, useEffect, useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {requestContext} from '../contexts/request';
import {rootContext} from '../contexts/RootContext';
import QuickLinks from '../components/QuickLinks';
import DraftCard from '../components/DraftCard';
import {ChapterWidth} from '../utils/Layout';

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

const DEFAULT_LENGTH = 30;
const Drafts = (props: any) => {
  const classes = useStyles({});
  const {setDiaLog} = useContext(rootContext);

  const {Draft} = useContext(requestContext);
  const [drafts, setDrafts] = useState([]);
  const [queryParams, setQueryParams] = useState({offset: 0, draftType: 'chapter'});

  const del = async (draft: any) => {
    const {id, type} = draft;
    Draft.del({id, draftType: type}).then((res: any) => {
      if (res && res.status === 200) {
        setDiaLog({
          open: false,
          contexts: '',
          isCancelable: false,
        });
      }
    });
  };
  const onDelete = (draft: any) => {
    setDiaLog({
      open: true,
      contexts: '确认要删除?',
      onConfirm: () => del(draft),
      isCancelable: true,
    });
  };
  useEffect(() => {
    const query = async () => {
      const res = await Draft.query({
        type: 'query',
        offset: queryParams.offset,
        length: DEFAULT_LENGTH,
        draftType: queryParams.draftType,
      });
      const datas = res && res.data && res.data.data;
      datas && setDrafts(datas);
    };
    query();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryParams]);
  return (
    <div className={classes.root}>
      <div className={classes.draftsContainer}>
        <Tabs
          value={queryParams.draftType}
          indicatorColor="primary"
          textColor="primary"
          onChange={(e: any, val: any) => setQueryParams({...queryParams, offset: val})}
        >
          <Tab label="timeline" value="timeline" />
          <Tab label="chapter" value="chapter" />
        </Tabs>
        <div className={classes.draftNav}></div>
        <div className={classes.draftList}>
          {drafts.length ? (
            <>
              {drafts.map((draft: any) => {
                const editLink = `${props.location.pathname}/${draft.id}/edit`;
                return (
                  <DraftCard key={draft.id} draft={draft} editLink={editLink} onDelete={onDelete} />
                );
              })}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <QuickLinks />
    </div>
  );
};

export default Drafts;
