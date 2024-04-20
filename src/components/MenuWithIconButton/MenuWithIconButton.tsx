import React from "react";
import { menuWithIconButton } from "../../constants/Components/menuWithIconButton";
import CustomIconButton from "../../helper/CustomIconButton/CustomIconButton";
import CustomMenu from "../../helper/CustomMenu/CustomMenu";
import { accountList } from "../../constants/helper/addAccountList";

function MenuWithIconButton(props:menuWithIconButton) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return(<>
        <CustomIconButton handleClick={handleClick} children={props.icon} />
        <CustomMenu anchorEl={anchorEl} handleClose={handleClose} open={open} listOfMenuItems={props.listOfMenuItems}/>
    </>
    )
}

export default MenuWithIconButton;