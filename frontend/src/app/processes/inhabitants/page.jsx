import React, { useState } from "react";
import styles from "./page.module.css";

const InhabitantsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    occupation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inhabitants Data Submitted:", formData);
    alert("Inhabitants data submitted successfully!");
    setFormData({
      name: "",
      age: "",
      address: "",
      occupation: "",
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Inhabitants Information</h1>
      <p className={styles.description}>
        Please fill out the form below to record the details of the inhabitants.
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            placeholder="Enter name"
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="age" className={styles.label}>
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className={styles.input}
            placeholder="Enter age"
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="address" className={styles.label}>
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={styles.input}
            placeholder="Enter address"
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="occupation" className={styles.label}>
            Occupation
          </label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            className={styles.input}
            placeholder="Enter occupation"
            required
          />
        </div>

        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
          <button
            type="button"
            className={styles.cancelButton}
            onClick={() =>
              setFormData({
                name: "",
                age: "",
                address: "",
                occupation: "",
              })
            }
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default InhabitantsPage;