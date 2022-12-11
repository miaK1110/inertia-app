import { Head } from "@inertiajs/inertia-react";
import { Paper, Alert, Button, Box } from "@mui/material";

import Layout from "@/commons/layout";
import News from "@/commons/news";

const styles = {
  paperContainer: {
    backgroundImage: "url('/images/hero1.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    width: "100vw",
    minHeight: "100vh",
  },
};

export default function index() {
  return (
    <>
      <Head title="TOPPAGE" />
      <Layout>
        <Paper style={styles.paperContainer}>nothing</Paper>
        <div
          style={{
            backgroundImage: `url(${Image})`,
          }}
        ></div>
        <Box component="div" sx={{ display: "block" }}>
          <Alert
            action={
              <Button color="inherit" size="small">
                UNDO
              </Button>
            }
          >
            There is new — check it out!
          </Alert>
        </Box>
        <News />
      </Layout>
    </>
  );
}
