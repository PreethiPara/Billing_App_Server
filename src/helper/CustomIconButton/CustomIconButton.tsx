import { IconButton, makeStyles } from "@mui/material";
import { theme } from "../../constants/Theme/theme";
import { customIconButtonProps } from "../../constants/helper/customIconButtonProps";

function CustomIconButton(props: customIconButtonProps) {
    return(
        <IconButton sx={{
            backgroundColor: theme.palette.primary.dark,
            color: '#ffff',
            ':hover': {
              backgroundColor: theme.palette.primary.main,
              color: '#ffff'
        }}} onClick={(event)=>{props.handleClick(event)}} 
        size="large" children={props.children}/>
    )
    
}

export default CustomIconButton;