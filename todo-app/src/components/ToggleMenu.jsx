import React from "react";
import { useToggle } from "../hooks/useToggle";


const ToggleMenu = () => {
    const [active, toggleActive] = useToggle(false);

    return (
        <>
            <header className="header">
                <button onClick={() => toggleActive()}>menu</button>
                
            </header>

            <div className={`{toogle-menu${active ? 'active' : ''}`}>
                    <h3>Menu</h3>
                    <ul>
                        <li>Item1</li>
                        <li>Item2</li>
                        <li>Item3</li>
                    </ul>
                </div>
        </>


    );
};

export default ToggleMenu;