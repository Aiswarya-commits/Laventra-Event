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
      "https://media.istockphoto.com/id/612848128/photo/applause-for-the-bithday-girl.jpg?s=612x612&w=0&k=20&c=6Ve3cRDVoC83tuWcO9ZfE27Wdjk1pvp1r2NmSOsC3W8=",
    title: "Legal Requirements for a Destination Wedding in Kerala",
    description:
      "Kerala, with its tranquil backwaters, verdant landscapes, and enticing beaches...",
    link: "#",
  },
  {
    image:
      "https://i.etsystatic.com/15460623/r/il/e191d8/5428409677/il_570xN.5428409677_appe.jpg",
    title: "Beyond the Backwaters: Unconventional Venues",
    description:
      "When organizing a destination wedding in Kerala, one of the first things...",
    link: "#",
  },
  {
    image:
      "https://dessertboxes.com.au/cdn/shop/articles/Birthday.jpg?v=1727073990",
    title: "The Art of Invitation Card Design: Making a Lasting Impression",
    description:
      "Invitation cards are one of the most important aspects of any event...",
    link: "#",
  },
  {
    image:
      "https://www.partydelights.co.uk/media/catalog/category/party_themes/23_Mix-it-up-link-v2.jpg",
    title: "How to choose the perfect bridal jewelry for your wedding",
    description:
      "Every Bride wishes to feel and look their best on their wedding day, which",
    link: "#",
  },
  {
    image:
      "https://tippytoad.com/cdn/shop/files/Adult_Birthday_Party_Celebration.png?v=1727708155&width=1500",
    title: "Hindu wedding traditions in Kerala: A detailed step-by-step Guide",
    description:
      "Kerals's Hindu wedding traditions and rituals are a colorful events that beautifully combines centuries old",
    link: "#",
  },
  {
    image:
      "https://ocakes.in/storage/app/public/images/item/item-642f5ad0783b8.jpg",
    title: "Top 10 Photographers, Capturing the moments",
    description:
      "Capture the best moments of your special day for beautifull memory",
    link: "#",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/children-birthday-party-kid-girl-covering-eyes-decorated-retro-room-presents-balloons-114864155.jpg",
    title:
      "Best Muhoortham Timing and Booking Procedures for a guruvayoor wedding",
    description:
      "Guruvayoor the Dwaraga of the south, is amoung popular and prefered for wedding",
    link: "#",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0850/8348/8530/files/ForYourGalPal2_076c3d00-361a-4f64-a160-6063f0c635ee_600x600.png?v=1721368201",
    title: "Stunning Wedding Themes in Kerala for a dreamy Celebration",
    description:
      "Table of contents kerala has it all,whether you are envisioning a traditional wedding",
    link: "#",
  },
];

const BirthdayCard = () => {
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

export default BirthdayCard;
