// pages/index.js

import { Container, Typography, Button, Link } from '@mui/material';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to My Next.js App!
        </Typography>
        <Typography variant="body1">
          This is a simple project using Next.js and Material-UI.
        </Typography>
        <Button variant="text">Text</Button>
        <Link href="/about">
          <Button variant="contained">Contained</Button>
        </Link>
      </Container>
    </div>
  );
};

export default Home;
