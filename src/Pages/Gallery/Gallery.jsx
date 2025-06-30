import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import WeddingGallery from "../WeddingGallery/WeddingGallery";
import CorporateGallery from "../CorporateGallery/CorporateGallery";
import BirthdayGallery from "../BirthdayGallery/BirthdayGallery";
import Navbar from "../../Components/Navbar/Navbar";
import { motion } from "framer-motion";
import Footer from "../../Components/Footer/Footer";

const Gallery = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                style={{ textAlign: "center", marginLeft: "600px" }}
              >
                <Tab label="Wedding" value="1" />
                <Tab label="Corporate" value="2" />
                <Tab label="Birthday" value="3" />
              </TabList>
            </Box>

            <TabPanel value="1" style={{ padding: 0 }}>
              <WeddingGallery />
            </TabPanel>

            <TabPanel value="2" style={{ padding: 0 }}>
              <CorporateGallery />
            </TabPanel>

            <TabPanel value="3" style={{ padding: 0 }}>
              <BirthdayGallery />
            </TabPanel>
          </TabContext>
        </Box>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Gallery;
