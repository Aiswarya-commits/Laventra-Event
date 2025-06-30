import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Footer from "../../Components/Footer/Footer";
import { motion } from "framer-motion";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
const WeddingGallery = () => {
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
            height: "1000px",
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
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
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
    img: "https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg",
    author: "@bkristastucchio",
    featured: true,
  },
  {
    img: "https://images.hellomagazine.com/horizon/landscape/5ef2ea51c6b7-celebrity-weddings-2018-t.jpg",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://www.alfaazphotography.com/wp-content/uploads/2020/05/FW-_-SA-1621-scaled.jpg",
    author: "@helloimnik",
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/55b98f1ae4b015d421ddaacf/3ba044af-36b6-430e-aa9e-82c79df293ef/Nikkah+Islamic+wedding+stationery_ananyacards.com.jpg",
    author: "@nolanissac",
  },
  {
    img: "https://i.pinimg.com/736x/6c/6a/41/6c6a415e7db2a5227ccf0f816c927250.jpg",
    author: "@hjrc33",
  },
  {
    img: "https://cdn0.weddingwire.in/article/1405/3_2/960/jpg/125041-indian-wedding-photography-timeline-shutterdown.jpeg",
    author: "@arwinneil",
    featured: true,
  },
  {
    img: "https://assets.thenodmag.com/website-assets/Featured_stylemeupwithsakshi_43cc7b6f32-1x1.jpg",
    author: "@tjdragotta",
  },
  {
    img: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-10/25/full/1729876827-0294.jpg?im=FeatureCrop,size=(826,465)",
    author: "@katie_wasserman",
  },
  {
    img: "https://crystallinestudio.com/image_gallery_big/Crystalline-photography-1793.jpg",
    author: "@silverdalex",
  },
  {
    img: "https://media-api.xogrp.com/images/f4570601-a1e6-4802-86fb-ad9e988066fe~rs_768.h",
    author: "@shelleypauls",
  },
  {
    img: "https://cdn0.weddingwire.in/article/9593/3_2/960/jpg/13959-kerala-wedding-ceremonies-wedding-mopics-lead-image.jpeg",
    author: "@peterlaster",
  },
  {
    img: "https://i.pinimg.com/originals/5b/4f/97/5b4f978a4af08169a54f4d4222029725.jpg",
    author: "@southside_customs",
  },
  {
    img: "https://thetalesoftradition.com/wp-content/uploads/2023/12/Saptapadi_-Thali-1024x681.jpg",
    author: "@southside_customs",
  },
  {
    img: "https://assets.vogue.in/photos/652e516c88d1804dc9a1a159/3:4/w_2560%2Cc_limit/Wedding.jpeg",
    author: "@southside_customs",
  },
  {
    img: "https://www.unicornweddingplanners.com/wp-content/uploads/2021/09/5ad73f43-5625-40d9-bd0b-9e5fe5d5217a.jpg",
    author: "@southside_customs",
  },
  {
    img: "https://www.moonwedlock.com/wp-content/uploads/2024/06/intimate-engagement-in-palakkad-celebrating-malayalam-serial-actress-haritha-nairs-engagement-with-sanoj-2-scaled.jpg",
    author: "@southside_customs",
  },
  {
    img: "https://i.pinimg.com/736x/c6/8f/f4/c68ff4153023f9d99365fd16ed06a4da.jpg",
    author: "@southside_customs",
  },
  {
    img: "https://crystallinestudio.com/blogimages/Crystalline-photography-50.jpg",
    author: "@southside_customs",
  },
  {
    img: "https://images.prismic.io/qpidindia/1b2cecc0-85d5-4658-9717-a7653d2431a2_nikah-min.jpg?auto=compress,format&rect=0,0,6720,4480&w=900&h=600",
    author: "@southside_customs",
  },
  {
    img: "https://lirp.cdn-website.com/bd6f6ba9/dms3rep/multi/opt/unnamed+%2871%29-640w.png",
    author: "@southside_customs",
  },
  {
    img: "https://mahacelebrations.com/wp-content/uploads/2023/08/Muslim-Wedding-Traditions-Explained-Valima-scaled-1.jpg",
  },
  {
    img: "https://birthdaywala.in/wp-content/uploads/2024/08/Nikah-Partition-Decoration01.webp",
  },
  {
    img: "https://image.wedmegood.com/resized-nw/700X/wp-content/uploads/2023/02/IMG-5213.jpg.jpg",
    author: "@southside_customs",
  },
  {
    img: "https://cdn.guides4brides.co.uk/prod/crm/sites/guides_for_brides/page-title-and-imgs/88af4db7-cd61-424d-8ce3-886fe19168ba/muslim_wedding.jpg",
  },
];
<Footer />;

export default WeddingGallery;
