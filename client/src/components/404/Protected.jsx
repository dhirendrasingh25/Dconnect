
import { Navigate } from "react-router-dom";

const Protected = ({children}) => {
    const id = localStorage.userInfo
    // console.log(id);
    if (!id) {
        return <Navigate to="/login" ></Navigate>;
    }else{
        
        return children;
    }
    
}

export default Protected
