import ModalFromButton from "../ModalFromButton/ModalFromButton";

import ImageLinkDirections from "../../constants/helper/imageLinkDirections";


export default function CategoryModal(){
    return(
        <div>
            <ModalFromButton buttonText="Add Category" mainHeading="Add Category" listOfModalItems={["Add Category", "Icon-link"]} extraContent={<ImageLinkDirections/>}></ModalFromButton>
        </div>
    )
}