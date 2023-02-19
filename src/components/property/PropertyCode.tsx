import React from "react";
import './propertyCode.scss'

interface Property{
    className: string,
    properties?: {propName: string, propValue: string}[],
    otherProperties?: {propName: string, propValue: string}[]
}
interface OwnProps{
    parent: Property;

    child?: Property;

    childActive?: Property;

}
export const PropertyCode: React.FC<OwnProps> = (props) => {

    const {parent, child, childActive} = props;
    return (
        <pre className="property-code">

            <div className="property-code__style-block">
                {`.${parent.className} {`}

                {
                    parent.otherProperties?.map(property=>{
                        return(
                            <span className="property-code-prop">
                            {`${property.propName}: ${property.propValue};`}
                        </span>
                        )
                    })
                }
                {parent.properties?.map(property =>{
                    return(
                        <span className="property-code-prop current">
                         {`${property.propName}: ${property.propValue};`}
                    </span>
                    )}
                )}
                {'}'}
            </div>

            {child?
                <div className="property-code__style-block">
                {`.${child.className}{`}
                {
                    child.otherProperties?.map(property=>{
                        return(
                            <span className="property-code-prop">
                            {`${property.propName}: ${property.propValue};`}
                        </span>
                        )
                    })
                }
                {`}`}
            </div>
                : null
            }

            {childActive?
                <div className="property-code__style-block">
                {`.${childActive.className}{`}
                {childActive.properties?.map(property =>{
                    return(
                        <span className="property-code-prop current">
                         {`${property.propName}: ${property.propValue};`}
                    </span>
                    )}
                )}
                {`}`}
            </div>
                : null
            }



        </pre>
    )
}