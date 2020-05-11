import React, {useContext} from 'react';
import {rootContext} from '../../contexts/RootContext';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const GlobalDialog = (props: any) => {
  const {open = false, content = '', onConfirm, isCancelable = false} = props;
  const {setDiaLog} = useContext(rootContext);

  const _onConfirm = () => {
    onConfirm();
    setDiaLog({
      open: false,
      content: '',
      onConfirm: null,
      isCancelable: false,
    });
  };
  const _cancel = () => {
    setDiaLog({
      open: false,
      content: '',
      onConfirm: null,
      isCancelable: false,
    });
  };
  return (
    <Dialog onClose={_onConfirm} aria-labelledby="customized-dialog-title" open={open}>
      <DialogContent dividers>
        <Typography gutterBottom>{content}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={_onConfirm} color="default">
          确认
        </Button>
        {isCancelable && (
          <Button onClick={_cancel} color="default">
            取消
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default GlobalDialog;
