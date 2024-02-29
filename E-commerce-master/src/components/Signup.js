import "../styles/login.css";
import { Link } from "react-router-dom";
const  SignUp = () => {

    return(
        <>
        <div className="login-container">
        <h1>Sign Up</h1>
         
            <div className="form-group-container">
                <span >Username:</span>
                <input type="text"  className="text"  placeholder="Enter Name......."  required/>
            </div> 
            <div className="form-group-container">
                <span  >Email:</span>
                <input type="password" className="text"   placeholder="User@gmail.com"  required/>
            </div>
             <div className="form-group-container">
                <span  >Password:</span>
                <input type="password" className="text"   placeholder="Enter Password......."  required/>
            </div>
            <div className="form-group-container">
                <span  >Re-Password:</span>
                <input type="password" className="text"   placeholder="Re-Enter Password..."  required/>
                <p>I have already account <Link to="/login" style={{textDecoration:"underline",color:"yellow"}}>Login</Link> ?</p>
            </div>
            <button >Sign up</button>
         
        </div>
        </>
    )
}
export default SignUp;
  
 