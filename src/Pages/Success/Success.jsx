import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const BookingSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(to right, #a8e063, #56ab2f)",
      color: "white",
      fontFamily: "Poppins, sans-serif",
      textAlign: "center",
      padding: "20px",
    },
    icon: {
      fontSize: "100px",
      color: "#fff",
      marginBottom: "20px",
    },
    title: {
      fontSize: "36px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    message: {
      fontSize: "18px",
      marginBottom: "30px",
    },
    smallText: {
      fontSize: "14px",
      color: "#e1ffe1",
    },
  };

  return (
    <div style={styles.container}>
      <CheckCircleIcon style={styles.icon} />
      <h1 style={styles.title}>Booking Confirmed!</h1>
      <p style={styles.message}>
        Thank you for booking with us. You will receive a confirmation email
        shortly.
      </p>
      <p style={styles.smallText}>Redirecting to home page in few seconds...</p>
    </div>
  );
};

export default BookingSuccess;
