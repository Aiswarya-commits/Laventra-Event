import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import CardGrid from "../CardGrid/CardGrid";
import Footer from "../../Components/Footer/Footer";
import { motion } from "framer-motion";

const Wedding = () => {
  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div
          style={{
            position: "relative",
            margin: "20px 40px",
            width: "1400px",
            height: "600px",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <img
            src="https://www.alfaazphotography.com/wp-content/uploads/2020/05/FW-_-SA-1621-scaled.jpg"
            alt="Wedding"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: "100px",
              left: "350px",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontSize: "48px",
              fontWeight: "bold",
              textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
            }}
          >
            Make Your Wedding
            <br />
            Unforgettable with Laventra
          </div>
        </div>
        <div style={{ marginLeft: "40px", marginTop: "90px" }}>
          <h2 style={{ textAlign: "center", color: "#800080" }}>
            Enchanting Weddings with Laventra
          </h2>
          <p style={{ marginTop: "50px" }}>
            Melodia’s wedding planners in Kerala, India, provide a wide range of
            services designed to help couples create the perfect wedding day. We
            start by getting to know the couple, listening to their wishes and
            ideas, and then working our magic to turn those dreams into reality.{" "}
            <br />
            <br />
            Melodia’s wedding event planners and managers services are
            professional services provided to help couples plan, organize, and
            execute their wedding day. We work closely with couples to
            understand their vision, preferences, and budget to create a
            personalized plan for the wedding day.
          </p>
        </div>
        <img
          src="https://eventsmanagementkerala.com/wp-content/uploads/2022/09/pexels-krishna-studio-5200435_15_185637-162346933677604.webp"
          alt=""
          style={{
            marginLeft: "40px",
            width: "1400px",
            height: "500px",
            borderRadius: "20px",
            marginTop: "50px",
          }}
        />
        <div style={{ marginLeft: "40px" }}>
          <h2
            style={{
              textAlign: "center",
              color: "#800080",
              marginTop: "120px",
            }}
          >
            Choosing a venue and a destination
          </h2>
          <p style={{ marginTop: "50px" }}>
            Finding the ideal location for your wedding can be difficult and
            exhausting. Most destination wedding planners in Kerala, don’t do
            them as well as they should. There are several restrictions that
            apply to this activity, including the time of the year, overall
            spending limits, and the availability of a venue. With these facts
            in mind, as the best destination wedding planners in Kerala, Melodia
            Event Management Company coordinates with you to identify your dream
            location. We can make magic anyplace with reasonable destination
            wedding packages in Kerala, including beaches, backwaters, or the
            highlands. <br />
            <br />
            Nowadays, entertainment has become a crucial aspect of Southern
            Indian weddings, especially in Kerala. Various forms of
            entertainment, such as live music bands, Punjabi dances, flamenco
            dances, Sufi dances, DJs, live water drummers, and traditional
            Indian dances like oppana dances, bharatanatyam, mohiniyattom and
            kathakali are incorporated into every part of the wedding events.
            This entertainment is embraced by all communities, including Hindus,
            Christians, and Muslims. Even the Kerala Muslim community, including
            the Orthodox Muslim community, incorporates entertainment in their
            unique way.
          </p>
        </div>
        <CardGrid />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Wedding;
