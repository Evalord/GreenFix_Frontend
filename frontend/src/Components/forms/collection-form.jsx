import React, { useState } from "react";
import styles from "./collection-form.module.css";

const CollectionForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    buildingName: "",
    date: "",
    time: "",
    collectorName: "",
    wasteCategories: {
      organic: "",
      plastic: "",
      other: "",
    },
    caretakerName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("waste-")) {
      const category = name.replace("waste-", "");
      setFormData({
        ...formData,
        wasteCategories: {
          ...formData.wasteCategories,
          [category]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      buildingName: "",
      date: "",
      time: "",
      collectorName: "",
      wasteCategories: {
        organic: "",
        plastic: "",
        other: "",
      },
      caretakerName: "",
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.formTitle}>Collection Form</h2>

      <div className={styles.inputGroup}>
        <label htmlFor="buildingName" className={styles.label}>
          Building Name
        </label>
        <input
          type="text"
          id="buildingName"
          name="buildingName"
          value={formData.buildingName}
          onChange={handleChange}
          className={styles.input}
          placeholder="Enter building name"
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="date" className={styles.label}>
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="time" className={styles.label}>
          Time
        </label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="collectorName" className={styles.label}>
          Collector Name
        </label>
        <input
          type="text"
          id="collectorName"
          name="collectorName"
          value={formData.collectorName}
          onChange={handleChange}
          className={styles.input}
          placeholder="Enter collector name"
          required
        />
      </div>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Waste Categories (kg)</legend>

        <div className={styles.inputGroup}>
          <label htmlFor="waste-organic" className={styles.label}>
            Organic
          </label>
          <input
            type="number"
            id="waste-organic"
            name="waste-organic"
            value={formData.wasteCategories.organic}
            onChange={handleChange}
            className={styles.input}
            placeholder="Enter organic waste (kg)"
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="waste-plastic" className={styles.label}>
            Plastic
          </label>
          <input
            type="number"
            id="waste-plastic"
            name="waste-plastic"
            value={formData.wasteCategories.plastic}
            onChange={handleChange}
            className={styles.input}
            placeholder="Enter plastic waste (kg)"
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="waste-other" className={styles.label}>
            Other
          </label>
          <input
            type="number"
            id="waste-other"
            name="waste-other"
            value={formData.wasteCategories.other}
            onChange={handleChange}
            className={styles.input}
            placeholder="Enter other waste (kg)"
            required
          />
        </div>
      </fieldset>

      <div className={styles.inputGroup}>
        <label htmlFor="caretakerName" className={styles.label}>
          Caretaker Name
        </label>
        <input
          type="text"
          id="caretakerName"
          name="caretakerName"
          value={formData.caretakerName}
          onChange={handleChange}
          className={styles.input}
          placeholder="Enter caretaker name"
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
          onClick={() => setFormData({
            buildingName: "",
            date: "",
            time: "",
            collectorName: "",
            wasteCategories: {
              organic: "",
              plastic: "",
              other: "",
            },
            caretakerName: "",
          })}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default CollectionForm;