import React from 'react';
import { MainItem } from './MainItem';

export const MainApp = ({ title, data }) => {
    return (
        <div>
            <h2>{ title }</h2>
            <ul className="my-app">
                {
                    data.map((lorem, index) => {
                        return <MainItem index={index + 1} text={lorem.text} />
                    })
                }

            </ul>
        </div>


    );
};

