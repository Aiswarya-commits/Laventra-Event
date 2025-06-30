import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import CorporateCard from "../CorporateCard/CorporateCard";
import { motion } from "framer-motion";

const Corporate = () => {
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
            src="https://pinkcaviar.com.au/wp-content/uploads/2019/12/masquerade-ball-party-women-masks-pink-caviar-events.jpg"
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
            Elevate Your Brand with Exceptional Corporate Events
          </h2>
          <p style={{ marginTop: "50px" }}>
            At Laventra, we believe corporate events are more than just
            gatherings — they are powerful opportunities to reflect your brand’s
            identity, strengthen relationships, and leave lasting impressions.
            Whether it’s a product launch, annual celebration, conference,
            seminar, or team-building retreat, we specialize in curating
            seamless, professional experiences that align with your objectives
            and values. <br />
            <br />
            From concept to execution, our corporate event management team
            handles every detail with precision and professionalism. We begin
            with a strategic consultation to understand your goals, brand tone,
            and target audience. Then we take over planning, logistics,
            budgeting, vendor coordination, and execution — ensuring your event
            is impactful, efficient, and stress-free. Our goal is to make you
            look good while allowing you to focus on engaging with your
            audience.
          </p>
        </div>
        <img
          src="https://eventologists.co.uk/wp-content/uploads/2024/02/Las-Vegas-Theme-Party-Full-Dressing-1024x683.jpg"
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
        <CorporateCard />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Corporate;
