import React from "react";
import ManufacturingForm from "../../../Components/forms/manufacturing-form";
import styles from "./page.module.css";

const ManufacturingPage = () => {
  const handleManufacturingSubmit = (data) => {
    console.log("Manufacturing Data Submitted:", data);
    // Add logic to send data to the backend or update state
    alert("Manufacturing data submitted successfully!");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Manufacturing Process</h1>
      <p className={styles.description}>
        Please fill out the form below to record the details for the manufacturing process.
      </p>
      <ManufacturingForm onSubmit={handleManufacturingSubmit} />
    </div>
  );
};

export default ManufacturingPage;