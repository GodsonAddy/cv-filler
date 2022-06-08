import React from "react";
import "../index.css";
import {
  Container,
  CssBaseline,
  Stack,
  Typography,
  IconButton,
  Link,
  Button,
  Box,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import TabsCV from "./TabsCV";

const Banner = () => {
  return (
    <>
      <CssBaseline />
      <div className="banner-image">
        <Container>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
            paddingTop={4}
          >
            <Typography
              sx={{
                flexGrow: 1,
              }}
            >
              <Button
                variant="text"
                sx={{
                  color: "white",
                  fontWeight: 500,
                  fontSize: "1.25rem",
                }}
              >
                Clockwork
              </Button>
            </Typography>
            <IconButton
              component={Link}
              href="https://twitter.com"
              target="_blank"
              rel="noopener"
              sx={{
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#1DA1F2",
                },
              }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://linkedin.com/in/godson-addy"
              target="_blank"
              rel="noopener"
              sx={{
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#0e76a8",
                },
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
            paddingTop={18}
          >
            <Typography variant="h3" sx={{ color: "white" }}>
              Experienced Full-Stack Developer
            </Typography>
          </Stack>

          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
            paddingTop={2}
          >
            <Typography component="span" variant="h6" sx={{ color: "white" }}>
              Remote
            </Typography>
            <Box sx={{ display: "flex" }}>
              <LocationOnRoundedIcon sx={{ color: "white" }} />
              <Typography component="span" variant="h6" sx={{ color: "white" }}>
                Ghana, Greater Accra
              </Typography>
            </Box>
          </Stack>
        </Container>
      </div>
      <TabsCV />
    </>
  );
};

export default Banner;
