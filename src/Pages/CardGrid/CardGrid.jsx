import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const blogData = [
  {
    image:
      "https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/couple-love-is-signing-official-marriage-documents-1-scaled-r61l90lenpssoreui2difb0p9nbf7u5hll7nu8zcwo.jpg",
    title: "Legal Requirements for a Destination Wedding in Kerala",
    description:
      "Kerala, with its tranquil backwaters, verdant landscapes, and enticing beaches...",
    link: "#",
  },
  {
    image:
      "https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/manikkalll-r4rmaja9x1cn4ah9zfu2m87r442d9gponhkmtcl82g.jpg",
    title: "Beyond the Backwaters: Unconventional Venues",
    description:
      "When organizing a destination wedding in Kerala, one of the first things...",
    link: "#",
  },
  {
    image:
      "https://nutcaseshop.com/cdn/shop/files/WeddingCard3_3.jpg?v=1707127634&width=1445",
    title: "The Art of Invitation Card Design: Making a Lasting Impression",
    description:
      "Invitation cards are one of the most important aspects of any event...",
    link: "#",
  },
  {
    image:
      "https://i.pinimg.com/236x/de/11/78/de117858ab98985cc7e4913fdb7b2306.jpg",
    title: "How to choose the perfect bridal jewelry for your wedding",
    description:
      "Every Bride wishes to feel and look their best on their wedding day, which",
    link: "#",
  },
  {
    image:
      "https://varniya.com/cdn/shop/articles/Indian_Wedding_Traditions_Rituals_and_Etiquette_for_Brides_Grooms_and_Guests_97b1e009-09d3-48ee-b636-0da63a28c9a0.png?v=1746710671",
    title: "Hindu wedding traditions in Kerala: A detailed step-by-step Guide",
    description:
      "Kerals's Hindu wedding traditions and rituals are a colorful events that beautifully combines centuries old",
    link: "#",
  },
  {
    image:
      "https://cdn0.weddingwire.in/article/1405/3_2/960/jpg/125041-indian-wedding-photography-timeline-shutterdown.jpeg",
    title: "Top 10 Photographers, Capturing the moments",
    description:
      "Capture the best moments of your special day for beautifull memory",
    link: "#",
  },
  {
    image:
      "https://i.ytimg.com/vi/lMpaY9-YYj8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAY-u45alCQJxh646-pK0vI4tZCvA",
    title:
      "Best Muhoortham Timing and Booking Procedures for a guruvayoor wedding",
    description:
      "Guruvayoor the Dwaraga of the south, is amoung popular and prefered for wedding",
    link: "#",
  },
  {
    image:
      "https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/000/439/658/new_medium/40.jpg?1528982287",
    title: "Stunning Wedding Themes in Kerala for a dreamy Celebration",
    description:
      "Table of contents kerala has it all,whether you are envisioning a traditional wedding",
    link: "#",
  },
];

const CardGrid = () => {
  return (
    <Grid container spacing={4} padding={4} sx={{ mt: "60px" }}>
      {blogData.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            sx={{
              height: 380,
              width: 580,
              marginLeft: "70px",
              display: "flex",
              flexDirection: "column",
              borderRadius: 3,
              boxShadow: 3,
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
          >
            <CardMedia
              component="img"
              height="180"
              image={item.image}
              alt={item.title}
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
              }}
            >
              <Typography gutterBottom variant="h6" component="div">
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  flexGrow: 1,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {item.description}
              </Typography>
              <Button
                size="small"
                href={item.link}
                sx={{ mt: 2, alignSelf: "flex-start" }}
                variant="text"
              >
                Learn More &gt;&gt;
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardGrid;
