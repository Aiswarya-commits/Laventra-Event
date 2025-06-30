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
    image: "https://www.westway.org/wp-content/uploads/2025/03/dj.png",
    title: "Legal Requirements for a Destination Wedding in Kerala",
    description:
      "Kerala, with its tranquil backwaters, verdant landscapes, and enticing beaches...",
    link: "#",
  },
  {
    image:
      "https://www.hire4event.com/blogs/wp-content/uploads/2025/01/DJ-for-Your-Corporate-Event.webp",
    title: "Beyond the Backwaters: Unconventional Venues",
    description:
      "When organizing a destination wedding in Kerala, one of the first things...",
    link: "#",
  },
  {
    image:
      "https://liventgroup.com/wp-content/uploads/wedding-dj-new-york-city.jpg",
    title: "The Art of Invitation Card Design: Making a Lasting Impression",
    description:
      "Invitation cards are one of the most important aspects of any event...",
    link: "#",
  },
  {
    image:
      "https://choonsandmoovz.com.au/wp-content/uploads/2022/10/Corporate-Events-Image-2-Sebastian_s-Photography.jpeg",
    title: "How to choose the perfect bridal jewelry for your wedding",
    description:
      "Every Bride wishes to feel and look their best on their wedding day, which",
    link: "#",
  },
  {
    image:
      "https://www.socialtables.com/wp-content/uploads/2018/02/iStock-864292488.jpg",
    title: "Hindu wedding traditions in Kerala: A detailed step-by-step Guide",
    description:
      "Kerals's Hindu wedding traditions and rituals are a colorful events that beautifully combines centuries old",
    link: "#",
  },
  {
    image:
      "https://media.istockphoto.com/id/961798406/photo/stylish-champagne-glasses-and-food-appetizers-on-table-at-wedding-reception-luxury-catering-at.jpg?s=612x612&w=0&k=20&c=frEzhVL_VIJDedjN81w2Oj8L6Lj_JG3QhAvDiORCdEU=",
    title: "Top 10 Photographers, Capturing the moments",
    description:
      "Capture the best moments of your special day for beautifull memory",
    link: "#",
  },
  {
    image:
      "https://eventologists.co.uk/wp-content/uploads/2024/06/Eventologists-Bridgerton-Theme-Room-Shot-1024x768.jpg",
    title:
      "Best Muhoortham Timing and Booking Procedures for a guruvayoor wedding",
    description:
      "Guruvayoor the Dwaraga of the south, is amoung popular and prefered for wedding",
    link: "#",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnyk5raSVIC8Tf5bcz2gZYpL9CoqWhAcW39Q&s",
    title: "Stunning Wedding Themes in Kerala for a dreamy Celebration",
    description:
      "Table of contents kerala has it all,whether you are envisioning a traditional wedding",
    link: "#",
  },
];

const CorporateCard = () => {
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

export default CorporateCard;
