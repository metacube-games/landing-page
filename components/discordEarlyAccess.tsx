import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Scene3d from "./scene3d";
import { CubeDiscord, Model } from "./cube";
import { styled } from "@mui/system";
const InfoSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
}));
export const DiscordEarlyAccess = () => {
  return (
    <Box
      id="earlyAccessSection"
      // component="main"
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
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h6" gutterBottom>
            Join our discord server for
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
              marginLeft: "8px",
              color: "#12bc45",
            }}
          >
            early acces
          </Typography>
        </Box>
        <Scene3d asset={<CubeDiscord />} />
      </InfoSection>
    </Box>
  );
};
