import { Head } from "@inertiajs/inertia-react";
import { TextField, Container, Button } from "@mui/material";
import Layout from "../commons/layout";
import LoginIcon from "@mui/icons-material/Login";

const Login = () => {
  return (
    <>
      <Head title="LOGIN" />
      <Layout>
        <Container maxWidth="md" sx={{ mt: 5 }}>
          <TextField
            required
            id="email"
            label="Email"
            defaultValue="Email Address"
            fullWidth
            autoComplete="email"
          />
          <TextField
            required
            id="password"
            label="Password"
            defaultValue="Password"
            fullWidth
            autoComplete="password"
            sx={{ mt: 5 }}
          />
          <Button variant="contained" endIcon={<LoginIcon />}>
            LOGIN
          </Button>
        </Container>
      </Layout>
    </>
  );
};
export default Login;
