import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CustomButton from '../../helper/CustomButton/CustomButton';
import { theme } from '../../constants/Theme/theme';
import { modalFromButtonProps } from '../../constants/helper/modalFromButtonProps';
import { TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import CustomDropDown from '../../helper/CustomDropDown/CustomDropDown';
import { listOfIcon, listOfName } from '../../constants/helper/listOfIconsForCategoryDropDown';
import MultiSelectDropDown from '../MultiSelectDropDown/MultiSelectDropDown';

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

export default function ProductModalFromButton(props: modalFromButtonProps) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [clicked, setClicked] = React.useState<boolean>(true);
  const [price, setPrice] = React.useState<string>("");
  const [priceError, setPriceError] = React.useState<boolean>(false);
  const [name, setName] = React.useState<string>("");
  const [category, setCategory] = React.useState<string>("");
  const [quantity, setQuantity] = React.useState<string>("");
  const [quanityError, setQuantityError] = React.useState<boolean>(false);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleCheckBoxClick() {
    setClicked((prev) => {
      console.log(!prev);
      setQuantity("1");
      setQuantityError(false);
      return !prev;
    });
  }
  function handleSubmit() {
    if (!name || !price || (!clicked && !quantity)) {
      alert("Please fill in all the fields!");
      return;
    }
    let formData = { name, price, category, quantity};
    console.log(formData);
    const jsonObject=JSON.stringify(formData);
    localStorage.setItem('product',jsonObject);
    const product=localStorage.getItem('person');
    if(product!==null){
      const parsedProduct=JSON.parse(product);
      console.log(parsedProduct);
    }
    setName("");
    setPrice("");
    setCategory("");
    setQuantity("1");
    handleClose()
  }
  function handlePriceValidation(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setPrice(event.target.value);
    if (event.target.validity.valid) {
      setPriceError(false);
    }
    else setPriceError(true);
  }
  function handleQuantityValidation(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setQuantity(event.target.value);
    if (event.target.validity.valid) {
      setQuantityError(false);
    }
    else setQuantityError(true);
  }
  const handleCategory = (value: string) => {
    setCategory(value);
  };
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
            <TextField sx={{ margin: "1rem 0 1rem" }} onChange={(e) => setName(e.target.value)} label='Name' variant='outlined' required placeholder={'Name'} inputProps={{ style: { fontSize: 25 } }}
              InputLabelProps={{ style: { fontSize: 20, alignContent: 'center' } }} />
            <Box className='flex justify-between items-center'>
              <TextField className='w-2/5'
                sx={{ margin: "1rem 0 1rem" }}
                error={priceError}
                label='Price' onChange={handlePriceValidation}
                variant='outlined' required placeholder={'Price'}
                inputProps={{
                  pattern: "^([1-9][0-9]*)?$",
                  style: { fontSize: 20 },
                }}
                helperText={
                  priceError ? "Please enter valid number" : ""
                } />
              <Box className="w-3/5 ml-6">
                {/* <CustomDropDown handleChangeInDropDown={} label='Branch' listOfDropDownEntries={["dummy1", "dummy2", "dummy3"]} iconImageWithName={[]} /> */}
                  <MultiSelectDropDown/>
              </Box>
            </Box>
            <Box className="flex mt-4 mb-4 justify-between">
              <Box className="flex w-2/5">
                <CustomDropDown handleChangeInDropDown={(event: string)=>{handleCategory(event)}} label='Category' listOfDropDownEntries={listOfName} iconImageWithName={listOfIcon} />
              </Box>
              <Box className="flex w-3/5 justify-end">
                <Checkbox checked={clicked} onClick={handleCheckBoxClick} />
                <TextField
                  onChange={handleQuantityValidation}
                  error={quanityError}
                  helperText={
                    quanityError ? "Please enter valid number" : ""
                  }
                  inputProps={{
                    pattern: "^([1-9][0-9]*)?$",
                    style: { fontSize: 18 },
                  }} required className="flex w-7/10" disabled={!clicked} label={"Quantity"} children={"Quantity"} />
              </Box>
            </Box>
            <Box className='flex justify-between w-fit mt-4 mb-2 min-w-48'>
              <CustomButton buttonText='Submit' handleClick={handleSubmit}></CustomButton>
              <CustomButton buttonText='Close' handleClick={handleClose}></CustomButton>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}