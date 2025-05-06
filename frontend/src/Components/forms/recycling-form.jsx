import React, { useState } from "react";
import styles from "./recycling-form.module.css";

const RecyclingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    materialType: "",
    quantity: "",
    recyclingDate: "",
    operatorName: "",
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
    onSubmit(formData);
    setFormData({
      materialType: "",
      quantity: "",
      recyclingDate: "",
      operatorName: "",
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.formTitle}>Recycling Form</h2>

      <div className={styles.inputGroup}>
        <label htmlFor="materialType" className={styles.label}>
          Material Type
        </label>
        <input
          type="text"
          id="materialType"
          name="materialType"
          value={formData.materialType}
          onChange={handleChange}
          className={styles.input}
          placeholder="Enter material type"
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="quantity" className={styles.label}>
          Quantity (kg)
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          className={styles.input}
          placeholder="Enter quantity"
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="recyclingDate" className={styles.label}>
          Recycling Date
        </label>
        <input
          type="date"
          id="recyclingDate"
          name="recyclingDate"
          value={formData.recyclingDate}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="operatorName" className={styles.label}>
          Operator Name
        </label>
        <input
          type="text"
          id="operatorName"
          name="operatorName"
          value={formData.operatorName}
          onChange={handleChange}
          className={styles.input}
          placeholder="Enter operator name"
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
              materialType: "",
              quantity: "",
              recyclingDate: "",
              operatorName: "",
            })
          }
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default RecyclingForm;