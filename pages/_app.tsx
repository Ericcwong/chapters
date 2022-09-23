import "../styles/globals.css";
import type { AppProps } from "next/app";
// Dark and light theme
import { ThemeProvider } from "next-themes";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <NavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
