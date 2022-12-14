import "./userpage.css"
import { useHistory } from "react-router-dom";


const Userpage = ({ setLoginUser }) => {
    const history = useHistory()

    return (
        <div className="userpage">
            <h1> Hello User </h1>
            <div className="contact-form">
                <label> AGE</label>
                <input className="input-field" type="text" placeholder="Age" name="Age" />
                <label> Mobile Number</label>
                <input type="tel" id="phone" className="input-field" name="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                <label> Date Of Birth</label>
                <input class="DOB" type="Date" name="DOB" />
                <label> Gender</label>
                <select name="gender" className="DOB" id="gender">
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                <div className="button" >
                    <input className="submit-btn" id="left" type="submit" value="Save" />
                    <input className="submit-btn " type="submit" onClick={() => setLoginUser({})} value="Logout" />
                </div>
            </div>
        </div>
    )
}

export default Userpage