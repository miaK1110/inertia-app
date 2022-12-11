import React, { FC } from "react";
import NavBar from "./navBar";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <CssBaseline />
        <NavBar />
        <section>{children}</section>
      </main>
    </ThemeProvider>
  );
};

export default Layout;
