import React from "react";
import { styled, Box } from "@mui/system";
import { Divider } from "@mui/material";
import { ContributorSection } from "./contributors";
import BottomSection from "./bottomSection";
import { GameFeatures } from "./gameFeatures";
import { DiscordEarlyAccess } from "./discordEarlyAccess";
import { NavBar } from "./navBar";
import { InstallWallet } from "./InstallWallet";
import Hero from "./Hero";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { Trailer } from "./Trailer";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  justifyContent: "space-between",
  background: `
    linear-gradient(100deg, #121212 0%, #121312 100%)
   `,
}));

const CustomDivider = styled(Divider)({
  width: "100%",
  height: "2px",
  margin: "20px auto",
  borderRadius: "50px",
  // maxWidth: "1200px",
  background: "linear-gradient(90deg, #1faa00 0%, #1faa00 50%, #1faa00 100%)",
});

const CustomDivider2 = styled(Divider)({
  width: "100%",
  height: "2px",
  margin: "0px auto",
  zIndex: 1,
  borderRadius: "50px",
  maxWidth: "1200px",
  background: "linear-gradient(90deg, #1faa00 0%, #1faa00 50%, #1faa00 100%)",
  marginBottom: "-1px",
});

const LandingPage: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Hero />
      {/* <Trailer /> */}
      <DiscordEarlyAccess />
      <CustomDivider />
      <GameFeatures />
      <InstallWallet />
      <ContributorSection />
      {/* <CustomDivider2 /> */}
      <BottomSection />
    </Container>
  );
};

export default LandingPage;
