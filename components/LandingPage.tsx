import React from "react";
import { styled } from "@mui/system";
import { Divider } from "@mui/material";
import { ContributorSection } from "./contributors";
import BottomSection from "./bottomSection";
import { GameFeatures } from "./gameFeatures";
import { DiscordEarlyAccess } from "./discordEarlyAccess";
import { NavBar } from "./navBar";
import { InstallWallet } from "./InstallWallet";

const CustomDivider = styled(Divider)({
  width: "75%",
  height: "2px",
  margin: "20px auto",
  borderRadius: "50px",
  maxWidth: "1200px",
  background: "linear-gradient(90deg, #12bc45 0%, #12bc45 50%, #12bc45 100%)",
});

const CustomDivider2 = styled(Divider)({
  width: "75%",
  height: "2px",
  margin: "0px auto",
  zIndex: 1,
  borderRadius: "50px",
  maxWidth: "1200px",
  background: "linear-gradient(90deg, #12bc45 0%, #12bc45 50%, #12bc45 100%)",
  marginBottom: "-1px",
});

const LandingPage: React.FC = () => {
  return (
    <>
      <NavBar />
      {/* <DiscordEarlyAccess />
      <CustomDivider />
      <GameFeatures />
      <InstallWallet />
      <ContributorSection />
      <CustomDivider2 /> */}
      <BottomSection />
    </>
  );
};

export default LandingPage;
