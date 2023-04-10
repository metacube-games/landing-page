import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

export const InstallWallet = () => {
  return (
    // @ts-ignore
    <Box
      sx={{ padding: 4, maxWidth: "1200px", margin: "0 auto", marginBottom: 6 }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6} textAlign="center">
          <Box display="flex" justifyContent="center" p={2}>
            <a href="https://www.argent.xyz/argent-x/">
              <Image
                src="/argentX_logo.svg"
                alt="ArgentX Logo"
                width={200}
                height={200}
              />
            </a>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} textAlign="center">
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{
                color: "#12bc45",
              }}
              gutterBottom
            >
              Get Ready To play!
            </Typography>
            <a href="https://www.argent.xyz/argent-x/">
              <Typography variant="h6">Install Argent X</Typography>
            </a>
            <a href="https://braavos.app/">
              <Typography variant="h6">Install Braavos</Typography>
            </a>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
