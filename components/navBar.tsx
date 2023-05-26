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
  color: "#010101", // Set the button text color to white
  "&:hover": {
    backgroundColor: "#23de56 !important", // Set the button hover background color
  },
});

const StyledButton = styled(Button)({
  color: "#ddd", // Set the button text color to white
  "&:hover": {
    backgroundColor: "rgba(30,30,30, 1) !important", // Set the button hover background color
  },
  // borderTopRightRadius: "0px",
  // borderBottomRightRadius: "0px",
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
    <Box component={"div"}>
      <StyledAppBar
        elevation={isTop ? 0 : 4}
        sx={{
          width: "100%",
          backgroundColor: isTop ? "rgba(0, 0, 0, 0.0)" : "rgba(5,5,5, 0.95)",
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
            component={"div"}
            sx={{
              display: "flex",
              alignItems: "center",
              marginLeft: "-20px",
            }}
          >
            {/* <Image
              src="/metacubeLogo.svg" // Replace this with the path to your SVG logo
              alt="Website Logo"
              width={100} // Adjust the width and height as necessary
              height={100}
              onClick={scrollToTop}
              style={{ cursor: "pointer" }}
            /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="50"
              viewBox="0, 0, 450, 140"
              onClick={scrollToTop}
              style={{ cursor: "pointer" }}
            >
              <path
                style={{
                  filter: isTop ? "none" : "drop-shadow(00px 0px 20px #1faa00)",
                  transition: "all 0.3s ease-in-out",
                }}
                fill="#1faa00"
                transform="scale(1.5) translate(-110, -55)"
                d="m198.5 58.9-5.2 3a1681 1681 0 0 1-9 5c-4.7 2.8-5.3 3.2-5.8 4-1.2 2-.1 4.9 2.2 5.5 1.6.4 1 .6 14.9-7.4 3.7-2.1 4.3-2.4 4.7-2.2.3 0 1.6.8 3 1.6 12.8 7.5 13.7 8 14.4 8 2.9.6 5.1-2.7 3.8-5.3-.5-1-.8-1.1-4.5-3.3l-9.4-5.4c-6.9-4-7.5-4.3-9-3.5m-37 21.3c-.8.3-1.8 1.5-2 2.4-.3 1-.3 43.4 0 44.4.9 3.3 5.6 3.6 6.9.5.3-.6.3-3 .3-19.1l.1-18.4 5.3 3 23.6 13.6.5.3v41.2l.4.9c1.3 2.6 5 2.6 6.5 0 .4-.6.4-1 .5-21.4V107l2.4-1.4a2422.5 2422.5 0 0 0 22.7-13 36 36 0 0 1 4.2-2.3c.1 0 .2 8.3.2 18.5 0 17 0 18.4.3 19 1.4 2.6 5.3 2.6 6.6 0 .5-1 .5-44.7 0-45.7-1-2.1-3.2-2.7-5.4-1.5a2271.2 2271.2 0 0 0-34.7 19.9 2299.2 2299.2 0 0 0-12.7-7.2 5636 5636 0 0 1-7.7-4.4c-16.4-9.5-15.3-9-16.4-9-.6.1-1.3.2-1.6.4"
              />
            </svg>

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

          <Box component={"div"} sx={{ flexGrow: 1 }}></Box>

          <Box
            component={"div"}
            sx={{
              backgroundColor: "rgba(5,5,5, 1) !important",
              borderRadius: "4px",
            }}
          >
            <ScrollLink
              to="contributorSection"
              spy={true}
              smooth={true}
              duration={500}
              style={{ textDecoration: "none" }}
              offset={-60}
            >
              <StyledButton
                sx={{
                  backgroundColor: "rgba(5,5,5, 1) !important", // Set the button background to black
                }}
                size="large"
              >
                Team
              </StyledButton>
            </ScrollLink>
            {/* <StyledButton size="large"> Blog</StyledButton> */}
            {/* <StyledButton size="large">FAQ</StyledButton> */}
            <ScrollLink
              to="earlyAccessSection"
              spy={true}
              smooth={true}
              duration={500}
              style={{ textDecoration: "none" }}
              offset={-63}
            >
              <StyledPlayButton size="large">Early Access</StyledPlayButton>
            </ScrollLink>
          </Box>
        </Toolbar>
      </StyledAppBar>
      <MainImage src="/background.png" alt="Main banner" />
    </Box>
  );
};
