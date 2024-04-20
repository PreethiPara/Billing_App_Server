import { Menu, MenuItem } from "@mui/material";
import { customMenuProps } from "../../constants/helper/customMenuProps";

function CustomMenu(props: customMenuProps) {
    return (
        <Menu
            id="basic-menu"
            anchorEl={props.anchorEl}
            open={props.open}
            onClose={() => { props.handleClose() }}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            {
                props.listOfMenuItems.map((menuItems) => {
                    return (
                        <MenuItem onClick={(event) => { props.handleClose() }} children={menuItems}></MenuItem>
                    )
                })
            }
        </Menu>
    )
}

export default CustomMenu;