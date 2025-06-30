import React from "react";

const LoginPage = () => {
  const styles = {
    page: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#000",
      fontFamily: "Arial, sans-serif",
      color: "#fff",
      gap: "60px",
    },
    imageStack: {
      position: "relative",
      width: "280px",
      height: "500px",
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
      background: "#111",
      padding: "40px",
      borderRadius: "12px",
      width: "300px",
      boxShadow: "0 0 10px #222",
    },
    logo: {
      fontFamily: "'Grand Hotel', cursive",
      fontSize: "40px",
      textAlign: "center",
      marginBottom: "20px",
    },
    input: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      background: "#222",
      border: "1px solid #333",
      borderRadius: "6px",
      color: "#fff",
    },
    button: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      backgroundColor: "#0095f6",
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
    <div style={styles.page}>
      {/* Left Image Stack */}
      <div style={styles.imageStack}>
        <div
          style={{
            ...styles.imgCommon,
            zIndex: 1,
            transform: "rotate(-10deg)",
            top: "20px",
            left: "20px",
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
            top: "0px",
            left: "0px",
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
            left: "10px",
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
            }}
          />
        </div>
      </div>

      {/* Right Login Box */}
      <div style={styles.loginBox}>
        <h1 style={styles.logo}>Instagram</h1>
        <form>
          <input
            type="text"
            placeholder="Phone number, username or email"
            style={styles.input}
          />
          <input type="password" placeholder="Password" style={styles.input} />
          <button type="submit" style={styles.button}>
            Log In
          </button>

          <div style={styles.divider}>
            <div style={{ ...styles.dividerLine, left: 0 }} />
            OR
            <div style={{ ...styles.dividerLine, right: 0 }} />
          </div>

          <button style={styles.fbButton}>Log in with Facebook</button>
          <p style={styles.forgot}>Forgotten your password?</p>
        </form>

        <div style={styles.signupBox}>
          Don’t have an account?
          <span style={styles.signupLink}>Sign up</span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
