import { PopoverVirtualElement } from "@mui/material";

export interface customMenuProps {
    anchorEl: Element | (() => Element) | PopoverVirtualElement | (() => PopoverVirtualElement) | null | undefined
    handleClose:Function
    open:boolean
    listOfMenuItems:string[]
}