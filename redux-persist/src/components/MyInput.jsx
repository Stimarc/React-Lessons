import React from 'react';

export const MyInput = ({ label, name, register, regOpts }) => {
    return (
        <label>
            {label}
            <input type="text"{...register(name, { regOpts }) } />
        </label>
    );
};

