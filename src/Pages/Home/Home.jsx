import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import StatsSection from "../Years/Years";
import EventPage from "../EventGrid/EventGrid";
import Footer from "../../Components/Footer/Footer";
import Video from "../Video/Video";
import { motion } from "framer-motion";
import EventGridInline from "../OurServices/OurServices";

const Home = () => {
  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div
          id="carouselExampleRide"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div
            className="carousel-inner"
            style={{
              marginTop: "20px",
              marginLeft: "40px",
              marginRight: "40px",
              width: "1400px",
              height: "600px",
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              className="carousel-item active"
              style={{ position: "relative" }}
            >
              <img
                src="https://media.istockphoto.com/id/479977238/photo/table-setting-for-an-event-party-or-wedding-reception.jpg?s=612x612&w=0&k=20&c=yIKLzW7wMydqmuItTTtUGS5cYTmrRGy0rXk81AltdTA="
                className="d-block w-100"
                alt="..."
                style={{
                  height: "600px",
                  objectFit: "cover",
                  objectPosition: "bottom",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  fontSize: "32px",
                  fontWeight: "bold",
                  textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
                  textAlign: "center",
                }}
              >
                Welcome to Laventra Events
              </div>
            </div>

            <div className="carousel-item" style={{ position: "relative" }}>
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3D"
                className="d-block w-100"
                alt="..."
                style={{
                  height: "600px",
                  objectFit: "cover",
                  objectPosition: "bottom",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  fontSize: "32px",
                  fontWeight: "bold",
                  textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
                  textAlign: "center",
                }}
              >
                Creating Memorable Moments
              </div>
            </div>

            <div className="carousel-item" style={{ position: "relative" }}>
              <img
                src="https://www.oyorooms.com/blog/wp-content/uploads/2018/02/event.jpg"
                className="d-block w-100"
                alt="..."
                style={{
                  height: "600px",
                  objectFit: "cover",
                  objectPosition: "bottom",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  fontSize: "32px",
                  fontWeight: "bold",
                  textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
                  textAlign: "center",
                }}
              >
                Events that Inspire
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <StatsSection />
        <EventPage />
        <EventGridInline />
        <Video />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Home;
