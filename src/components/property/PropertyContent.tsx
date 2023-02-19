import React from "react";
import './propertyContent.scss'

type Styles = {[key: string]: string};
interface OwnProps{
    currentStyle:{useTo: 'container'| 'element', styles: Styles};
    containerStyles?: Styles;
    elementStyles?: Styles,
    text?: string

}
export const PropertyContent: React.FC<OwnProps> = (props: OwnProps) => {
    const {currentStyle, containerStyles, elementStyles, text} = props

    const styleForContainer = currentStyle.useTo === 'container'? {...currentStyle.styles, ...containerStyles}: containerStyles


    return(
            <>
                {text? <span style={{display: 'inline-block',fontSize: "20px", padding: '10px 10px 10px 0'}}>{text}</span>: null}
                <div className="property-content" style={styleForContainer}>
                    {[1,2,3,4].map(num => <div className={`content-element ${currentStyle.useTo === 'element' && num === 3? 'active-child' : ''}`}
                                               style={currentStyle.useTo === 'element' && num === 3?
                                                   {...currentStyle.styles, ...elementStyles} : {...elementStyles}
                                               }>
                        {num}
                    </div>)}
                </div>
            </>



    )
}