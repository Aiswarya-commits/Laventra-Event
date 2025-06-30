import React, { useState } from "react";

const EventBookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
    tickets: 1,
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Booking successful for ${formData.event}`);
    setFormData({
      name: "",
      email: "",
      phone: "",
      event: "",
      tickets: 1,
      date: "",
    });
  };

  const eventsList = [
    "MICHAEL SMITH IN CONCERT",
    "STREET ART FEST",
    "ANABELLE IN CONCERT",
    "90'S DISCO NIGHT",
    "MODERN BALLET",
    "SMOKE SHOW",
    "DJ NIGHT",
    "DJ ON RENT IN BHIWADI",
    "COCKTAIL PARTY",
    "WATER THEME PARTY",
  ];

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "20px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        borderRadius: "10px",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Event Booking
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <select
          name="event"
          value={formData.event}
          onChange={handleChange}
          required
        >
          <option value="">Select Event</option>
          {eventsList.map((event, index) => (
            <option key={index} value={event}>
              {event}
            </option>
          ))}
        </select>
        <input
          type="number"
          name="tickets"
          placeholder="Number of Tickets"
          min="1"
          value={formData.tickets}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          style={{
            background: "#6a0dad",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default EventBookingForm;
