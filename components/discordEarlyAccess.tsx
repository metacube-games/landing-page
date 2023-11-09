import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import Image from "next/image";
import Link from "next/link";

const InfoSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
}));
export const DiscordEarlyAccess = () => {
  return (
    <Box
      id="earlyAccessSection" // needed for scroll
      component={"div"}
      sx={{
        top: "0px",
        marginBottom: "-30px",
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%",
        marginTop: "-20px",
      }}
    >
      {/* center text */}

      <InfoSection
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          maxWidth: "1200px",
        }}
      >
        <Box
          component={"div"}
          marginBottom={2}
          display="flex"
          justifyContent="center"
        >
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
            }}
          >
            Join our Twitter and Discord server for
            {` `}
            <span
              style={{
                fontWeight: 800,
                color: "#1faa00",
              }}
            >
              Early Access
            </span>
          </Typography>
        </Box>
        <Box
          component={"div"}
          display="flex"
          justifyContent={"space-evenly"}
          width="80%"
          height={100}
          alignItems="center"
        >
          <Link href="https://twitter.com/MetacubeGames">
            <Image
              src={"/X_logo_2023.png"}
              alt="feature image"
              width={90}
              height={90}
            />
          </Link>
          <Link href="https://discord.gg/hXxr7VCp78">
            <Image
              src={"/discord.png"}
              alt="feature image"
              width={90}
              height={90}
            />
          </Link>
        </Box>
      </InfoSection>
    </Box>
  );
};
