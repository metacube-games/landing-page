import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material";
import LandingPage from "@/components/LandingPage";

const theme = createTheme({
  typography: {
    fontFamily: '"Nova Square", sans-serif',
  },
});

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
