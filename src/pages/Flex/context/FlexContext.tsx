import React from 'react';

const data: PropertyInterface[] = [
    {
        property: {
            name: 'display',
            useTo: {key: 'container', desc:'всем элементам'},
            desc: `
            Многоцелевое свойство, которое определяет, как элемент должен быть показан в документе.
        `
        },
        defaultValue: 'flex',
        values: [
            {name: 'flex', desc: 'Элемент ведёт себя как блочный и выкладывает содержимое согласно флекс-модели.'},
            {name: 'inline-flex', desc: 'Элемент ведёт себя как строчный и выкладывает содержимое согласно флекс-модели.'},
        ],
        otherContainerProperties:[{propName: 'height', propValue: 'auto' }]

    },
    {
        property: {
            name: 'flex-direction',
            useTo: {key: 'container', desc:'flex контейнерам'},
            desc: `
        Свойство flex-direction задаёт направление основных осей в контейнере и тем самым определяет положение флексов в контейнере. На само направление также влияет значение атрибута dir у контейнера.
        `
        },
        defaultValue:'row',
        values: [
            {name: 'row', desc: 'Главная ось направлена так же, как и ориентация текста, по умолчанию слева направо. Если значение dir задано как rtl, то направление оси идёт справа налево.'},
            {name: 'row-reverse', desc: 'Похоже на значение row, но меняются местами начальная и конечная точки и главная ось направлена справа налево. Если значение dir задано как rtl, то направление оси идёт слева направо.'},
            {name: 'column', desc: 'Главная ось располагается вертикально и направлена сверху вниз.'},
            {name: 'column-reverse', desc: 'Главная ось располагается вертикально, но меняется положение начальной и конечной точек и ось направлена снизу вверх.'},

        ],

        otherContainerProperties: [{propName: 'display', propValue: 'flex' },{propName: 'height', propValue: '100%' }]

    },

    {
        property: {
            name: 'flex-wrap',
            useTo: {key: 'container', desc:'flex контейнерам'},
            desc: `
       Свойство flex-wrap Указывает, следует ли флексам располагаться в одну строку или можно занять несколько строк. Если перенос строк допускается, то свойство также позволяет контролировать направление, в котором выкладываются строки.
        `
        },
        defaultValue:'nowrap',
        values: [
            {name: 'nowrap', desc: 'nowrap'},
            {name: 'wrap', desc: 'Флексы выстраиваются в несколько строк, их направление задаётся свойством flex-direction.'},
            {name: 'wrap-reverse', desc: 'Флексы выстраиваются в несколько строк, в направлении, противоположном flex-direction.'},
        ],

        otherContainerProperties: [
            {propName: 'display', propValue: 'flex' },
            {propName: 'align-items', propValue: 'flex-start' },
            {propName: 'height', propValue: '100%' }
        ],
        otherElementProperties: [
            {propName: 'width', propValue: '40%'}
        ]

    },

    {
        property: {
            name: 'flex-flow',
            useTo: {key: 'container', desc:'flex контейнерам'},
            desc: `
      Свойство flex-flow является сокращённым свойством для отдельных свойств flex-direction и flex-wrap.
        `
        },
        defaultValue:'row nowrap',
        values: [
            {name: 'row nowrap'},
            {name: 'column-reverse'},
            {name: 'column wrap'},
            {name: 'row-reverse wrap-reverse'},
        ],

        otherContainerProperties: [
            {propName: 'display', propValue: 'flex' },
            {propName: 'height', propValue: '100%' }
        ],
        otherElementProperties: [
            {propName: 'width', propValue: '40%'},
            {propName: 'height', propValue: '40%'}
        ]

    },
    {
        property: {
            name: 'order',
            useTo: {key: 'element', desc:'flex элементам'},
            desc: `
           Свойство order определяет порядок вывода флексов внутри флекс-контейнера. Элементы располагаются согласно значениям свойства order от меньшего к большему. При равных значениях order элементы выводятся в том порядке, в каком они появляются в исходном коде.
        `
        },
        defaultValue: "0",
        values: [
            {name: "-1"},
            {name: "0"},
            {name: "1"},
        ],
        otherContainerProperties:[
            {propName: 'display', propValue: 'flex'},
            {propName: 'align-items', propValue: 'flex-start'},
            {propName: 'height', propValue: '100%' }
        ]

    },
    {
        property: {
            name: 'justify-content',
            useTo: {key: 'container', desc:'flex контейнерам'},
            desc: `
        Свойство justify-content определяет, как браузер распределяет
        пространство вокруг флекс-элементов вдоль главной оси контейнера. Это делается после того,
         как применяются размеры и автоматические отступы,
        за исключением ситуации, когда по крайней мере у одного элемента flex-grow больше нуля. При этом
         не остаётся никакого
        свободного пространства для манипулирования.
        `
        },
        defaultValue:'flex-start',
        values: [
            {name: 'flex-start', desc: 'Флексы прижаты к началу строки.'},
            {name: 'flex-end', desc: 'Флексы прижаты к концу строки.'},
            {name: 'center', desc: 'Флексы выравниваются по центру строки.'},
            {name: 'space-between', desc: 'Флексы равномерно распределяются по всей строке. Первый и последний элемент прижимаются к соответствующим краям контейнера.'},
            {name: 'space-around', desc: 'Флексы равномерно распределяются по всей строке. Пустое пространство перед первым и после последнего элементов равно половине пространства между двумя соседними элементами.'},
            {name: 'space-evenly', desc: 'Флексы распределяются так, что расстояние между любыми двумя соседними элементами, а также перед первым и после последнего, было одинаковым.'},
        ],

        otherContainerProperties: [{propName: 'display', propValue: 'flex' },{propName: 'height', propValue: '100%' }]

    },
    {
        property: {
            name: 'align-items',
            useTo: {key: 'container', desc:'flex контейнерам'},
            desc: `
                Свойство align-items выравнивает флекс-элементы внутри контейнера в перпендикулярном направлении.
        `
        },
        defaultValue: 'Stretch',
        values: [
            {name: 'flex-start', desc: 'Флексы выравниваются в начале поперечной оси контейнера.'},
            {name: 'flex-end', desc: 'Флексы выравниваются в конце поперечной оси контейнера.'},
            {name: 'center', desc: 'Флексы выравниваются по линии поперечной оси.'},
            {name: 'baseline', desc: 'Флексы выравниваются по их базовой линии.'},
            {name: 'Stretch', desc: 'Флексы растягиваются таким образом, чтобы занять всё доступное пространство контейнера.'},
        ],

        otherContainerProperties: [{propName: 'display', propValue: 'flex' },{propName: 'height', propValue: '100%' }],
        styleForWrapper: {'height': '200px'}

    },

    {
        property: {
            name: 'align-self',
            useTo: {key: 'element', desc:'flex элементам.'},
            desc: `
           Свойство align-self выравнивает флекс-элементы текущей строки, переписывая значение align-items.
        `
        },
        defaultValue: 'auto',
        values: [
            {name: 'flex-start', desc: 'Элемент выравнивается в начале поперечной оси контейнера.'},
            {name: 'flex-end', desc: 'Элемент выравнивается в конце поперечной оси контейнера'},
            {name: 'center', desc: 'Элемент выравнивается по центральной линии на поперечной оси.'},
            {name: 'baseline', desc: 'Элемент выравнивается по базовой линии текста.'},
            {name: 'Stretch', desc: 'Элемент растягивается таким образом, чтобы занять всё свободное пространство контейнера по поперечной оси.'}
        ],
        otherContainerProperties:[{propName:'display', propValue: 'flex'},{propName: 'height', propValue: '100%' }],
        styleForWrapper: {'height': '200px'}

    },

    {
        property: {
            name: 'align-content',
            useTo: {key: 'container', desc:' flex контейнеру.'},
            desc: `
           Свойство align-content задаёт тип выравнивания строк внутри flex контейнера по поперечной оси при наличии свободного пространства.
        `
        },
        defaultValue: 'stretch',
        values: [
            {name: 'flex-start', desc: 'Строки располагаются в начале поперечной оси. Каждая следующая строка идёт вровень с предыдущей.'},
            {name: 'flex-end', desc: 'Строки располагаются начиная с конца поперечной оси. Каждая предыдущая строка идёт вровень со следующей.'},
            {name: 'center', desc: 'Строки располагаются по центру контейнера.'},
            {name: 'space-between', desc: 'Строки равномерно распределяются в контейнере и расстояние между ними одинаково.'},
            {name: 'space-around', desc: 'Строки равномерно распределяются таким образом, чтобы пространство между двумя соседними строками было одинаковым. Пустое пространство перед первой строкой и после последней строки равно половине пространства между двумя соседними строками.'},
            {name: 'space-evenly', desc: 'Строки распределяются равномерно. Пустое пространство перед первой строкой и после последней строки имеет ту же ширину, что и у других строк.'},
            {name: 'stretch', desc: 'Строки равномерно растягиваются, заполняя свободное пространство.'}
        ],
        otherContainerProperties:[{propName:'display', propValue: 'flex'},{propName: 'flex-wrap', propValue: 'wrap'}, {propName: 'height', propValue: '100%' }],
        otherElementProperties: [{propName: 'width', propValue: "30%"}],
        styleForWrapper: {'height': '250px'}

    },

    {
        property: {
            name: 'flex-grow',
            useTo: {key: 'element', desc:'flex элементам'},
            desc: `
            Свойство flex-grow задает коэффициент роста flex для заданного числа. Отрицательное значение не валидно.
        `
        },
        defaultValue: "0",
        values: [
            {name: "0"},
            {name: "1"},
        ],
        otherContainerProperties:[{propName: 'display', propValue: 'flex'},{propName: 'height', propValue: '100%' }]

    },

    {
        property: {
            name: 'flex-shrink',
            useTo: {key: 'element', desc:'flex элементам'},
            desc: `
           Свойство flex-shrink задает коэффициент сжатия flex с заданным числом. Отрицательное значение не валидно.
        `
        },
        defaultValue: "1",
        values: [
            {name: "0"},
            {name: "1"},
        ],
        otherContainerProperties:[{propName: 'display', propValue: 'flex'},{propName: 'height', propValue: '100%' }],
        otherElementProperties: [{propName: 'width', propValue: '40%'}]

    },

    {
        property: {
            name: 'flex-basis',
            useTo: {key: 'element', desc:'flex элементам'},
            desc: `
           Свойство flex-basis определяет основу флекса, которая является начальным размером элемента. Похоже на свойства width и height, к которым добавляется содержимое элемента.
        `
        },
        defaultValue: "auto",
        values: [
            {name: "30%"},
            {name: "50%"},
            {name: "content"},
        ],
        otherContainerProperties:[
            {propName: 'display', propValue: 'flex'},
            {propName: 'flex-wrap', propValue: 'wrap'},
            {propName: 'align-content', propValue: 'center'},
            {propName: 'height', propValue: '100%' },
        ],
    },



]
export interface PropertyInterface{
    property: {name: string, useTo: {key: 'container' | 'element', desc: string}, desc: string};
    defaultValue: string,
    values: {name: string, desc?: string}[];
    otherContainerProperties?: {propName: string, propValue: string}[]
    otherElementProperties?: {propName: string, propValue: string}[];
    styleForWrapper?: {[key:string]: string}
}

interface FlexContextInterface{
    data: PropertyInterface[]
}
export const FlexContext: React.Context<FlexContextInterface> = React.createContext(
    {

    } as FlexContextInterface
)

interface OwnProps{
    children: React.ReactNode
}
const FlexContextProvider:  React.FC<OwnProps>  = (props, context) => {
    const flexContextProps = {
        data: data
    }


    return <FlexContext.Provider value={flexContextProps}>{props.children}</FlexContext.Provider>
}

export default FlexContextProvider;