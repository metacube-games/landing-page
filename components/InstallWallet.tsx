import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export const InstallWallet = () => {
  return (
    <Box
      component={"div"}
      sx={{ padding: 4, maxWidth: "1200px", margin: "0 auto", marginBottom: 6 }}
    >
      <Box component={"div"} sx={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{
            color: "#1faa00",
            marginBottom: 6,
          }}
          gutterBottom
        >
          Get Ready To play!
        </Typography>
      </Box>

      <Grid container spacing={8}>
        <Grid item textAlign="center" xs={12} sm={6} alignItems="top">
          <Link href="https://www.argent.xyz/argent-x/" passHref>
            <Box component={"div"} sx={{ textAlign: "center" }}>
              <Image
                src="/argentX_logo.svg"
                alt="ArgentX Logo"
                width={115} // Adjust the width and height as necessary
                height={115}
                style={{ width: "100%", height: 115, marginBottom: 20 }}
              />
              <Typography variant="h6">Install Argent X</Typography>
            </Box>
          </Link>
        </Grid>
        <Grid item textAlign="center" xs={12} sm={6} alignItems="top">
          <Link href="https://braavos.app/" passHref>
            <Image
              src="/BravoosWhite.svg"
              alt="ArgentX Logo"
              width={115} // Adjust the width and height as necessary
              height={115}
              style={{ width: "100%", height: 115, marginBottom: 20 }}
            />
            <Typography variant="h6" sx={{ display: "block" }}>
              Install Braavos
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};
