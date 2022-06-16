import { useEffect, useState } from 'react';
import { IItem } from './index';

export function Keys(props: { initialData: IItem[]; sorting: 'ASC' | 'DESC' }) {
    let initialData = props.initialData;
    const sorting = props.sorting;

    useEffect(() => {
        if (sorting === 'ASC') {
            initialData = initialData.reverse();
        } else if (sorting === 'DESC') {
            initialData = initialData.reverse();
        }
    }, [sorting]);

    const names = initialData.map((item) => {
        return <li key={item.id}>{item.name}</li>;
    });

    return (
        <div>
            <ul>{names}</ul>
        </div>
    );
}
