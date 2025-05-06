import React from "react";
import styles from "./card.module.css";

const Card = ({ title, children, className = "", style = {} }) => {
  return (
    <div className={`${styles.card} ${className}`} style={style}>
      {title && (
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>{title}</h2>
        </div>
      )}
      <div className={styles.cardContent}>{children}</div>
    </div>
  );
};

export default Card;