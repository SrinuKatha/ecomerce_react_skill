import "../styles/login.css";
import { Link } from "react-router-dom";
const Loginpage = () => {

    return(
        <>
        <div className="login-container">
        <h1>Login</h1>
         
            <div className="form-group-container">
                <span >Username:</span>
                <input type="text"  className="text"  placeholder="Enter Name......."  required/>
            </div> 
             <div className="form-group-container">
                <span  >Password:</span>
                <input type="password" className="text"   placeholder="Enter Password......."  required/>
                <p>I don't have account <Link to="/signup" style={{textDecoration:"underline",color:"yellow"}}>Sign up</Link> ?</p>
            </div>
            <button >Login</button>
         
        </div>
        </>
    )
}
export default Loginpage;
  
 