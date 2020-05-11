import React, {useState, useEffect, useContext} from 'react';
import Editor from '../components/ChapterEditor';
import {requestContext} from '../contexts/request';
import {genID} from '../utils/Helpers';

const DraftEditor = () => {
  const {Draft} = useContext(requestContext);
  const [id, setID] = useState('');
  useEffect(() => {
    Draft.add({id: genID()}).then((data: any) => {
      if (data && data.status === 'success') {
        setID(data.id);
      }
    });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Editor id={id} title={''} content={''} />;
};
export default DraftEditor;
