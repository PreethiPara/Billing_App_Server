import { ArrowDropDown, ArrowDropUp, ArrowUpward, LocalActivity, LocationCity, LocationOn } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemText, Paper } from "@mui/material";
import { BaseSyntheticEvent, useState } from "react";
import { customDropdownMain } from "../../constants/helper/customDropdownMain";

function CustomDropDownMain(props:customDropdownMain) {
    const [state, setstate] = useState("None");
    const [open, setOpen] = useState(false);
    const handleChange = (event:BaseSyntheticEvent)=>{
        console.log(event)
        setstate(event.target.innerText)
    }
    var parentDiv = document.getElementById("dropDownCustomMain");
    const parentLeft = parentDiv?.offsetLeft?parentDiv.offsetLeft:0;
    const parentTop = parentDiv?.offsetTop?parentDiv.offsetTop:0;
    const parentHeight = parentDiv?.offsetHeight?parentDiv.offsetHeight:0;
    const top = parentTop+parentHeight+10;
    const left = parentLeft;

    return(
        <div className="flex flex-col " onClick={()=>{setOpen(!open)}} id="dropDownCustomMain">
            <Box className="flex items-center mr-6 ml-6 mt-2 mb-2 w-1/3 cursor-pointer">
                <LocationOn style={{fill:"red"}}/>
                <span className=" text-4xl m-4" style={{fontFamily:"monospace"}}>{state}</span>
                {open?<ArrowDropUp/>:<ArrowDropDown/>}
            </Box>
            <Paper elevation={8} id="dropDownCustomMainList" sx={{  borderRadius:"5px", minWidth:"250px", zIndex:"1", position:"absolute", top:{top}, left:{left}, height:"210px", overflowY:"scroll",display:open?"flex":"none"}} >
                    <List sx={{width:"100%"}}>
                        {props.listOfDropdownItems.map((items)=>
                            <ListItem disablePadding id="customDropDownLisItem">
                                <ListItemButton  onClick={handleChange}>
                                    <ListItemText primary={items} style={{color:"black",textAlign:"start"}}/>
                                </ListItemButton>
                            </ListItem>)
                        }
                    </List>
            </Paper>
        </div>
    )
}

export default CustomDropDownMain;