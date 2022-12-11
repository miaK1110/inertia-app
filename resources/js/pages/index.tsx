import { Head } from "@inertiajs/inertia-react";
import {
  Paper,
  Alert,
  Button,
  Box,
  Container,
  Typography,
  Link,
  Grid,
} from "@mui/material";

import Layout from "@/commons/layout";
import News from "@/commons/news";

const styles = {
  paperContainer: {
    backgroundImage: "url('/images/hero.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    width: "100vw",
    minHeight: "100vh",
  },
};

export default function index() {
  return (
    <>
      <Head title="TOPPAGE" />
      <Layout>
        <Paper style={styles.paperContainer}></Paper>
        <Container component="div" sx={{ display: "block" }} maxWidth="lg">
          <Typography
            variant="h5"
            noWrap
            sx={{
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              mt: 15,
            }}
          >
            What's new?
          </Typography>
          <News />
          <Link href="#" color="inherit"></Link>
          <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
            <Button variant="outlined" color="inherit">
              VIEW MORE NEWS
            </Button>
          </Grid>
        </Container>
      </Layout>
    </>
  );
}
