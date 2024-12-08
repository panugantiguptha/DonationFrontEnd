import React, { useState } from "react";

function AddDonor() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    donationFor: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Donor Details:", formData);
    // Add logic to submit form data to the server
    alert("Donor added successfully!");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "30px auto", padding: "20px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", borderRadius: "8px", backgroundColor: "#fff" }}>
      <h3 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>Add Donor</h3>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <label style={{ fontWeight: "bold", color: "#555" }}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter donor's name"
            required
            style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px", marginTop: "5px" }}
          />
        </label>
        <label style={{ fontWeight: "bold", color: "#555" }}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter donor's email"
            required
            style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px", marginTop: "5px" }}
          />
        </label>
        <label style={{ fontWeight: "bold", color: "#555" }}>
          Donation For:
          <input
            type="text"
            name="donationFor"
            value={formData.donationFor}
            onChange={handleChange}
            placeholder="What is the donation for?"
            required
            style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px", marginTop: "5px" }}
          />
        </label>
        <label style={{ fontWeight: "bold", color: "#555" }}>
          Amount:
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Enter donation amount"
            required
            style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px", marginTop: "5px" }}
          />
        </label>
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#1976d2",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add Donor
        </button>
      </form>
    </div>
  );
}

export default AddDonor;
