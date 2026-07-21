import { useContext } from "react";
import UserContext from "./UserContext";

function Child() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Welcome {user}</h2>
    </div>
  );
}

export default Child;