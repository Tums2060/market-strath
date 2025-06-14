import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function UserRegister(){

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        locations: "",
        password: "",

    });

    function handleChange(e){
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleSubmit(e){
        e.preventDefault();
        //will replace with real registration logic
        console.log("Registering Vendor: ", form);
    }

    return(
    <div style={{minHeight: "100vh", display: "flex", flexDirection: "column"}}>
        <div style={{padding: "2rem", maxWidth: "500px", margin: "auto", border: "1px solid #ddd", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1", backgroundColor: "#f9f9f9", width:"100%"}}>
            <h2 style={{textAlign: "center", marginBottom: "1.5rem"}}>Buyer Registration</h2>
            <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", width:"100%", maxWidth:"600px"}}>
                <label>Name: </label>
                <input name="name" value={form.name} onChange={handleChange} required  style={{marginBottom: "1rem", padding: "0.5rem", borderRadius: "12px"}} />

                <label>Email: </label>
                <input name="email" value={form.email} onChange={handleChange} required style={{marginBottom: "1rem", padding: "0.5rem", borderRadius: "12px"}} />

                <label>Phone: </label>
                <input name="phone" value={form.phone} onChange={handleChange} required style={{marginBottom: "1rem", padding: "0.5rem", borderRadius: "12px"}} />

                <label>Locations: </label>
                <input name="locations" value={form.locations} onChange={handleChange} required style={{marginBottom: "1rem", padding: "0.5rem", borderRadius: "12px"}} />

                <label>Password: </label>
                <input name="password" value={form.password} onChange={handleChange} required style={{marginBottom: "1rem", padding: "0.5rem", borderRadius: "12px"}} />

                <button 
                    type="submit"
                    style={{
                        padding: "0.75rem",
                        backgroundColor: "#4CAF50",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        fontSize: "16px",
                        cursor: "pointer"
                    }}>Register</button>
            </form>

            <p>Already have an account</p>
            <Link to="/login-buyer">
            <button style={{ padding: "0.5rem" }}>Login Here</button>
            </Link>
                </div>
            
                    <Footer />
        </div>
    );
}




export default UserRegister;