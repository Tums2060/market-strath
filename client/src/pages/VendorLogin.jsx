import { useState } from "react";
import { Link } from "react-router-dom";

function VendorLogin(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e){
        e.preventDefault();
        console.log("Loggin in with", email, password);
    }

    return(
        <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto"}}>
            <h2>Vendor Login</h2>
            <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column"}}>
                <label>Email: </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ marginBottom: "1rem"}}
                />

                <button type="submit" style={{ padding: "0.re" }}>Login</button>
            </form>

            <p>Don't have an account?</p>
            <Link to="/vendor-register">
                <button style={{ padding: "0.5rem" }}>Register Here</button>
            </Link>
        </div>
    );
}

export default VendorLogin;