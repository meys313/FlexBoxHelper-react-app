import React, {useState} from "react";
import './propertyItem.scss'
import {PropertyContent} from "./PropertyContent";
import {PropertyCode} from "./PropertyCode";
import {PropertyInterface} from "../../pages/Flex/context/FlexContext";

// interface propertyInterface{
//     property: {name: string, useTo: {key: 'container' | 'element', desc: string}, desc: string};
//     values: {name: string, desc: string}[];
//     otherContainerProperties?: {propName: string, propValue: string}[]
//     otherElementProperties?: {propName: string, propValue: string}[]
// }
// const testData: propertyInterface = {
//     property: {
//         name: 'justify-content',
//         useTo: {key: 'container', desc:'flex контейнерам'},
//         desc: `
//         Свойство justify-content определяет, как браузер распределяет
//         пространство вокруг флекс-элементов вдоль главной оси контейнера. Это делается после того,
//          как применяются размеры и автоматические отступы,
//         за исключением ситуации, когда по крайней мере у одного элемента flex-grow больше нуля. При этом
//          не остаётся никакого
//         свободного пространства для манипулирования.
//         `
//     },
//
//     values: [
//         {name: 'flex-start', desc: 'Флексы прижаты к началу строки.'},
//         {name: 'flex-end', desc: 'Флексы прижаты к концу строки.'},
//         {name: 'center', desc: 'Флексы выравниваются по центру строки.'},
//         {name: 'space-between', desc: 'Флексы равномерно распределяются по всей строке. Первый и последний элемент прижимаются к соответствующим краям контейнера.'},
//         {name: 'space-around', desc: 'Флексы равномерно распределяются по всей строке. Пустое пространство перед первым и после последнего элементов равно половине пространства между двумя соседними элементами.'},
//         {name: 'space-evenly', desc: 'Флексы распределяются так, что расстояние между любыми двумя соседними элементами, а также перед первым и после последнего, было одинаковым.'},
//     ],
//
//     otherContainerProperties: [{propName: 'height', propValue: '100%' }]
//
//
// }

interface OwnProps{
    data: PropertyInterface
}
export const PropertyItem: React.FC<OwnProps> = (props, context) => {
    const {property,defaultValue, values, otherContainerProperties, otherElementProperties, styleForWrapper} = props.data;
    const [value, setValue] = useState(values[0].name)
    // const test = otherContainerProperties?.reduce((acc, v) => ({...acc, ...v}), {})

    return (
        <div className="property">
            <h2>{property.name}</h2>

            <div className="property-buttons">
                {values.map(v => <button
                    className={`property-btn ${v.name === value? 'active': ''}`}
                    onClick={()=> setValue(v.name)}>
                    {v.name}
                </button>)}
            </div>

            <div className="property-display">
                <div className="property-content__box" style={styleForWrapper}>
                    <PropertyContent
                        text = {property.name === 'display'? 'текст': undefined}
                        currentStyle={{useTo:property.useTo.key, styles:{[property.name]: value}}}
                        containerStyles={otherContainerProperties?.map
                            (prop => {return{[prop.propName]: prop.propValue}}).reduce
                            ((acc, v) => ({...acc, ...v}), {})}

                        elementStyles={otherElementProperties?.map
                        (prop => {return{[prop.propName]: prop.propValue}}).reduce
                        ((acc, v) => ({...acc, ...v}), {})}
                    />
                </div>
                <div className="property-code__box">
                    <PropertyCode
                        parent = { {

                            className: 'parent',
                            properties:  property.useTo.key === "container"?[
                                {
                                    propName: property.name,
                                    propValue: value,
                                },
                            ]: undefined,

                            otherProperties: otherContainerProperties?.map(prop=>{
                                return {propName: prop.propName, propValue: prop.propValue}
                            })
                         }
                        }

                        child={otherElementProperties? {
                            className: 'child',
                            otherProperties: otherElementProperties?.map(prop=>{
                                return {propName: prop.propName, propValue: prop.propValue}
                            })
                        }: undefined}

                        childActive={property.useTo.key === 'element'? {
                            className: 'child-active',
                            properties: [
                                {
                                    propName: property.name,
                                    propValue: value
                                }
                            ]
                        }: undefined}

                    />
                </div>
            </div>


            <div className="property-detail">
                <p className="property-desc">
                    {property.desc}
                </p>
                <p className="desc-paragraph">
                    <span className="desc-title">Применяется к:</span> {property.useTo.desc}.
                </p>
                <p className="desc-paragraph">
                    <span className="desc-title">значение по умолчанию:</span> {defaultValue}.
                </p>

                <div className="value-descriptions">
                    {values.map(value => value.desc? <p className="desc-paragraph">
                        <span className="desc-title">{value.name}</span>
                        <p className="value-desc">{value.desc}</p>
                    </p>: null)}
                </div>
            </div> {/*  DETAIL  */}


        </div>
    )
}