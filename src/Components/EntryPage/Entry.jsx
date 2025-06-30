import React from "react";

const Entry = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <img
        src="https://clubsixteen.com.np/wp-content/uploads/2023/08/club_sixteen_late-night-party-scaled.jpg"
        alt="Laventra Party"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(0.6)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <div>
          <img
            src="https://png.pngtree.com/png-vector/20240614/ourmid/pngtree-creative-floral-l-logo-icon-art-illustration-high-resulation-transfarent-background-png-image_12733299.png"
            alt=""
            style={{ width: "100px", height: "100px", marginBottom: "20px" }}
          />
          <h1
            style={{
              fontSize: "48px",
              marginBottom: "20px",
              color: "#fff",
              fontStyle: "italic",
              fontWeight: "bold",
            }}
          >
            <span style={{ color: "white" }}>Laventra</span>
          </h1>
        </div>
        <p style={{ fontSize: "20px", marginBottom: "30px" }}>
          Your journey to unforgettable events starts here!
        </p>
        <button
          style={{
            padding: "12px 30px",
            fontSize: "16px",
            backgroundColor: "#6a0dad",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => (window.location.href = "/home")}
        >
          Explore Events
        </button>
      </div>
    </div>
  );
};

export default Entry;
