import "./App.css";
import React, { useState } from "react";
const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any desired actions with the form data
    console.log("Submitted:", { name, email, address });
    // Reset the form
    setName("");
    setEmail("");
    setAddress("");
  };

  return (
    <div className="container">
      <h2>Responsive Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
