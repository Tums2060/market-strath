import { useState } from "react";
import { Link } from "react-router-dom";

function VendorRegister(){

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
        //replace with real registration logic
        console.log("Registering Vendor: ", form);
    }

    return(
        <div style={{padding: "2rem", maxWidth: "500px", margin: "auto"}}>
            <h2>Vendor Registration</h2>
            <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column"}}>
                <label>Name: </label>
                <input name="name" value={form.name} onChange={handleChange} required  style={{marginBottom: "1rem"}} />

                <label>Email: </label>
                <input name="email" value={form.email} onChange={handleChange} required style={{marginBottom: "1rem"}} />

                <label>Phone: </label>
                <input name="phone" value={form.phone} onChange={handleChange} required style={{marginBottom: "1rem"}} />

                <label>Locations: </label>
                <input name="locations" value={form.locations} onChange={handleChange} required style={{marginBottom: "1rem"}} />

                <label>Password: </label>
                <input name="password" value={form.password} onChange={handleChange} required style={{marginBottom: "1rem"}} />
            </form>

            <p>Already have an account</p>
            <Link to="/login-vendor">
            <button style={{ padding: "0.5rem" }}>Login Here</button>
            </Link>
        </div>
    );
}




export default VendorRegister;