import React, { useState } from "react";
import PropTypes from "prop-types";
import { Tabs, Container, Tab, Typography, Box } from "@mui/material";
import Application from "./application";

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: Number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsCV() {
  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label="Job Details"
              {...a11yProps(0)}
              sx={{ fontWeight: 500, fontSize: "1.25rem" }}
            />
            <Tab
              label={
                value !== 1 ? (
                  <div
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      display: "inline-block",
                      textAlign: "center",
                      padding: "1rem",
                      fontSize: "1rem",
                      borderRadius: "10%",
                    }}
                  >
                    Apply
                  </div>
                ) : (
                  "Application"
                )
              }
              {...a11yProps(1)}
              sx={{ fontWeight: 500, fontSize: "1.25rem" }}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Application />
        </TabPanel>
      </Box>
    </Container>
  );
}
