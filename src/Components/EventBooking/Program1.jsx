import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

const ProgramOne = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
    phone: "",
    event: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log("Form submitted:", formData);
      navigate("/success");
    }, 2000);
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

  const styles = {
    page: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#fff",
      fontFamily: "Arial, sans-serif",
      color: "white",
      gap: "200px",
    },
    imageStack: {
      position: "relative",
      width: "280px",
      height: "500px",
      marginBottom: "100px",
      marginRight: "100px",
    },
    imgCommon: {
      position: "absolute",
      width: "250px",
      height: "450px",
      borderRadius: "30px",
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)",
    },
    loginBox: {
      background: "#fff",
      padding: "40px",
      borderRadius: "12px",
      width: "450px",
      boxShadow: "0 0 10px #222",
    },
    logo: {
      fontFamily: "'Grand Hotel', cursive",
      fontSize: "40px",
      textAlign: "center",
      marginBottom: "20px",
      color: "#800080",
    },
    input: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      background: "white",
      border: "1px solid #333",
      borderRadius: "6px",
      color: "#000",
    },
    button: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      backgroundColor: "#800080",
      border: "none",
      borderRadius: "6px",
      fontWeight: "bold",
      cursor: "pointer",
      color: "#fff",
    },
    divider: {
      textAlign: "center",
      margin: "15px 0",
      position: "relative",
      color: "#666",
    },
    dividerLine: {
      content: "''",
      height: "1px",
      background: "#333",
      position: "absolute",
      top: "50%",
      width: "45%",
    },
    fbButton: {
      backgroundColor: "transparent",
      border: "none",
      color: "#0095f6",
      fontWeight: "bold",
      margin: "10px 0",
      cursor: "pointer",
    },
    forgot: {
      textAlign: "center",
      color: "#999",
      fontSize: "14px",
      marginTop: "10px",
    },
    signupBox: {
      textAlign: "center",
      marginTop: "20px",
      fontSize: "14px",
      color: "#ccc",
    },
    signupLink: {
      color: "#0095f6",
      cursor: "pointer",
      marginLeft: "5px",
    },
  };

  return (
    <div>
      <Navbar />
      <div style={styles.page}>
        <div style={styles.imageStack}>
          <div
            style={{
              ...styles.imgCommon,
              zIndex: 1,
              transform: "rotate(-10deg)",
              top: "100px",
              left: "0px",
              right: "100px",
            }}
          >
            <img
              src="https://www.shutterstock.com/image-photo/energetic-crowd-partying-all-night-600nw-309592517.jpg"
              alt="img1"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              ...styles.imgCommon,
              zIndex: 2,
              transform: "rotate(5deg)",
              top: "100px",
              left: "200px",
            }}
          >
            <img
              src="https://as2.ftcdn.net/jpg/02/30/78/31/1000_F_230783125_uT2MujnZ2lhBuroMIjpggGiP9QWDCthx.jpg"
              alt="img2"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              ...styles.imgCommon,
              zIndex: 3,
              transform: "rotate(-3deg)",
              top: "10px",
              left: "100px",
            }}
          >
            <img
              src="https://media.istockphoto.com/id/499344414/photo/dance-lovers.jpg?s=612x612&w=0&k=20&c=YYIKS2ThnlyWJ0Jfw1Ay6_DWEoSSyWtBTTFRtourdqE="
              alt="img3"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: "rotate(3deg)",
                right: "100px",
              }}
            />
          </div>
        </div>

        <div style={styles.loginBox}>
          <h1 style={styles.logo}>Booking</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="emailOrUsername"
              value={formData.emailOrUsername}
              onChange={handleChange}
              placeholder="Name"
              style={styles.input}
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email"
              style={styles.input}
              required
            />
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              style={styles.input}
              required
            />
            <select
              name="event"
              value={formData.event}
              onChange={handleChange}
              style={styles.input}
              required
            >
              <option value="">Select Event</option>
              {eventsList.map((event, index) => (
                <option key={index} value={event}>
                  {event}
                </option>
              ))}
            </select>

            <button type="submit" style={styles.button} disabled={loading}>
              {loading ? "Booking..." : "Book Now"}
            </button>

            <div style={styles.divider}>
              <div style={{ ...styles.dividerLine, left: 0 }} />
              OR
              <div style={{ ...styles.dividerLine, right: 0 }} />
            </div>

            <p style={styles.forgot}>Contact Us For Direct Booking</p>
          </form>

          <div style={styles.signupBox}>
            Touch with Us
            <span style={styles.signupLink}>Laventra</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProgramOne;
