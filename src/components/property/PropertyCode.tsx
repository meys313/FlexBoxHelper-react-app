import React from "react";
import './propertyCode.scss'
interface OwnProps{
    parent: {
        className: string,
        properties: {propName: string, propValue: string, current?: boolean}[],
        otherProperties?: {propName: string, propValue: string}[]
    };

    child?: {
        className: string,
        properties: {propName: string, propValue: string, current?: boolean}[]},
        otherProperties?: {propName: string, propValue: string}[]

}
export const PropertyCode: React.FC<OwnProps> = (props) => {

    const {parent} = props;
    return (
        <pre className="property-code">
            {`.${parent.className} {`}

            {parent.properties.map(property =>{
                return(
                    <span className={`property-code-prop ${property.current? 'current': ''}`}>
                         {`${property.propName}: ${property.propValue};`}
                    </span>
                )}
            )}
            {
                parent.otherProperties?.map(property=>{
                    return(
                        <span className="property-code-prop">
                            {`${property.propName}: ${property.propValue};`}
                        </span>
                    )
                })
            }


        </pre>
    )
}