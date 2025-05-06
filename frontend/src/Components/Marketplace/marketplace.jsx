import React, { useState, useEffect } from "react";
import "./Marketplace.css";

const Marketplace = ({ userType }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Default data for products based on user type
    const defaultData = {
      MRF: [
        { id: 1, name: "Plastic Waste", price: "$100/tonne", description: "High-quality segregated plastic waste." },
        { id: 2, name: "Metal Scrap", price: "$200/tonne", description: "Recyclable metal scrap from MRF." },
        { id: 3, name: "Paper Waste", price: "$50/tonne", description: "Clean and sorted paper waste." },
      ],
      Recycler: [
        { id: 4, name: "Recycled Plastic Pellets", price: "$500/tonne", description: "Processed plastic pellets for manufacturing." },
        { id: 5, name: "Recycled Metal Sheets", price: "$800/tonne", description: "High-quality recycled metal sheets." },
        { id: 6, name: "Recycled Paper Rolls", price: "$300/tonne", description: "Recycled paper rolls for packaging." },
      ],
      Manufacturer: [
        { id: 7, name: "Eco-friendly Chair", price: "$25", description: "Chair made from recycled plastic." },
        { id: 8, name: "Recycled Notebook", price: "$5", description: "Notebook made from 100% recycled paper." },
        { id: 9, name: "Recycled Metal Bottle", price: "$15", description: "Durable water bottle made from recycled metal." },
      ],
    };

    // Set products based on user type
    setProducts(defaultData[userType] || []);
  }, [userType]);

  const handlePlaceOrder = (productId) => {
    alert(`Order placed for product ID: ${productId}`);
    // Add logic to handle order placement
  };

  return (
    <div className="marketplace">
      <h2>Marketplace</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button onClick={() => handlePlaceOrder(product.id)} className="order-button">
              Place Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;