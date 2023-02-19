import React from "react";
import {useContext} from "react";
import {FlexContext} from "./context/FlexContext";
import {PropertyItem} from "../../components/property/PropertyItem";
interface OwnProps{

}
export const FlexPropertyList: React.FC<OwnProps> = (props) => {
    const flexContext = useContext(FlexContext)
    return(
       <>
           {
               flexContext.data.map(data => <PropertyItem data={data}/>)
           }
       </>
    )
}