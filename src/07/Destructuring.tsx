import React from 'react';

export type ManType = {
    name: string
    age: number
    lessons: {title: string; name?: string}[]
    address: {
        street: {
            nameStr: string
        }
    }
}
type PropsType = {
    title: string
    man: ManType
    car: {
        model: string
    }
}

function useDimychState(m: string) {
    return [m, function(){} ]
}
function useDimychState2(m: string) {
    return {
        message2: m,
        setMessage2: function(){}
    }
}

export const ManComponent: React.FC<PropsType> = (props) => {
//export const ManComponent: React.FC<PropsType> = ( {title, man, ...props} ) => {
    //const {title} = props;
    //const {name} = props.man;
    //const {title, man:{name}} = props
    const {title, man, ...restProps} = props
    //const {title, man} = props

    const [message, setMessage] = useDimychState('hello')  //даём любые названия переменным
    const {message2, setMessage2} = useDimychState2('hello')  //должны использовать названия ключей в качестве переменным

    return (
        <div>
            <h1>{title}</h1>
            {/*<p>{name}</p>*/}
            <p>{man.name}</p>
            <p>{restProps.car.model}</p>
            {/*<p>{props.car.model}</p>*/}
        </div>
    );
};
