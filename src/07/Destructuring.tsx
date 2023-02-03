import React from 'react';

export type ManType = {
    name: string
    age: number
    lessons: {title: string}[]
    address: {
        street: {
            nameStr: string
        }
    }
}
type PropsType = {
    tittle: string
    man: ManType
}
export const ManComponent: React.FC<PropsType> = (props) => {
    return (
        <div>

        </div>
    );
};
