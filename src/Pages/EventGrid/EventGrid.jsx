import React from "react";
import { useNavigate } from "react-router-dom";

const EventPage = () => {
  const navigate = useNavigate();
  const events = [
    {
      title: "MICHAEL SMITH IN CONCERT",
      date: "August 15",
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?fm=jpg&q=60&w=3000",
      index: 1,
    },
    {
      title: "STREET ART FEST",
      date: "November 28",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?fm=jpg&q=60&w=3000",
      index: 2,
    },
    {
      title: "ANABELLE IN CONCERT",
      date: "August 28",
      image:
        "https://us.123rf.com/450wm/tsuguliev/tsuguliev2208/tsuguliev220800030/190927258-a-crowded-concert-hall-with-scene-stage-orange-and-yellow-lights-rock-show-performance-with-people.jpg?ver=6",
      index: 3,
    },
    {
      title: "90'S DISCO NIGHT",
      date: "August 28",
      image:
        "https://us.123rf.com/450wm/kviktor/kviktor1610/kviktor161000007/78734596-rock-concert-silhouettes-of-happy-people-raising-up-hands.jpg",
      index: 4,
    },
    {
      title: "MODERN BALLET",
      date: "August 25",
      image:
        "https://www.jesvenues.com/images/services/corporate-photography/corporate-event-photography-in-hyderabad-1.jpg",
      index: 5,
    },
    {
      title: "SMOKE SHOW",
      date: "August 28",
      image: "https://shreesaievents.com/wp-content/uploads/2024/08/events.jpg",
      index: 6,
    },
    {
      title: "DJ NIGHT",
      date: "August 28",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyi8xvCv_QLHXLd29MW-ia7fOZ-iJAuxdc6A&s",
      index: 7,
    },
    {
      title: "DJ ON RENT IN BHIWADI",
      date: "August 30",
      image:
        "https://www.dgevent.in/dj/sources/images/dj-on-rent-in-bhiwadi.webp",
      index: 8,
    },
    {
      title: "COCKTAIL PARTY",
      date: "December 28",
      image: "https://mastizone.co.in/small/dj1.jpg",
      index: 9,
    },
    {
      title: "WATER THEME PARTY",
      date: "August 20",
      image:
        "https://as2.ftcdn.net/jpg/02/30/78/31/1000_F_230783125_uT2MujnZ2lhBuroMIjpggGiP9QWDCthx.jpg",
      index: 10,
    },
  ];

  const handleCardClick = (eventIndex) => {
    if (eventIndex === 1) {
      navigate("/programone");
    } else if (eventIndex === 2) {
      navigate("/programtwo");
    } else if (eventIndex === 3) {
      navigate("/programthree");
    } else if (eventIndex === 4) {
      navigate("/programfour");
    } else if (eventIndex === 5) {
      navigate("/programfive");
    } else if (eventIndex === 6) {
      navigate("/programsix");
    } else if (eventIndex === 7) {
      navigate("/programseven");
    } else if (eventIndex === 8) {
      navigate("/programeight");
    } else if (eventIndex === 9) {
      navigate("/programnine");
    } else if (eventIndex === 10) {
      navigate("/programten");
    }
  };

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        background: "#fff",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          background: "linear-gradient(to right, #6a0dad, #8a2be2)",
          padding: "80px 20px",
          color: "white",
          position: "relative",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <button
            style={{
              padding: "10px 25px",
              background: "white",
              color: "#6a0dad",
              borderRadius: "25px",
              border: "none",
              fontWeight: "bold",
            }}
          >
            Buy Tickets
          </button>
        </div>
        <svg
          viewBox="0 0 1440 320"
          style={{ position: "absolute", bottom: 0, left: 0, width: "100%" }}
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,192L120,197.3C240,203,480,213,720,192C960,171,1200,117,1320,90.7L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          />
        </svg>
      </div>

      <div
        style={{
          background: "linear-gradient(to bottom right, #4b0082, #8a2be2)",
          padding: "60px 30px",
        }}
      >
        <h2
          style={{ textAlign: "center", color: "white", marginBottom: "40px" }}
        >
          Upcoming Events
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {events.map((event, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(event.index)}
              style={{
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                transition: "transform 0.3s",
                display: "flex",
                flexDirection: "column",
                height: "400px",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <div style={{ flex: 1, overflow: "hidden" }}>
                <img
                  src={event.image}
                  alt={event.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                style={{
                  background: "rgba(0,0,0,0.6)",
                  color: "white",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                <h3 style={{ margin: "5px 0", fontSize: "16px" }}>
                  {event.title}
                </h3>
                <p style={{ margin: 0, fontSize: "14px" }}>{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventPage;
