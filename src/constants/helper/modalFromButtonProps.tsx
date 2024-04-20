import { ReactElement } from "react"

export interface modalFromButtonProps {
    buttonText:string
    mainHeading:string
    listOfModalItems:string[]
    extraContent: ReactElement|null
}