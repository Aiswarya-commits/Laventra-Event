import React from "react";
import { Link } from "react-router-dom";
import venues from "../data/venues";

const EventVenue = () => {
  return (
    <div
      style={{
        background: "#f5f5f5",
        padding: "40px 20px",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{ textAlign: "center", marginBottom: "30px", color: "#6a0dad" }}
      >
        📍 All Event Venues
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {venues.map((venue) => (
          <Link
            key={venue.id}
            to={`/venues/${venue.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                background: "white",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.03)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                src={venue.image}
                alt={venue.name}
                style={{ width: "100%", height: "180px", objectFit: "cover" }}
              />
              <div style={{ padding: "15px" }}>
                <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>
                  {venue.name}
                </h3>
                <p style={{ fontSize: "14px" }}>{venue.address}</p>
                <p style={{ fontSize: "14px" }}>Capacity: {venue.capacity}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventVenue;
