import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import * as React from 'react'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type SnackProps = {
  openSnack: boolean;
  closeSnack: () => void;
  message: string;
}

const SnackbarAlert = ({openSnack, closeSnack, message }: SnackProps) => {

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar 
        open={openSnack} 
        autoHideDuration={3000} 
        onClose={closeSnack} 
        message={message}
      />
    </Stack> 
  );
}

export default SnackbarAlert
