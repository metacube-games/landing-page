import React from "react";
import Image from "next/image";
import { AppBar, Button, Toolbar } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { Box, Typography, IconButton, Link, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { Twitter, Telegram, LinkedIn } from "@mui/icons-material";

const SocialIcon = styled(IconButton)({
  color: "#12bc45",
});
const StyledPlayButton = styled(Button)({
  backgroundColor: "#1faa00  !important", // Set the button background to black
  color: "#121212", // Set the button text color to white
  "&:hover": {
    backgroundColor: "#333", // Set the button hover background color
  },
  //   background of the button red
  background: "red",
});

const StyledButton = styled(Button)({
  backgroundColor: "#121212 !important", // Set the button background to black
  color: "#ddd", // Set the button text color to white
  "&:hover": {
    backgroundColor: "#333", // Set the button hover background color
  },
  //   background of the button red
  background: "red",
});

const StyledAppBar = styled(AppBar)({
  backgroundColor: "rgba(0, 0, 0, 0.0) ",
  color: "#000",
  zIndex: 1,
});
const MainImage = styled("img")({
  width: "100%",
  height: "auto",
  maxHeight: "80vh",
  objectFit: "cover",
});

export const NavBar = () => {
  const [isTop, setIsTop] = React.useState(true);
  React.useEffect(() => {
    const onScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsTop(scrollTop === 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // on click on the logo, scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Box>
      <StyledAppBar
        elevation={isTop ? 0 : 4}
        sx={{
          width: "100%",
          backgroundColor: isTop
            ? "rgba(0, 0, 0, 0.0)"
            : "rgba(0, 10, 0, 0.75)",
          transition: "all 0.3s ease-in-out",
          // maxHeight: "8px",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "center",
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginLeft: "-20px",
            }}
          >
            <Image
              src="/metacubeLogo.svg" // Replace this with the path to your SVG logo
              alt="Website Logo"
              width={100} // Adjust the width and height as necessary
              height={100}
              onClick={scrollToTop}
              style={{ cursor: "pointer" }}
            />
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: "bold",
                marginLeft: "-45px",
                color: "#dddddd",
                textShadow: isTop
                  ? ""
                  : `0 0 4px #1faa00, 0 0 10px #1faa00, 0 0 10px #1faa00, 0 0 20px #1faa00`,
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
              }}
              onClick={scrollToTop}
            >
              Metacube
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }}></Box>

          {/* <ScrollLink
            to="contributorSection"
            spy={true}
            smooth={true}
            duration={500}
            style={{ textDecoration: "none" }}
            offset={-50}
          >
            <StyledButton size="large">Team</StyledButton>
          </ScrollLink>
            <ScrollLink
            to="earlyAccessSection"
            spy={true}
            smooth={true}
            duration={500}
            style={{ textDecoration: "none" }}
            offset={-50}
          >
            <StyledPlayButton size="large">Early Access</StyledPlayButton>
          </ScrollLink> */}
        </Toolbar>
      </StyledAppBar>
      <MainImage src="/t12.png" alt="Main banner" />
      <Box sx={{ marginTop: "15px" }}>
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
      </Box>
    </Box>
  );
};
