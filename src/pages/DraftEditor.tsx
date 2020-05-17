import React, {useState, useEffect, useContext} from 'react';
import Editor from '../components/ChapterEditor';
import {requestContext} from '../contexts/request';
import {genID} from '../utils/Helpers';


const DraftEditor = (props: any) => {
  const {Draft} = useContext(requestContext);
  const {history} = props;
  const hash = history && history.location.hash;
  const [id, setID] = useState(hash.slice(1, hash.length) || '');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  useEffect(() => {
    if (id) {
      Draft.queryItem(id).then((data: any) => {
        if (data && data.status === 'success') {
          const c = data.data;
          setTitle(c.title);
          setContent(c.content);
        }
      });
    } else {
      Draft.add({id: genID()}).then((data: any) => {
        if (data && data.status === 'success') {
          setID(data.id);
        }
      });
    }

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Editor id={id} title={title} content={content} />;
};
export default DraftEditor;
