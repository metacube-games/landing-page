import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Scene3d from "./scene3d";
import { CubeDiscord, Model } from "./Cube";
import { styled } from "@mui/system";
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
                // fontWeight: "bold",
                // marginLeft: "8px",
                color: "#1faa00",
              }}
            >
              early acces
            </span>
          </Typography>
        </Box>
        <Scene3d asset={<CubeDiscord />} />
      </InfoSection>
    </Box>
  );
};
