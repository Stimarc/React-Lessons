import { useUserContext } from "./../hooks";

export const BottomLevel = () => {
    const userInfo = useUserContext();
    const {name,role} = userInfo;
    return (
          <div className="bottom">
            <h2>Bottom level</h2>
            <ul>
              <li>name:{ name }</li>
              <li>role:{ role }</li>
            </ul>
          </div>
        )
    
}

