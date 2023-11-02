export const MainItem = ({index,text,}) => {
    return (
        <li className="app-item">
        <span className="app-item__part">{ index }</span>
        <p className="app-item__posts">{ text }</p>
        <button className="app-btn__posts">Delete</button>
      </li>
    );
};

