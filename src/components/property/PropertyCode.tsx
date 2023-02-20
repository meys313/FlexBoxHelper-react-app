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
    const currentProperties =  parent.properties?.map(property =>`${property.propName}: ${property.propValue};`)
    return (
        <p className="property-code">
            <button className="prop-btn-copy" onClick={()=>{
                // @ts-ignore
                navigator.clipboard.writeText(currentProperties)
                    .then(() => {

                    })
                    .catch(err => {

                    });
            }}>
                <i className="fa-solid fa-copy"></i>
            </button>
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
                        <p className="property-code-prop current">
                            {currentProperties}
                        </p>
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



        </p>
    )
}