import React from "react";
import { Box, Typography, IconButton, Link, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { Twitter, Telegram, LinkedIn } from "@mui/icons-material";

const SocialIcon = styled(IconButton)({
  color: "#1faa00",
});

const BottomSection = () => {
  return (
    <Box
      component={"div"}
      sx={{
        backgroundColor: "#010101",
        color: "#1faa00",
        padding: "2rem 1rem",
        textAlign: "center",
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        <Grid item>
          <Link href="https://twitter.com/MetacubeGames">
            <SocialIcon
              // component={Link}
              // make icone white
              sx={{ color: "#ddd" }}
            >
              <Twitter />
            </SocialIcon>
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://telegram.org">
            <SocialIcon sx={{ color: "#ddd" }}>
              <Telegram />
            </SocialIcon>
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://www.linkedin.com">
            <SocialIcon sx={{ color: "#ddd" }}>
              <LinkedIn />
            </SocialIcon>
          </Link>
        </Grid>
      </Grid>

      <Typography variant="h6" gutterBottom mt={2}>
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
      </Typography>
    </Box>
  );
};

export default BottomSection;
