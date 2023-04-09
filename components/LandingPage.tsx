import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/system";
import Image from "next/image";
import Scene3d from "./scene3d";
import { Model } from "./Cube";
import { Divider } from "@mui/material";

const CustomDivider = styled(Divider)({
  width: "80%",
  height: "2px",
  margin: "20px auto",
  borderRadius: "1px",
  // line gradient to green to  green-blue, from left to right, gradually
  background: "linear-gradient(90deg, #12bc45 0%, #12bc45 50%, #12bc45 100%)",
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

const StyledButton = styled(Button)({
  backgroundColor: "#010101 !important", // Set the button background to black
  color: "#fff", // Set the button text color to white
  "&:hover": {
    backgroundColor: "#333", // Set the button hover background color
  },
  //   background of the button red
  background: "red",
});

const StyledPlayButton = styled(Button)({
  backgroundColor: "#12bc45  !important", // Set the button background to black
  color: "#010101", // Set the button text color to white
  "&:hover": {
    backgroundColor: "#333", // Set the button hover background color
  },
  //   background of the button red
  background: "red",
});

const InfoSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
}));

const Socials = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(2),
}));

const FeaturesDescription = (props: {
  model: JSX.Element;
  title: string;
  description: string;
}) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      align: "center",
      width: "200px",
      backgroundColor: "rgb(50,55,50)",
      borderRadius: "10px",
      padding: "10px",
      textAlign: "center",
    }}
  >
    <Scene3d asset={props.model} />
    <Typography
      sx={{
        fontWeight: "bold",
        color: "#12bc45",
      }}
    >
      {props.title}
    </Typography>
    <Typography>{props.description}</Typography>
  </Box>
);
const LandingPage: React.FC = () => {
  return (
    <>
      <Box>
        <StyledAppBar
          elevation={0}
          sx={{
            width: "100%",
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
                width={110} // Adjust the width and height as necessary
                height={20}
              />
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: "bold",
                  marginLeft: "-42px",
                  color: "#dddddd",
                  textShadow: `0 0 4px #12bc45, 0 0 10px #12bc45, 0 0 10px #12bc45, 0 0 20px #12bc45`,
                }}
              >
                Metacube
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 1 }}></Box>

            <StyledButton size="large">Team</StyledButton>
            <StyledButton size="large"> Blog</StyledButton>
            <StyledButton size="large">FAQ</StyledButton>
            <StyledPlayButton size="large">Play</StyledPlayButton>
          </Toolbar>
        </StyledAppBar>
        <MainImage src="/t12.png" alt="Main banner" />
      </Box>
      {/* ... (rest of the LandingPage components) */}

      <Box component="main" sx={{ marginBottom: "-30px" }}>
        {/* center text */}

        <InfoSection
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            marginTop: "-10px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h6" gutterBottom>
              Join our discord server for
            </Typography>

            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: "bold",
                marginLeft: "5px",
                color: "#12bc45",
              }}
            >
              early acces
            </Typography>
          </Box>
          <Scene3d asset={<Model />} />
        </InfoSection>
      </Box>
      {/* horizontal white line divider */}
      <CustomDivider />
      <Socials>
        <FeaturesDescription
          title={" Powered by Starknet"}
          model={<Model />}
          description={"Trade, Transfer and Own your assets at the lowest fees"}
        />
        <FeaturesDescription
          title={"Massively Multiplayer"}
          model={<Model />}
          description={"Up to 5000 players simultaneously on the same server"}
        />
        <FeaturesDescription
          title={"Free 2 Play"}
          model={<Model />}
          description={"Play for Free No integrated purchase"}
        />
      </Socials>
    </>
  );
};

export default LandingPage;
