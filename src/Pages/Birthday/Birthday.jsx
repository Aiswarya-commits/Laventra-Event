import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import BirthdayCard from "../BirthdayCard/BirthdayCard";
import { motion } from "framer-motion";

const Birthday = () => {
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
            src="https://www.parents.com/thmb/--pZafKsgGSb8NrJVrV7lqJId9g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/BirthdayParty-GettyImages-1600792233-c2a961509556414f9f41b92b8471a551.jpg"
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
            Make Every Birthday Unforgettable
          </h2>
          <p style={{ marginTop: "50px" }}>
            At Laventra Events, we specialize in curating magical birthday
            experiences that are personalized, fun-filled, and stress-free.
            Whether it’s a grand 1st birthday party, a teenager’s dream bash, or
            a classy adult celebration — we turn your ideas into cherished
            memories. <br />
            <br />
            Birthdays are more than just a celebration — they are milestones
            that deserve to be honored with joy, laughter, and love. At
            Laventra, we understand how special each birthday is, and we work
            passionately to make every celebration uniquely memorable. From the
            twinkle in a child’s eyes when they see their dream theme come to
            life, to the heartfelt smiles of family and friends gathered around
            a cake — we orchestrate every element to craft moments that will be
            cherished forever.
          </p>
        </div>
        <img
          src="https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt817de042c45edc90/66707c49ecd260cbced791a6/surprise-birthday-party-hero.jpg?q=70&width=3840&auto=webp"
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
            Whether you're planning your baby's first birthday, a sweet sixteen,
            or a milestone 50th celebration, we tailor the event to reflect the
            personality and preferences of the birthday star. Our team pays
            close attention to the little details — color schemes, favorite
            characters, hobbies, and more — to design a cohesive theme that
            feels personal and engaging. No matter the age, we ensure every
            guest has a delightful experience. <br />
            <br />
            Organizing a birthday party can be overwhelming — but it doesn’t
            have to be. With Laventra’s professional birthday event management,
            you can sit back and enjoy the celebration while we take care of
            everything. From initial planning to final clean-up, our dedicated
            team ensures smooth coordination, timely execution, and flawless
            attention to detail so you can focus on creating beautiful memories
            with your loved ones.
          </p>
        </div>
        <BirthdayCard />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Birthday;
