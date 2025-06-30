import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  Grid,
  Rating,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const testimonials = [
  {
    name: "Saleena Devassy",
    date: "2023-04-12",
    text: "Very good event management company Kerala. We had a wedding last year. The wedding was wonderful in Thrissur. Thanks Laventra event management.",
    rating: 5,
    avatar: "S",
  },
  {
    name: "Peter K P",
    date: "2023-04-09",
    text: "Laventra Events is very good event management in Thrissur. My daughter's wedding was amazing with this company. We recommending to every one...",
    rating: 5,
    avatar: "P",
  },
];

const Testimonials = () => {
  return (
    <Box
      sx={{
        p: 4,
        textAlign: "center",
        backgroundColor: "#fff",
        marginTop: "120px",
      }}
    >
      <Typography sx={{ color: "#7a4fff", fontWeight: "bold" }}>
        LAVENTRA'S CLIENT TESTIMONIALS
      </Typography>
      <Typography variant="h4" fontWeight="bold" mt={1} color="#800080">
        See what our Clients have to say
      </Typography>
      <Typography
        variant="body1"
        mt={2}
        maxWidth="700px"
        mx="auto"
        color="gray"
        marginTop={"40px"}
      >
        Clients have praised Laventra Events for their professionalism,
        attention to detail, and creative approach in creating stunning and
        unforgettable events. They appreciate the stress-free planning
        experience and recommend Laventra Events as a top-notch event management
        team.
      </Typography>

      <Grid
        container
        spacing={3}
        mt={5}
        justifyContent="center"
        marginTop="80px"
        width="1200px"
        marginLeft="110px"
      >
        {testimonials.map((item, index) => (
          <Grid item xs={12} md={5} key={index}>
            <Card elevation={3}>
              <CardContent sx={{ position: "relative", textAlign: "left" }}>
                <Rating value={item.rating} readOnly />
                <Typography variant="body2" mt={1} mb={2}>
                  {item.text}
                </Typography>
                <GoogleIcon
                  sx={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    color: "#4285F4",
                  }}
                />
              </CardContent>
              <Box display="flex" alignItems="center" px={2} pb={2}>
                <Avatar sx={{ bgcolor: "#7a4fff", mr: 2 }}>
                  {item.avatar}
                </Avatar>
                <Box>
                  <Typography fontWeight="bold">{item.name}</Typography>
                  <Typography fontSize="12px" color="gray">
                    {item.date}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
