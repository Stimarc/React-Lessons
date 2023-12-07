import  { useState } from 'react';


export const useToggle = (initialValue) => {
    const [active,setActive] = useState(initialValue);

    const toggle =() => {
        setActive(prev => !prev);
    }

    return [active,toggle];
}