import React from "react";
import CollectionForm from "../../../../Components/forms/collection-form";
import styles from "./page.module.css";

const Collection2Page = () => {
  const handleCollectionSubmit = (data) => {
    console.log("Collection 2 Data Submitted:", data);
    // Add logic to send data to the backend or update state
    alert("Collection 2 data submitted successfully!");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Collection 2 Process</h1>
      <p className={styles.description}>
        Please fill out the form below to record the details for Collection 2.
      </p>
      <CollectionForm onSubmit={handleCollectionSubmit} />
    </div>
  );
};

export default Collection2Page;