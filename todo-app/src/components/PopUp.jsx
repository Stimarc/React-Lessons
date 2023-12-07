import React from 'react';

const PopUp = ({children,title,text, sx }) => {
    return (
        <div className='popup' style={{...sx}}>
            <h3 className="popup__title">{title}</h3>
            <p className="popup__text">{text}</p>

            {
                children && children
            }

        </div>
    );
};

export default PopUp;

PopUp.defaultProps ={
    sx: {
        borderColor: 'green',
        color: 'red',
    }
}