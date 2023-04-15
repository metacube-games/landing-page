import React from "react";
import { Box, Typography, IconButton, Link, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { Twitter, Telegram, LinkedIn } from "@mui/icons-material";

const SocialIcon = styled(IconButton)({
  color: "#12bc45",
});

const BottomSection = () => {
  return (
    <Box
      component="div"
      sx={{
        backgroundColor: "#121212",
        color: "#12bc45",
        padding: "2rem 1rem",
        textAlign: "center",
        top: "0px",
        marginBottom: "100px",
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        <Grid item>
          <SocialIcon
            component="div"
            component={Link}
            href="https://twitter.com"
            // make icone white
            sx={{ color: "#ddd" }}
          >
            <Twitter />
          </SocialIcon>
        </Grid>
        <Grid item>
          <SocialIcon
            component="div"
            component={Link}
            href="https://telegram.org"
            sx={{ color: "#ddd" }}
          >
            <Telegram />
          </SocialIcon>
        </Grid>
        <Grid item>
          <SocialIcon
            component="div"
            component={Link}
            href="https://www.linkedin.com"
            sx={{ color: "#ddd" }}
          >
            <LinkedIn />
          </SocialIcon>
        </Grid>
      </Grid>

      {/* <Typography variant="h6" gutterBottom mt={2}>
        More
      </Typography>
      <Typography>
        <Link
          href="/contact"
          color="inherit"
          underline="hover"
          sx={{ color: "#ddd" }}
        >
          Contact Us
        </Link>
      </Typography>
      <Typography>
        <Link
          href="/branding"
          color="inherit"
          underline="hover"
          sx={{ color: "#ddd" }}
        >
          Branding
        </Link>
      </Typography> */}
    </Box>
  );
};

export default BottomSection;
