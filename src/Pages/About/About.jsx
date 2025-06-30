import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Testimonials from "../Testimonials/Testimonials";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <img
          src="https://kamatharjun.com/wp-content/uploads/2019/07/AV-wed15.jpeg"
          alt=""
          style={{
            height: "600px",
            width: "1400px",
            marginLeft: "40px",
            marginRight: "40px",
            borderRadius: "20px",
            marginTop: "20px",
          }}
        />
        <h1 style={{ marginTop: "80px", textAlign: "center" }}>
          Welcome to <span style={{ color: "#800080" }}> Laventra </span> <br />{" "}
          <span style={{ marginLeft: "380px" }}> Event Management Company</span>
        </h1>
        <div style={{ display: "flex" }}>
          {" "}
          <img
            src="https://media.istockphoto.com/id/866987706/photo/indian-wedding-hands.jpg?s=612x612&w=0&k=20&c=6L-u9qhFPv9MjDnF4UK4AqjVbDKM4_8Xad72IHhwPZE="
            alt=""
            style={{
              marginTop: "50px",
              marginLeft: "40px",
              borderRadius: "20px",
            }}
          />
          <p
            style={{
              marginLeft: "20px",
              marginTop: "50px",
              marginRight: "40px",
            }}
          >
            We are an ISO 9001:2015-certified event management company based in
            Kerala, with over 15 years of experience in the event management
            industry in Kerala. Laventra Event Management specializes in wedding
            event management, as well as a wide range of corporate, personal,
            regional, public, and private event management services—creating
            lasting memories for thousands of clients in the Malayalee community
            in Kerala and for those seeking destination weddings in Kerala from
            other states of India and abroad. Since 2010–2011, we have
            successfully organized over 750 weddings, 90 corporate events, 30
            inaugurations, and 150 other private events. In 2025, we are
            committed to delivering 150 more exceptional events as we continue
            to grow and serve our clients with excellence. <br />
            <br /> Additionally, the brand name Laventra Event Management is
            often referred to interchangeably as Laventra Events by the company
            and people in Kerala. Laventra Events, or simply Laventra, is
            primarily used as an informal or short name for the company;
            however, our official name remains Laventra Event Management. We
            mainly serve in God’s Own Country as a specialized event management
            company for Kerala’s event management services.
          </p>
        </div>{" "}
        <br />
        <br />
        <p style={{ marginLeft: "40px", marginRight: "40px" }}>
          In 2008, our venture was initiated in Kuriachira, Thrissur. Initially,
          we handled event management tasks primarily in regions close to
          Thrissur and its surroundings. Our hard work has enabled us to expand
          from the neighborhoods of Thrissur to the popular territories of
          Cochin. Compared to other cities, we are now providing more services
          in Ernakulam (Kochi) through our own production house, a trend that
          has continued over the last five years. What started as a small firm
          has now expanded into a multi-locality venue booking, selection, and
          event management service across Kerala. <br />
          <br /> We proudly serve all of Kerala, from bustling cities to serene
          villages, as one of the few Kerala-owned event management companies
          fully dedicated to the state. Deeply rooted in Kerala’s rich culture
          and traditions, we specialize in creating unforgettable events—whether
          for the Malayalam community on Kerala soil or destination weddings for
          guests from across India and beyond. With extensive experience in
          event management, we bring expertise and passion to every celebration.
          Today, in 2025, Laventra Event Management is strongly represented in
          Thrissur, Kasaragod, Calicut, Trivandrum, Kannur, Kollam, Alleppey
          (Alappuzha), Kottayam, Palakkad, Malappuram, and Kochi—the ten most
          dynamic cities of Kerala
        </p>
        <div style={{ marginLeft: "40px", marginTop: "50px" }}>
          <h1 style={{ marginLeft: "40px", color: "#800080" }}>Our Vision​</h1>
          <p style={{ marginTop: "40px", marginRight: "20px" }}>
            At Laventra Event Management, our vision is to become Kerala’s
            leading event management company, committed to creating
            unforgettable experiences for the Malayali community and for those
            choosing Kerala as their destination for weddings and special
            occasions. We aim to redefine the event planning industry through
            innovative, seamless, and highly personalized services, ensuring
            every event—whether in cities, towns, or villages—celebrates the
            rich traditions and cultural values of Kerala. <br />
            <br /> In addition, Laventra envisions becoming the most trusted
            venue booking platform in Kerala. With over 15 years of experience,
            we strive to be the go-to destination for clients seeking reliable,
            detailed, and curated information about event venues. By offering a
            one-stop solution for venue selection and complete event services,
            we eliminate the hassle of searching across multiple
            platforms—making event planning easier, faster, and more efficient.
          </p>
        </div>
        <Testimonials />
        <Footer />
      </motion.div>
    </div>
  );
};

export default About;
