import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

function LandingPage(){
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
        }

    ];

    return(
        <div>
      <header style={{ display: "flex", justifyContent: "space-between", padding: "1rem" }}>
        <h1>🛒 Market Place</h1>
        <Link to="/vendor-register">
          <button style={{ padding: "0.5rem 1rem" }}>Sell</button>
        </Link>
      </header>

      <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {products.map((p, idx) => (
          <ProductCard key={idx} name={p.name} image={p.image} price={p.price} />
        ))}
      </section>

      
    </div>
    
    );
}

export default LandingPage;