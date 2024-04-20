import { Box, MenuItem, Typography, ListItemIcon } from "@mui/material";
import "./Sidebar.scss";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from "../../constants/HomeIcon";
import { NavLink } from "react-router-dom";
import storeDetails from "../../constants/storeDetails";
export default function Sidebar() {
    const branches = storeDetails[0].listOfBranches;
    return (
        <Box className="w-2/12 bg-white h-screen sidebar">
            <Typography className="italic" fontWeight={'700'} style={{margin:"45px"}} variant="h3">Hapree</Typography>
            <NavLink to="/" className="nav-link">
                <MenuItem className="side-bar-menu-item" style={{fontSize:"1.6rem"}}>
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    Home
                </MenuItem>
            </NavLink>
            {branches.map((branch, index) => (
                <NavLink key={index} to={`/branch/${branch}`}>
                    <MenuItem  className="side-bar-menu-item" style={{fontSize:"1.6rem",display:"flex",marginTop:"10px"}} >{branch}</MenuItem>
                </NavLink>
            ))}
        </Box>
    );
}
