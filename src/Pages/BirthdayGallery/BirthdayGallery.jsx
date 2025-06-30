import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { motion } from "framer-motion";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
const BirthdayGallery = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ImageList
          sx={{
            width: "100%",
            height: "auto",
            transform: "translateZ(0)",
          }}
          rowHeight={400}
          gap={8}
        >
          {itemData.map((item) => {
            const cols = item.featured ? 2 : 1;
            const rows = item.featured ? 2 : 1;

            return (
              <ImageListItem key={item.img} cols={cols} rows={rows}>
                <img
                  {...srcset(item.img, 250, 200, rows, cols)}
                  alt={item.title}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <ImageListItemBar
                  sx={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                  }}
                  title={item.title}
                  position="top"
                  actionIcon={
                    <IconButton
                      sx={{ color: "white" }}
                      aria-label={`star ${item.title}`}
                    >
                      <StarBorderIcon />
                    </IconButton>
                  }
                  actionPosition="left"
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      </motion.div>
    </div>
  );
};

const itemData = [
  {
    img: "https://www.jesvenues.com/images/services/decorations/birthday/75/images/Rosettes_Fancy_Decoration_for_Birthday_Party_or_Kids_Event_(1).jpg",
    author: "@bkristastucchio",
    featured: true,
  },
  {
    img: "https://ik.imagekit.io/9um5tdigihm/8/storage/post/353.UJ24S611c7c9ddeacd.jpg",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://5.imimg.com/data5/SELLER/Default/2022/12/EY/TG/PK/51689013/birthday-decoration-at-home-in-hyderabad-secunderabad.jpg",
    author: "@helloimnik",
  },
  {
    img: "https://www.area83.in/ElementImages/9d606503-28d2-4177-9fcf-d381d369eec5-ProdcuctImg.png",
    author: "@nolanissac",
  },
  {
    img: "https://assets.simplotel.com/simplotel/image/upload/x_114,y_0,w_1820,h_1365,r_0,c_crop,q_80,fl_progressive/w_500,f_auto,c_fit/themis-mudhouse---a-natures-retreat-resort-wellness/Birthday_or_Anniversary_Lawn_Decoration_Premium_Rs_5000_p38fb0",
    author: "@hjrc33",
  },
  {
    img: "https://www.shutterstock.com/image-photo/happy-birthday-childrens-decoration-glowing-600nw-2425920023.jpg",
    author: "@arwinneil",
    featured: true,
  },
  {
    img: "https://cdn.mos.cms.futurecdn.net/QnvGChMuDQuW9L446zM3YP-1200-80.jpg",
    author: "@tjdragotta",
  },
  {
    img: "https://img1.wsimg.com/isteam/ip/e4c1dbfa-6474-445b-a774-685d7f001252/17c50bbe-aeed-4105-8f3d-fa8e0a1eff03.jpeg/:/cr=t:22.09%25,l:6.89%25,w:84.75%25,h:63.56%25/rs=w:388,h:388,cg:true,m",
    author: "@katie_wasserman",
  },
  {
    img: "https://www.partyone.in/img/category_landing/artists/balloon_decor.webp",
    author: "@silverdalex",
  },
  {
    img: "https://www.beadingbuds.com/uploads/4/8/7/7/48778135/359418_orig.jpg",
    author: "@shelleypauls",
  },
  {
    img: "https://www.mamamag.com.au/wp-content/uploads/2022/05/Party-Park.jpg",
    author: "@peterlaster",
  },
  {
    img: "https://www.momswhothink.com/wp-content/uploads/2023/01/shutterstock_311646617-640x427.jpg",
    author: "@southside_customs",
  },
];

export default BirthdayGallery;
