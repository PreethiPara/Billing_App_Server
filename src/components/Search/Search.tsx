import { Box, IconButton, Input, TextField } from "@mui/material";
import React, { FormEvent } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent } from "react";
import { searchProps } from "../../constants/helper/searchProps";
import CustomDropDown from "../../helper/CustomDropDown/CustomDropDown";
export default function Search(props:searchProps){
    const [searchWord,setSearchWord]=React.useState<string>("");
    const handleSearchChange=(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        console.log(event.target.value);
        setSearchWord(event.target.value);
        props.handleSearch(event.target.value);
    }
    function handleSearchClick(event: React.FormEvent){
        event.preventDefault();
    }
    return(
        <Box className=" w-5/6 flex m-4 items-center">
            <SearchIcon className="m-3 w-10 text-xl items-center" style={{fill:"blue",fontSize:"30px", marginLeft:"10px",color:"black", textAlign:"end"}} />
            <input className="text-4xl text-black outline-none bg-transparent" placeholder="search product" onChange={handleSearchChange}/>
        </Box>
    )
}