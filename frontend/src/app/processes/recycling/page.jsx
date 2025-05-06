import React from "react";
import RecyclingForm from "../../../Components/forms/recycling-form";
import styles from "./page.module.css";

const RecyclingPage = () => {
  const handleRecyclingSubmit = (data) => {
    console.log("Recycling Data Submitted:", data);
    // Add logic to send data to the backend or update state
    alert("Recycling data submitted successfully!");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recycling Process</h1>
      <p className={styles.description}>
        Please fill out the form below to record the details for the recycling process.
      </p>
      <RecyclingForm onSubmit={handleRecyclingSubmit} />
    </div>
  );
};

export default RecyclingPage;