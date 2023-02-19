import React from "react";
import './propertyContent.scss'

type Styles = {[key: string]: string};
interface OwnProps{
    currentStyle:{useTo: 'container'| 'element', styles: Styles};
    containerStyles?: Styles;
    elementStyles?: Styles

}
export const PropertyContent: React.FC<OwnProps> = (props: OwnProps) => {
    const {currentStyle, containerStyles, elementStyles} = props
    const randomChild = Math.floor(Math.random()*(6-1) + 1)
    console.log(randomChild)
    return(
        <div className="property-content" style={currentStyle.useTo === 'container'? currentStyle.styles: {}}>

            {[1,2,3,4].map(num => <div className="content-element">{num}</div>)}
        </div>
    )
}