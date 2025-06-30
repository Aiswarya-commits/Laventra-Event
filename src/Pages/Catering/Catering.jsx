import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Testimonials from "../Testimonials/Testimonials";
import { motion } from "framer-motion";

const Catering = () => {
  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <img
          src="https://img.freepik.com/premium-photo/catering-service-restaurant-table-with-snacks-food-event_367038-2516.jpg"
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
          Don't Compromise about
          <span style={{ color: "#800080" }}> Your Food </span> <br />{" "}
          <span style={{ marginLeft: "380px" }}> </span>
        </h1>
        <div style={{ display: "flex" }}>
          {" "}
          <img
            src="https://content.jdmagicbox.com/comp/def_content_category/caterers-upto-250-persons-/caterers-16-caterers-upto-250-persons--5-v7iw1.jpg"
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
            At Laventra Event Management, we believe that exceptional catering
            is at the heart of every memorable event. Our catering services are
            crafted to deliver not only delicious cuisine but also an
            unforgettable culinary experience that complements the elegance and
            style of your occasion. Whether you’re hosting an intimate birthday
            celebration, a grand wedding, a corporate gala, or a themed party,
            our team of expert chefs and hospitality professionals ensure that
            every dish is prepared with the finest ingredients and presented
            with impeccable attention to detail. <br /><br /> We offer a diverse and
            customizable menu that caters to various tastes and dietary
            preferences, including Indian, Continental, Asian, and fusion
            cuisines. From lavish multi-course meals and elaborate buffets to
            elegant canapés and live food counters, our catering solutions are
            designed to reflect the tone and scale of your event. Laventra also
            places a strong emphasis on hygiene, presentation, and timely
            service, ensuring that your guests enjoy a seamless dining
            experience. With our commitment to quality and flair, Laventra
            transforms your event into a celebration of taste, tradition, and
            togetherness.
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

export default Catering;
