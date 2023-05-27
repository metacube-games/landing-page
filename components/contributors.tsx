import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

const Contributor = ({
  name,
  imageUrl,
  description,
}: {
  name: string;
  imageUrl: string;
  description: string;
}) => {
  return (
    <Box
      component={"div"}
      sx={{
        textAlign: "center",
        alignItems: "center",
        flexDirection: "column",
        display: "flex",
      }}
    >
      <Avatar
        sx={{
          width: { xs: 100, sm: 120 },
          height: { xs: 100, sm: 120 },
          marginBottom: 1,
        }}
        src={imageUrl}
        alt={name}
      />
      <Typography variant="h6" gutterBottom>
        {name}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {description}
      </Typography>
    </Box>
  );
};

export const ContributorSection = () => {
  const contributors = [
    {
      name: "Kamyar Taher",
      imageUrl: "ppKam.jpg",
      description: "CEO",
    },
    {
      name: "Bastien Faivre",
      imageUrl: "ppBast.jpeg",
      description: "CTO",
    },
    {
      name: "Nils Delage",
      imageUrl: "ppNils.jpg",
      description: "Graphics",
    },
    {
      name: "Damien Elledge",
      imageUrl: "ppDam.jpeg",
      description: "Communication",
    },
  ];

  return (
    <Box
      component={"div"}
      id="contributorSection"
      sx={{
        flexGrow: 1,
        padding: 2,
        maxWidth: "1200px",
        margin: "0 auto",
        textAlign: "center",
        alignItems: "center",
        marginBottom: 4,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Contributors
      </Typography>
      <Grid container spacing={10} alignItems="top" sx={{ marginTop: 2 }}>
        {contributors.map((contributor, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Contributor {...contributor} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
