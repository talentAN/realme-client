import React, {useState, useEffect, useContext, useRef} from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ReactQuill from 'react-quill';
import Button from '@material-ui/core/Button';
import 'react-quill/dist/quill.snow.css';
import {requestContext} from '../contexts/request';
import {WriteEditorWidth} from '../utils/Layout';
import {debounce} from '../utils/Helpers';
import {CHAPTER} from '../utils/consts/Route';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(6, 0),
    width: WriteEditorWidth,
  },
  textFieldRoot: {
    marginBottom: theme.spacing(1),
  },
}));
const text_placeholder = '请输入标题，最多50个字';
const ChapterEditor = (props: any) => {
  const theme = useTheme();
  const {Draft} = useContext(requestContext);
  const classes = useStyles({});
  const {id, title = '', content = ''} = props;
  const [_title, setTitle] = useState(title);
  const [_content, setContent] = useState(content);
  const saveTemp = useRef(debounce(Draft.update, 1000));
  useEffect(() => {
    saveTemp.current({id, title: _title, content: _content});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_title, _content]);
  const publish = () => {
    Draft.publish(id).then((data: any) => {
      if (data && data.status === 'success') {
        window.location.pathname = `${CHAPTER}/${data.id}`;
      }
    });
  };
  return (
    <div className={classes.root}>
      <TextField
        value={_title}
        onChange={(e: any) => setTitle(e.target.value)}
        variant="outlined"
        placeholder={text_placeholder}
        classes={{root: classes.textFieldRoot}}
      />
      <ReactQuill
        theme="snow"
        value={_content}
        onChange={setContent}
        style={{marginBottom: theme.spacing(8), minHeight: '50%', maxHeight: '80%'}}
      />
      <Button onClick={publish} variant="contained" color="primary">
        发布
      </Button>
    </div>
  );
};
export default ChapterEditor;
