import "./NavBar.scss";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import backgroundImage from '../../assets/background-image/billingapp-bg.jpg';
import { Divider, Paper, Stack, Typography } from '@mui/material';
import { Person, PersonAdd } from "@mui/icons-material";
import React from "react";
import MenuWithIconButton from "../../../../components/MenuWithIconButton/MenuWithIconButton";
import { accountList } from "../../../../constants/helper/addAccountList";
import CustomIconButton from "../../../../helper/CustomIconButton/CustomIconButton";
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent } from '@mui/material/Select';
import CustomDropDown from "../../../../helper/CustomDropDown/CustomDropDown";
import { listOfIcon, listOfName } from "../../../../constants/helper/listOfIconsForCategoryDropDown";
import { setQueryProps } from "../../helper/setQueryProps";
import Search from "../../../../components/Search/Search";
import CustomDropDownMain from "../../../../helper/CustomDropDownMain/CustomDropDownMain";
import { Link } from "react-router-dom";
export default function NavBar(props:setQueryProps) {
  const [age, setAge] = React.useState('');
  const [branch,setBranch]=React.useState<string>("");
  function handleBranch(value:string){
    setBranch(value);
  }
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  function handleSearch(value:string){
    props.handleSetQuery(value);
  }
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar style={{
          backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover",
          height: "60vh",
          backgroundRepeat: "no-repeat", alignItems: 'flex-start'
        }}>
          <Stack className="w-full">
            <Box className="m-10 justify-between flex items-center h-1/4">
              <Link to="/dashboard" className="text-2xl font-bold text-white">Dashboard</Link>
              <div className="items-center flex justify-between">
                <CustomIconButton children={<PersonAdd />} handleClick={() => { }} />
                <a href="/dashboard" className="text-2xl font-bold text-white m-4">Add Branch</a>
                <MenuWithIconButton icon={<Person />} listOfMenuItems={accountList} />
              </div>
            </Box>
            <Box className="flex flex-col items-center">
              <Typography style={{marginBottom:"20px"}} variant="h1" className="italic" fontWeight={'700'}>Hapree</Typography>
              <Typography style={{marginBottom:"40px"}}variant="h3" className="italic" fontWeight={'700'}>Crush Your Restaurant Bills </Typography>
              <Paper sx={{display:"flex", "justifyContent":"center", alignItems:"flex-start", width:"50%"}}>
                  <CustomDropDownMain listOfDropdownItems={["chennai", "mumbai", "kalyan", "bhandub","vijaywada","pune","hyderbad"]}/>
                  <Divider orientation="vertical" variant="middle" flexItem sx={{fontSize:"30px"}}/>
                  <Search handleSearch={props.handleSetQuery}/>
              </Paper>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}