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
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6} textAlign="center">
          <Box component={"div"} display="flex" justifyContent="center" p={2}>
            <Link href="https://www.argent.xyz/argent-x/" passHref>
              <Image
                src="/argentX_logo.svg"
                alt="ArgentX Logo"
                width={200} // Adjust the width and height as necessary
                height={200}
                style={{ width: 200, height: 200 }}
              />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} textAlign="center">
          <Box component={"div"} sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{
                color: "#1faa00",
              }}
              gutterBottom
            >
              Get Ready To play!
            </Typography>
            <Link href="https://www.argent.xyz/argent-x/" passHref>
              <Typography variant="h6" sx={{ display: "block" }}>
                Install Argent X
              </Typography>
            </Link>
            <Link href="https://braavos.app/" passHref>
              <Typography variant="h6" sx={{ display: "block" }}>
                Install Braavos
              </Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
