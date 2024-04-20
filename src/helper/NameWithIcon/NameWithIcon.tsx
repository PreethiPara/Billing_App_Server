import { Box } from "@mui/material";
import { nameWithIcon } from "../../constants/helper/nameWithIcon";

function NameWithIcon(props: nameWithIcon) {
    return (
        <Box className="flex">
            <>{props.icon !== undefined ? props.icon : <></>}</>
            <p className=" text-lg font-medium" >{props.name}</p>
        </Box>
    )
}

export default NameWithIcon;