import React from "react";
import { Box } from "@mui/system";

export const Trailer = () => {
  return (
    <Box
      component={"div"}
      sx={{ width: "100%" }}
      justifyContent={"center"}
      justifyItems={"center"}
      alignItems={"center"}
      display={"flex"}
      flexDirection={"column"}
    >
      <iframe
        style={{ border: "none" }} // Apply CSS directly to remove the border
        width="80%"
        height="700"
        src="https://www.youtube.com/embed/WT58alm2_a0?autoplay=1&controls=1&modestbranding=1&showinfo=0&loop=1"
        // title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        autoFocus
        loading="lazy"
      ></iframe>
    </Box>
  );
};
