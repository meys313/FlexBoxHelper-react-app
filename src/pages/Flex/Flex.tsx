import React from "react";
import './flex.scss';
import {PropertyItem} from "../../components/property/PropertyItem";
export const Flex: React.FC = () => {
    return(
        <div className="container">
            <div className="flex-header">
                <h1 className="flex-header__title">Шпаргалка по Flexbox CSS</h1>
                <p className="flex-header__desc">
                    Вся документация по свойству <span>flex</span> находится на <a href="https://www.w3.org/TR/css-flexbox-1/#flex-containers">официальном сайте</a>.
                </p>
            </div>


            <PropertyItem/>

        </div>
    )
}