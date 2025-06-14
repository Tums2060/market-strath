import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import Footer from "../components/Footer";

function LandingPage(){
    const [searchTerm, setSearchTerm] = useState("");
    //sample product data
    //ADD MOCK DATA FROM HERE
    const products = [
        {
            name: "Laptop",
            image: "/images/tech-gadgets.png",
            price: "KES 30,000"
        },
        {
            name: "Shoes",
            image: "/images/shoes1-0.jpg",
            price: "KES 2,000"
        },
        {
          name: "Tumaini dishes",
          image: "/images/tumaini-dishes.jpg",
          price: "KES 3,500"
        },
        {
          name: "Siwaka Clothes",
          image: "/images/maasai-wear.jpg",
          price: "KES 2,540"

        },
        {
          name: "Imani Cleaners",
          image: "/images/house-cleaning.jpg",
          price: "KES 4,500"
        },
        {
          name: "Madaa Pizza",
          image: "/images/pizza-kenya.jpg",
          price: "KES /==="
        },
        {
          name: "Afro-Dishes",
          image: "/images/githeri.jpg",
          price: "KES /==="
        },
        {
          name: "Campus Coffee",
          image: "/images/coffee-image.jpg",
          price: "KES /==="
        },
        {
          name: "Chap Chap Tailoring",
          image: "/images/tailoring-services.jpeg",
          price: "KES /==="
        },
        {
          name: "Kiliwomen Bags",
          image: "/images/women-bags.jpeg",
          price: "KES /==="
        }




    ];
    //Filtering based on search term
    const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return(
      <div style={{minHeight: "100vh", display: "flex", flexDirection: "column"}}>
        <div>
      <header style={{ display: "flex", justifyContent: "space-between", padding: "1rem" }}>
        <h1>🛒 Strathmore Market Place</h1>
        <Link to="/vendor-register">
          <button style={{ padding: "0.5rem 1rem" }}>Sell</button>
        </Link>
      </header>

      {/* Search bar */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      

      <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "1rem" }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p, idx) => (
            <ProductCard key={idx} name={p.name} image={p.image} price={p.price} />
          ))
        ) : (
          <p style={{ textAlign: "center", fontSize: "1.2rem", color: "gray" }}>No products match your search.</p>
        )}
      </section>

        </div>
      <Footer />
    </div>
        

    
    );
}

export default LandingPage;