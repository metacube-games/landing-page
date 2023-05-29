import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Scene3d from "./scene3d";
// import { CubeDiscord, Model } from "./Cube";
import { ModelDiscord } from "./Discord_cube_24";
import { styled } from "@mui/system";
import Image from "next/image";

const InfoSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
}));
export const DiscordEarlyAccess = () => {
  return (
    <Box
      id="earlyAccessSection" // needed for scroll
      component={"div"}
      sx={{
        marginBottom: "-30px",
        marginTop: "30px",
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%",
        // backgroundColor: "#010101",
      }}
    >
      {/* center text */}

      <InfoSection
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          // marginTop: "-10px",
          maxWidth: "1200px",
        }}
      >
        <Box
          component={"div"}
          marginBottom={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography variant="h6">
            Join our discord server for
            {` `}
            <span
              style={{
                fontWeight: 800,
                // marginLeft: "8px",
                // background: "linear-gradient(135deg, #00FF8B 30%, #00FFE3 90%)",
                // WebkitBackgroundClip: "text",
                // WebkitTextFillColor: "transparent",
                color: "#1faa00",
              }}
            >
              Early Access
            </span>
          </Typography>
        </Box>
        {/* <Scene3d asset={<ModelDiscord />} /> */}
        <Image
          src={"/discord.png"}
          alt="feature image"
          width={90}
          height={90}
        />
      </InfoSection>
    </Box>
  );
};
