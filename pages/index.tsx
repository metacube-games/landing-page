import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material";
import LandingPage from "@/components/LandingPage";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const theme = createTheme({
  // keep same color for dark and light mode
  typography: {
    fontFamily: inter.style.fontFamily,
    // color
  },
});
export const COLOR_MAIN = "#00FF8B";
export const COLOR_MAIN_DARK = "#00FFE3";
export const COLOR_MAIN_LIGHT = "#00FF8B";

export const COLOR_SECONDARY = "#00FF8B";
export const COLOR_SECONDARY_DARK = "#00FFE3";
export const COLOR_SECONDARY_LIGHT = "#00FF8B";

export const COLOR_BACKGROUND_DEFAULT = "#121212";
export const COLOR_BACKGROUND_PAPER = "#121212";
export const COLOR_TEXT = "#FFFFFF";
export const COLOR_TEXT_DARK = "#FFFFFF";
export const COLOR_ERROR = "#FF0000";

// const theme = createTheme({
//   // typography: {
//   //   fontFamily: '"Nova Square", sans-serif',
//   // },
// });

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  justifyContent: "space-between",
  background: `
    linear-gradient(135deg, #121212 0%, #121212 100%),
    linear-gradient(45deg, #121212 0%, #121212 100%)
  `,
}));

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Container>
          <LandingPage />
        </Container>
      </main>
    </ThemeProvider>
  );
}
