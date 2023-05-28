import React from "react";
//import { Model } from "./Cube";
import Scene3d from "./scene3d";
import { Box, Typography, Grid } from "@mui/material";
import { ModelStarknet } from "./Starknet_cube_24_color_clean";
import Image from "next/image";


// TODO: make models and use this snippet
// const FeaturesDescription = (props: {
//   model: JSX.Element;
//   title: string;
//   description: string;
// }) => (
//   <Box
//     component={"div"}
//     sx={{
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center",
//     }}
//   >
//     <Scene3d asset={props.model} />
//     <Typography
//       gutterBottom
//       variant="h6"
//       sx={{
//         fontWeight: "bold",
//         color: "#1faa00",
//         width: "250px",
//       }}
//     >
//       {props.title}
//     </Typography>
//     <Typography
//       // should do exactly 3 lines, not less not more
//       sx={{ height: "80px", overflow: "hidden", width: "250px" }}
//     >
//       {props.description}
//     </Typography>
//   </Box>
// );

// use this while we don't have models
const FeaturesDescription = (props: {
  image: string;
  title: string;
  description: string;
}) => (
  <Box
    component={"div"}
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Image src={props.image} alt="feature image" width={100} height={100} />
    {/* <Scene3d asset={props.model} /> */}
    <Typography
      gutterBottom
      variant="h6"
      sx={{
        fontWeight: "bold",
        color: "#1faa00",
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
      // model: <ModelStarknet position={[0, 0, 1]} />,
      image: "/SN-gradient-dark.png",
      description: "Lowest fees for trading, transferring, and owning assets.",
    },
    {
      title: "Massively Multiplayer",
      // model: <Model />,
      image: "/online.png",
      description:
        "Up to 5,000 players on a shared server, all focused on the Metacube.",
    },
    {
      title: "Free 2 Play",
      // model: <Model />,
      image: "/f2p.webp",
      description: "No integrated purchases, completely free to play.",
    },
    {
      title: "One-Time Event",
      // model: <Model />,
      image: "/clock.webp",
      description:
        "Join the unique Metacube destruction and await the next season's mysteries.",
    },
  ];

  return (
    <Box
      component={"div"}
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
            <Grid key={index} item xs={12} md={6} lg={3}>
              <FeaturesDescription
                title={feature.title}
                // model={feature.model}
                image={feature.image}
                description={feature.description}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};
