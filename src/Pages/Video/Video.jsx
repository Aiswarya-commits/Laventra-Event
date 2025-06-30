import React from "react";

const Video = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "150px" }}>
      <h2 style={{ color: "#8628dc" }}>Grand Program</h2>
      <iframe
        width="1060"
        height="715"
        style={{ marginTop: "50px" }}
        src="https://www.youtube.com/embed/hMQSJ5xuitE?si=eL46PX-uZyoD6Al3"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
