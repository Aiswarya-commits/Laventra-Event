import React from "react";
import { useNavigate } from "react-router-dom";

const EventGridInline = () => {
  const navigate = useNavigate();

  const events = [
    {
      title: "CORPORATE EVENT",
      description: "Partner with Laventra for impactful corporate events.",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/60da576b8b440e12699c9263/423ca350-8385-45e6-811c-acecc48d4033/DSC03272-min+%282%29.jpg",
      route: "/services/corporate",
    },
    {
      title: "WEDDING EVENT",
      description: "Make your big day memorable with Laventra.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqGeaGdbrtNOR0-uImXAIUS8kwOOdDyrggSA&s",
      route: "/services/wedding",
    },
    {
      title: "BIRTHDAY PARTY",
      description: "Celebrate your moments with Laventra events.",
      imageUrl:
        "https://img.freepik.com/free-photo/couples-celebrating-birthday_23-2149891235.jpg?semt=ais_hybrid&w=740",
      route: "/services/birthday",
    },
  ];

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    padding: "30px",
  };

  const cardStyle = {
    position: "relative",
    overflow: "hidden",
    borderRadius: "15px",
    cursor: "pointer",
    transition: "transform 0.3s ease-in-out",
    height: "250px",
    marginTop: "50px",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.4s ease",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    background: "rgba(0, 0, 0, 0.6)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0,
    padding: "20px",
    textAlign: "center",
    transition: "opacity 0.3s ease",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    margin: "0 0 10px",
  };

  const descriptionStyle = {
    fontSize: "1rem",
    margin: 0,
  };

  return (
    <div>
      <h1 style={{ color: "#800080", textAlign: "center", marginTop: "80px" }}>
        Our Services
      </h1>
      <div style={containerStyle}>
        {events.map((event, index) => (
          <div
            key={index}
            style={cardStyle}
            onClick={() => navigate(event.route)}
            onMouseEnter={(e) => {
              e.currentTarget.querySelector(".overlay").style.opacity = 1;
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector(".overlay").style.opacity = 0;
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img src={event.imageUrl} alt={event.title} style={imageStyle} />
            <div className="overlay" style={overlayStyle}>
              <h3 style={titleStyle}>{event.title}</h3>
              <p style={descriptionStyle}>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventGridInline;
