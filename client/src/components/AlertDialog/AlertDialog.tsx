import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

type AlertProps = {
  openAlert: boolean;
  handleClose: () => void;
  handleDelete: () => void;
}

const AlertDialog = ({openAlert, handleClose, handleDelete}: AlertProps) => {
  return (
    <>
      <Dialog
        open={openAlert}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            If you delete this customer, you won't be able to recover it.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={() => {
            handleClose()
            handleDelete()
          }} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AlertDialog
