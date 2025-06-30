import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { motion } from "framer-motion";
import Footer from "../../Components/Footer/Footer";

const venues = [
  {
    name: "Purple Palace Hall",
    address: "123 Main St, Bangalore",
    capacity: "500 People",
    image:
      "https://www.micemag.com/wp-content/uploads/2022/10/venues-mice-luxembourg-eccl-00.jpg",
  },
  {
    name: "Ocean View Rooftop",
    address: "Beachside Rd, Goa",
    capacity: "200 People",
    image:
      "https://www.upsidemiami.com/resourcefiles/private-dining-slider/private-dining.jpg",
  },
  {
    name: "City Club Auditorium",
    address: "Downtown, Hyderabad",
    capacity: "800 People",
    image:
      "https://www.hamaraevent.com/lib/js/kcfinder/upload/images/wow%281%29.jpg",
  },
  {
    name: "Blue Theamed Hall",
    address: "City Center, Chennai",
    capacity: "800 People",
    image:
      "https://s3-media0.fl.yelpcdn.com/bphoto/zjFZEpDi78bHA-YNg705NQ/348s.jpg",
  },
  {
    name: "Tedx Auditorium",
    address: "Tech Park, Bangalore",
    capacity: "800 People",
    image:
      "https://whova.com/wp-content/uploads/2015/06/choose-perfect-event-venue.jpg",
  },
  {
    name: "Skyline Banquet Hall",
    address: "Uptown, Mumbai",
    capacity: "800 People",
    image:
      "https://nationaleventpros.com/wp-content/uploads/2018/04/Depositphotos_39486987_l-2015-1600x1066.jpg",
  },
  {
    name: "Pink Palace",
    address: "Garden City, Bangalore",
    capacity: "800 People",
    image:
      "https://pink-book.co.za/wp-content/uploads/2020/06/wedding-venue-usambara-18.jpg.webp",
  },
  {
    name: "Reception Hall",
    address: "Central Park, Delhi",
    capacity: "800 People",
    image:
      "https://assets.eventflare.io/eventflare.io/5299aca40a4db76c7ffd3ec0d28d23fd.webp",
  },
  {
    name: "Intimate Gathering Space",
    address: "Suburbia, Pune",
    capacity: "800 People",
    image:
      "https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/cascadia8-r612ni3wjpgpb7cq5su2r6c6d7a2i1ntvfducbggc2.webp",
  },
  {
    name: "Grand Ballroom",
    address: "Luxury District, Chennai",
    capacity: "800 People",
    image:
      "https://eventsmanagementkerala.com/wp-content/uploads/2024/05/Calicuts-Dreamy-Wedding-Venues.webp",
  },
  {
    name: "Marble Hall",
    address: "Heritage Lane, Jaipur",
    capacity: "800 People",
    image:
      "https://media.istockphoto.com/id/471906412/photo/beautiful-table-setting-for-an-wedding-reception-or-an-event.jpg?s=612x612&w=0&k=20&c=knlIBspy-ZKuQV7bUVr_eclJmyC24ShNAva_Jh9Rwfc=",
  },
  {
    name: "historic Castle Venue",
    address: "Royal Estate, Udaipur",
    capacity: "800 People",
    image:
      "https://junebugweddings.com/wedding-blog/wp-content/uploads/2019/10/ultimate-wedding-venue-guide-1.jpg",
  },
  {
    name: "Mehandi Garden",
    address: "Countryside, Kerala",
    capacity: "800 People",
    image:
      "https://www.hamaraevent.com/lib/js/kcfinder/upload/images/Garden%20Theme%201.jpg",
  },
  {
    name: "NAR Event Hall",
    address: "City Center, Bangalore",
    capacity: "800 People",
    image:
      "https://content.jdmagicbox.com/v2/comp/mangalore/p9/0824px824.x824.220930164521.u8p9/catalogue/aashirvaad-events-dharmasthala-dharmasthala-dharmasthala-banquet-halls-4fcfslnun9.jpg",
  },
  {
    name: "Desert Oasis Venue",
    address: "Sandy Plains, Alappuzha",
    capacity: "800 People",
    image:
      "https://www.area83.in/ElementImages/a9ec03b3-17df-4f4f-bf7a-23914a79e602-ProdcuctImg.jpg",
  },
  {
    name: "Open Air Amphitheater",
    address: "Cultural Hub, Kochi",
    capacity: "800 People",
    image:
      "https://bcdn.la-mirage.in/wp-content/uploads/2023/01/LA-Mirage-Koratty-Top-10-Wedding-Venue-in-Kerala.png.webp",
  },
  {
    name: "Homey Hall",
    address: "Suburban Area, Trivandrum",
    capacity: "800 People",
    image:
      "https://blissfulplans.com/wp-content/uploads/2023/09/Ramada-resort.webp",
  },
  {
    name: "Waterfront Pavilion",
    address: "Lakeside, Alleppey",
    capacity: "800 People",
    image: "https://i.ytimg.com/vi/bnopSCIhu1g/maxresdefault.jpg",
  },
];

const EventVenuePage = () => {
  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <img
          src="https://cdn0.hitched.co.uk/article/9162/3_2/960/jpg/132619-rutland-wedding-venues-header.jpeg"
          alt=""
          style={{
            width: "1400px",
            height: "600px",
            objectFit: "cover",
            borderRadius: "20px",
            marginLeft: "40px",
            marginTop: "20px",
          }}
        />
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>
          Choose Your <br />
          <span style={{ color: "#800080", marginLeft: "160px" }}>
            Dream
          </span>{" "}
          Venue
        </h2>
        <p
          style={{ marginLeft: "40px", marginTop: "20px", marginRight: "40px" }}
        >
          Looking for the perfect location to host your next unforgettable
          event? Our handpicked venues offer world-class facilities, exceptional
          ambiance, and everything you need to make your event a success —
          whether it’s a concert, conference, wedding, birthday party, product
          launch, or a themed celebration.Laventra Event Management introduces
          Kerala’s venues, offering lush greenery, breathtaking beauty, and
          world-class amenities. <br />
          <br /> These venues provide modern facilities and luxurious settings,
          making Kerala the perfect location for events. Find the best event and
          wedding venues in Kerala with Laventra Event Management. We offer
          expert event management services for luxurious, traditional, and
          modern weddings, as well as corporate and private parties. Discover
          300+ event venues with stunning locations. Use the smart filters below
          to explore and book your dream event and wedding venues in Kerala by
          location and venue type now!
        </p>
        <div>
          <h1
            style={{
              textAlign: "center",
              marginBottom: "30px",
              fontSize: "36px",
              marginLeft: "40px",
              marginRight: "40px",
              marginTop: "120px",
              maxWidth: "1400px",
              color: "#800080",
            }}
          >
            📅 Ready to Book?
          </h1>
          <p
            style={{
              marginLeft: "340px",
              maxWidth: "800px",
              textAlign: "center",
            }}
          >
            Explore our venues below, check availability, and reserve your spot
            instantly through our seamless online booking system. Whether you're
            planning an intimate celebration or a grand-scale event, we have the
            venue that fits your vision perfectly.
          </p>
        </div>

        <div
          style={{
            minHeight: "100vh",
            padding: "40px 20px",
            color: "black",
            marginLeft: "40px",
            marginRight: "40px",
            marginTop: "20px",
            maxWidth: "1400px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "25px",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {venues.map((venue, idx) => (
              <div
                key={idx}
                style={{
                  background: "#fff",
                  borderRadius: "15px",
                  overflow: "hidden",
                  color: "#333",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <img
                  src={venue.image}
                  alt={venue.name}
                  style={{ width: "100%", height: "180px", objectFit: "cover" }}
                />
                <div style={{ padding: "15px" }}>
                  <h3 style={{ marginBottom: "10px", fontSize: "20px" }}>
                    {venue.name}
                  </h3>
                  <p style={{ margin: "5px 0", fontSize: "14px" }}>
                    <strong>Address:</strong> {venue.address}
                  </p>
                  <p style={{ margin: "5px 0", fontSize: "14px" }}>
                    <strong>Capacity:</strong> {venue.capacity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{ marginTop: "60px", marginLeft: "40px", marginRight: "40px" }}
        >
          <h2 style={{ textAlign: "center" }}>📞 Still Have Questions?</h2>
          <p
            style={{
              marginLeft: "280px",
              maxWidth: "800px",
              textAlign: "center",
              marginTop: "40px",
            }}
          >
            Our dedicated team is here to assist you with any inquiries or
            special requests. Contact us today to discuss your event needs, and
            let us help you create an unforgettable experience at one of our
            stunning venues.Feel free to contact our support team for
            personalized guidance or to schedule a site visit.
          </p>
        </div>
        <Footer />
      </motion.div>
    </div>
  );
};

export default EventVenuePage;
