import { FormControl, InputLabel, ListItemIcon, ListItemText, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";




const options=[
    {id:1, value:'Option1', label:"Option 1"},
    {id:2, value:'Option2', label:"Option 2"},
    {id:3, value:'Option3', label:"Option 3"},
    {id:4, value:'Option4', label:"Option 4"},
    {id:5, value:'Option5', label:"Option 5"},
    {id:6, value:'Option6', label:"Option 6"},
    {id:7, value:'Option7', label:"Option 7"},
    {id:8, value:'Option8', label:"Option 8"},
    {id:9, value:'Option9', label:"Option 9"},
    {id:10, value:'Option10', label:"Option 10"},
    {id:11, value:'Option11', label:"Option 11"},
    {id:12, value:'Option12', label:"Option 12"},
    
]

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

export default function MultiSelectDropDown(){
    const [selectedValue,setSelectedValue]=useState<string[]>([]);
    const optionsValue=options.map((option)=>option.value);
    console.log(selectedValue,"selectedValue");
    const isAllSelected= options.length>0 && selectedValue.length===options.length;
    const handleSelectedBranch=(event: SelectChangeEvent<string[]>)=>{
        console.log(event);
        const value=event.target.value as string[];
        if(value.includes("all")){
            setSelectedValue((selectedValue && selectedValue.length)===(options && options.length)?[]:optionsValue);
            return;
        }
        setSelectedValue(value);
    }
    return(
        <div>
            <FormControl sx={{width:"100%"}}>
            <InputLabel id="demo-multiple-chip-label">Add product to branches</InputLabel>
                <Select 
                    value={selectedValue} 
                    label="Add product to branches"
                    multiple
                    onChange={(e)=>{handleSelectedBranch(e)}}
                    renderValue={(selectedValue)=>(selectedValue.join(', '))}
                    MenuProps={{
                        PaperProps: {
                          style: {
                          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                          width: 250
                          }
                      },
                        variant: "menu",
                  }}
                    >
                    
                    <MenuItem value="all">
                        <ListItemIcon>
                            <Checkbox  checked={isAllSelected} color="default" />
                        </ListItemIcon>
                        <ListItemText primary="Select All"></ListItemText>
                    </MenuItem>
                    {
                        options.map((option)=>(
                            <MenuItem value={option.value} key={option.id}>
                                <ListItemIcon>
                                    <Checkbox  name="select-checkbox" checked={selectedValue.includes(option.value)} color="default" />
                                </ListItemIcon>
                                <ListItemText primary={option.label}></ListItemText>
                            </MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </div>
    )
}
