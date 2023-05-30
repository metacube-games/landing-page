import React from "react";
import { styled, keyframes } from "@mui/system";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const slideRight = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const slideLeft = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const HeroContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "64px 0 0 0", // set the top margin to 64px or the value that suits your needs
  // don't allow to gow beyond the page width limit
  overflow: "hidden", // add this line
});

const Image = styled("img")({
  maxWidth: "100%",
  animation: `${fadeIn} 2s`,
  objectFit: "cover", // this will ensure that the images are cropped
  objectPosition: "top", // this will align the image to the top of the box
  width: "500px", // change this to the desired width
  height: "500px", // change this to the desired height
});

const Image1 = styled(Image)({
  animation: `${fadeIn} 2s, ${slideRight} 2s`,
  // when out of the screen, it shouldn't extend the page width
});

const Image2 = styled(Image)({
  animation: `${fadeIn} 2s, ${slideLeft} 2s`,
  objectPosition: "top left",
});

const Hero: React.FC = () => (
  <HeroContainer>
    <Image1 src="/pepe.png" alt="Image 1" />
    <Image2 src="/fiscos.png" alt="Image 2" />
  </HeroContainer>
);

export default Hero;
