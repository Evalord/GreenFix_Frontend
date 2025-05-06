import React from "react"
import "./Card.css" // Import the CSS file for styling
const cardStyles = {
    card: {
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
    },
    cardHeader: {
      padding: "1rem 1.5rem",
      borderBottom: "1px solid #e5e7eb",
    },
    cardTitle: {
      fontSize: "1.125rem",
      fontWeight: 600,
      color: "#333",
      margin: 0,
    },
    cardContent: {
      padding: "1.5rem",
    },
  }
  
  const Card = ({ title, children, style }) => {
    return (
      <div style={{ ...cardStyles.card, ...style }}>
        <div style={cardStyles.cardHeader}>
          <h2 style={cardStyles.cardTitle}>{title}</h2>
        </div>
        <div style={cardStyles.cardContent}>{children}</div>
      </div>
    )
  }
  
  export default Card
  