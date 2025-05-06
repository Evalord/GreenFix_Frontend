import React, { useState } from "react";
import styles from "./manufacturing-form.module.css";

const ManufacturingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    productName: "",
    productionDate: "",
    quantity: "",
    unit: "kg",
    supervisorName: "",
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
      productName: "",
      productionDate: "",
      quantity: "",
      unit: "kg",
      supervisorName: "",
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.formTitle}>Manufacturing Form</h2>

      <div className={styles.inputGroup}>
        <label htmlFor="productName" className={styles.label}>
          Product Name
        </label>
        <input
          type="text"
          id="productName"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
          className={styles.input}
          placeholder="Enter product name"
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="productionDate" className={styles.label}>
          Production Date
        </label>
        <input
          type="date"
          id="productionDate"
          name="productionDate"
          value={formData.productionDate}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="quantity" className={styles.label}>
          Quantity
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
        <label htmlFor="unit" className={styles.label}>
          Unit
        </label>
        <select
          id="unit"
          name="unit"
          value={formData.unit}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="kg">Kilograms (kg)</option>
          <option value="tons">Tons</option>
        </select>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="supervisorName" className={styles.label}>
          Supervisor Name
        </label>
        <input
          type="text"
          id="supervisorName"
          name="supervisorName"
          value={formData.supervisorName}
          onChange={handleChange}
          className={styles.input}
          placeholder="Enter supervisor name"
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
              productName: "",
              productionDate: "",
              quantity: "",
              unit: "kg",
              supervisorName: "",
            })
          }
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default ManufacturingForm;