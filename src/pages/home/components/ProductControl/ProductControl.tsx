import { Box, SelectChangeEvent } from "@mui/material";
import ProductModalFromButton from "../../../../components/ProductModalFromButton/ProductModalFromButton";
import ModalFromButton from "../../../../components/ModalFromButton/ModalFromButton";
import CategoryModal from "../../../../components/CategoryModal/CategoryModal";
import CustomDropDown from "../../../../helper/CustomDropDown/CustomDropDown";
import React from "react";
import { listOfIcon, listOfName } from "../../../../constants/helper/listOfIconsForCategoryDropDown";
import { productControlProps } from "../../helper/productControlProps";
export default function ProductControl(props:productControlProps) {
    const [category,setCategory]=React.useState<string>("");
    const handleCategory = (value:string) => {
        setCategory(value);
        props.handleSetCategory(value);
    };
    return (
        <Box className="m-10 flex w-vw">
            <Box className="flex flex-start w-1/2">
                <Box>
                    <ProductModalFromButton extraContent={null} buttonText="Add product" mainHeading="Add Product" listOfModalItems={["Name", "Price"]} />
                    
                </Box>
                <Box className="ml-10">
                    <CategoryModal/>
                </Box>
            </Box>
            <Box className="flex justify-end w-1/2 ">
                <Box className="w-1/4 ">
                    <CustomDropDown handleChangeInDropDown={handleCategory} label='Filter by Category' listOfDropDownEntries={listOfName} iconImageWithName={listOfIcon} />
                </Box>
                <Box className="w-1/4 ml-10">
                    <CustomDropDown handleChangeInDropDown={handleCategory} label='Sort by' listOfDropDownEntries={["Recently added","Sort by Price","Sort A-Z"]} iconImageWithName={[]} />
                </Box>
            </Box>

        </Box>
    )
}