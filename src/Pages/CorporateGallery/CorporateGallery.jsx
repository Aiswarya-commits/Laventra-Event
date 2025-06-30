import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { motion } from "framer-motion";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
const CorporateGallery = () => {
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
    img: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsX29mZmljZV80MV9waG90b19vZl9wZW9wbGVfZGFuY2luZ19pbl9jb25jZXJ0X3NpbGhvdWV0dF8yNDE0MjI1Ni0yMDNkLTQ0NDQtYmViMC1jNzA4MDQxYmFkM2VfMS5qcGc.jpg",
    author: "@bkristastucchio",
    featured: true,
  },
  {
    img: "https://t4.ftcdn.net/jpg/01/20/28/25/360_F_120282530_gMCruc8XX2mwf5YtODLV2O1TGHzu4CAb.jpg",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://thesilentdiscocompany.co.uk/wp-content/uploads/2023/10/night-party-theme.jpg.webp",
    author: "@helloimnik",
  },
  {
    img: "https://as1.ftcdn.net/jpg/01/23/22/64/1000_F_123226414_fdzRAzNJNKCHkqoEJXPkIlFBBSduLfLq.jpg",
    author: "@nolanissac",
  },
  {
    img: "https://media.npr.org/assets/img/2022/11/04/gettyimages-1183414292-1-_slide-30784f99ac10f059c242d37e91d05ead475854f4.jpg",
    author: "@hjrc33",
  },
  {
    img: "https://media.npr.org/assets/img/2022/11/04/gettyimages-1187652065_slide-49ce797b39c56339d60054f04aa1a3ea06c68cc5.jpg?s=1100&c=50&f=jpeg",
    author: "@arwinneil",
    featured: true,
  },
  {
    img: "https://t3.ftcdn.net/jpg/01/20/28/24/360_F_120282465_htIcYKYiSb98hIrhL6X6ilI0z8vn19LY.jpg",
    author: "@tjdragotta",
  },
  {
    img: "https://t4.ftcdn.net/jpg/02/30/78/31/360_F_230783125_uT2MujnZ2lhBuroMIjpggGiP9QWDCthx.jpg",
    author: "@katie_wasserman",
  },
  {
    img: "https://c8.alamy.com/comp/KPMF0N/group-of-people-dancing-at-night-club-party-and-lights-background-KPMF0N.jpg",
    author: "@silverdalex",
  },
  {
    img: "https://epikweddings.com/wp-content/uploads/2023/11/1205963503712962.2ZfhFoePCSQHs43KBiD1_height640.png",
    author: "@shelleypauls",
  },
  {
    img: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    author: "@peterlaster",
  },
  {
    img: "https://t4.ftcdn.net/jpg/01/99/21/01/360_F_199210113_PO4I2F3CAfEhCnVnWNveK9mlgWyxY8jn.jpg",
    author: "@southside_customs",
  },
];

export default CorporateGallery;
