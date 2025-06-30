import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#8427da",
        color: "#ffffff",
        padding: "60px 20px",
        fontFamily: "sans-serif",
        marginTop: "150px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "0 auto",
          rowGap: "40px",
        }}
      >
        <div style={{ flex: "1 1 250px" }}>
          <h2
            style={{
              fontFamily: "cursive",
              color: "#e0b3ff",
              marginBottom: "10px",
            }}
          >
            Laventra
          </h2>
          <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#ccc" }}>
            Laventra is your trusted event partner, creating unforgettable
            memories with style, creativity, and passion. From weddings to
            corporate shows, we make every moment magical.
          </p>
        </div>

        <div style={{ flex: "1 1 200px" }}>
          <h3 style={footerHeading}>Quick Links</h3>
          <ul style={ulStyle}>
            <li>
              <a href="#home" style={linkStyle}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" style={linkStyle}>
                About Us
              </a>
            </li>
            <li>
              <a href="#services" style={linkStyle}>
                Services
              </a>
            </li>
            <li>
              <a href="#events" style={linkStyle}>
                Upcoming Events
              </a>
            </li>
            <li>
              <a href="#contact" style={linkStyle}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div style={{ flex: "1 1 200px" }}>
          <h3 style={footerHeading}>Contact Us</h3>
          <p style={contactText}>📍 123 Event Lane, Mumbai, India</p>
          <p style={contactText}>📞 +91 98765 43210</p>
          <p style={contactText}>✉️ contact@laventra.com</p>
        </div>

        <div style={{ flex: "1 1 250px" }}>
          <h3 style={footerHeading}>Subscribe</h3>
          <p style={{ fontSize: "14px", marginBottom: "10px", color: "#ccc" }}>
            Stay updated with our latest events and offers.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              padding: "10px",
              width: "100%",
              borderRadius: "20px",
              border: "1px solid #ccc",
              marginBottom: "10px",
            }}
          />
          <button
            style={{
              padding: "10px 20px",
              background: "#350f57",
              color: "white",
              border: "none",
              borderRadius: "20px",
              cursor: "pointer",
              fontWeight: "bold",
              width: "100%",
            }}
          >
            Subscribe
          </button>
        </div>
      </div>

      <div
        style={{
          marginTop: "50px",
          height: "1px",
          background: "rgba(255, 255, 255, 0.2)",
        }}
      ></div>

      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            marginBottom: "15px",
            display: "flex",
            gap: "10px",
            textAlign: "center",
            marginLeft: "620px",
          }}
        >
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={socialIcon}
            aria-label="Instagram"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/960px-Instagram-Icon.png"
              alt=""
              style={{ width: "20px", height: "20px" }}
            />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={socialIcon}
            aria-label="Facebook"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
              alt=""
              style={{ width: "20px", height: "20px" }}
            />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={socialIcon}
            aria-label="Twitter"
          >
            <img
              src="https://www.freeiconspng.com/uploads/download-logo-twitter-icon-9.png"
              alt=""
              style={{ width: "20px", height: "20px" }}
            />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            style={socialIcon}
            aria-label="YouTube"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png"
              alt=""
              style={{ width: "20px", height: "20px" }}
            />
          </a>
        </div>

        <p style={{ fontSize: "14px", color: "#aaa" }}>
          © {new Date().getFullYear()} Laventra Events. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const footerHeading = {
  fontSize: "18px",
  marginBottom: "15px",
  color: "#e0b3ff",
};

const ulStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0,
};

const linkStyle = {
  color: "#ccc",
  textDecoration: "none",
  display: "block",
  marginBottom: "10px",
  fontSize: "14px",
};

const contactText = {
  fontSize: "14px",
  marginBottom: "10px",
  color: "#ccc",
};

const socialIcon = {
  fontSize: "20px",
  margin: "0 10px",
  color: "#e0b3ff",
  textDecoration: "none",
};

export default Footer;
