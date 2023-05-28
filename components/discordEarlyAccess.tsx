import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Scene3d from "./scene3d";
import { CubeDiscord, Model } from "./Cube";
import { ModelDiscord } from "./Discord_cube_24";
import { styled } from "@mui/system";
import Image from "next/image";

const InfoSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
}));
export const DiscordEarlyAccess = () => {

  return (
    <Box
      id="earlyAccessSection"
      component={"div"}
      sx={{ marginBottom: "-30px", maxWidth: "1200px", margin: "0 auto" }}
    >
      {/* center text */}

      <InfoSection
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          marginTop: "-10px",
          maxWidth: "1200px",
        }}
      >
        <Box
          component={"div"}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography variant="h6">
            Join our discord server for
            {` `}
            <span
              style={{
                fontWeight: 800,
                // marginLeft: "8px",
                background: 'linear-gradient(135deg, #00FF8B 30%, #00FFE3 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                //color: "#1faa00",
              }}
            >
              Early Access
            </span>
          </Typography>
        </Box>
        {/* <Scene3d asset={<ModelDiscord />} /> */}
        <Image src={"/discord.png"} alt="feature image" width={100} height={100} />
      </InfoSection>
    </Box>
  );
};
