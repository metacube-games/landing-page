import React from "react";
import { Model } from "./Cube";
import Scene3d from "./scene3d";
import { Box, Typography, Grid } from "@mui/material";

const FeaturesDescription = (props: {
  model: JSX.Element;
  title: string;
  description: string;
}) => (
  <Box
    component="div"
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Scene3d asset={props.model} />
    <Typography
      gutterBottom
      variant="h6"
      sx={{
        fontWeight: "bold",
        color: "#12bc45",
        width: "250px",
      }}
    >
      {props.title}
    </Typography>
    <Typography
      // should do exactly 3 lines, not less not more
      sx={{ height: "80px", overflow: "hidden", width: "250px" }}
    >
      {props.description}
    </Typography>
  </Box>
);

export const GameFeatures = () => {
  const features = [
    {
      title: "Powered by Starknet",
      model: <Model />,
      description: "Trade, Transfer and Own your assets at the lowest fees",
    },
    {
      title: "Massively Multiplayer",
      model: <Model />,
      description: "Up to 5000 players simultaneously on the same server",
    },
    {
      title: "Free 2 Play",
      model: <Model />,
      description: "Play for Free, No integrated purchase",
    },
  ];

  return (
    <Box
      component="div"
      sx={{
        padding: 2,
        maxWidth: "1200px",
        margin: "0 auto",
        textAlign: "center",
        alignItems: "center",
        marginBottom: 6,
      }}
    >
      <Grid container>
        <Grid container spacing={4} alignItems="top">
          {features.map((feature, index) => (
            <Grid key={index} item xs={12} md={4}>
              <FeaturesDescription
                title={feature.title}
                model={feature.model}
                description={feature.description}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};
