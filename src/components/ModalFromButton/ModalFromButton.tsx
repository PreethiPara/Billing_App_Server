import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CustomButton from '../../helper/CustomButton/CustomButton';
import { theme } from '../../constants/Theme/theme';
import { modalFromButtonProps } from '../../constants/helper/modalFromButtonProps';
import { TextField } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '30px',
  minWidth: '600px'
};

export default function ModalFromButton(props: modalFromButtonProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={{
        fontSize: '1.3rem',
        backgroundColor: theme.palette.primary.dark,
        color: '#ffff',
        ':hover': {
          backgroundColor: theme.palette.primary.main,
          color: '#ffff'
        }
      }}
        onClick={handleOpen}>{props.buttonText}</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h3" component="h2" sx={{ fontWeight: "500" }}>
            {props.mainHeading}
          </Typography>
          <Box className='flex flex-col w-4/5'>
            {
              props.listOfModalItems.map((item) => {
                return (
                  <TextField label={item} variant='outlined' required placeholder={item} sx={{ margin: '1rem 0 1rem 0' }} inputProps={{ style: { fontSize: 25 } }}
                    InputLabelProps={{ style: { fontSize: 20 } }} />
                )
              })
            }
            {
              props.extraContent
            }
            <Box className='flex justify-between w-fit mt-4 mb-2 min-w-48'>
              <CustomButton buttonText='Submit' handleClick={handleClose}></CustomButton>
              <CustomButton buttonText='Close' handleClick={handleClose}></CustomButton>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}