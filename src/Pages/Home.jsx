import React from 'react';
import { Fade, Bounce } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import AboutPage from './About';
import Projects from './Projects';
import Contact from './Contact';
import Education from './Education';
import { Container } from '@mui/material';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100vh',
    padding: '0 20px',
  },
  leftSection: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: '40px',
    textAlign: 'left',
  },
  rightSection: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: '1.2rem',
    padding: '0px',
    margin: '0px',
    color: '#777',
  },
  location: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#555',
  },
  image: {
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  downloadButton: {
    marginTop: '1rem',
    padding: '10px 20px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    borderRadius: '4px',
    width:'30%',
    color: '#fff',
    backgroundColor: '#90EE90',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: '#76CD8E',
    },
  },
  downloadLink: {
    marginTop: '1rem',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: 'inherit', // Light green color
    textDecoration: 'none',
    transition: 'color 0.3s',
    '&:hover': {
      color: '#76CD8E', // Light green color with darker shade on hover
    },
  },

};

const Home = () => {
  const handleDownloadResume = () => {
    // Add your resume download logic here
  };

  return (
    
  <>
  <Container>
  <div style={styles.container}>
      <div style={styles.leftSection}>
        <Fade direction="left" triggerOnce>
          <h1 style={styles.title}>
            Hi there! I am <br /> Nandini Das Rima
          </h1>
        </Fade>
        <p style={styles.description}>
          Full Stack Web Developer, MERN Stack Developer, Front-End Developer, Github addict.
        </p>
        <p style={styles.location}>Chittagong, Bangladesh.</p>
        <button
          style={styles.downloadButton}
          
        >
          
          <a
          href="/public/res.pdf"
          style={styles.downloadLink}
          download
        
        >
          Download Resume
        </a>
        </button>
      </div>
      <div style={styles.rightSection}>
        <Bounce triggerOnce>
          <img
            src="myPhoto.jpg"
            alt="Profile"
            style={styles.image}
          />
        </Bounce>
      </div>
    </div>
  </Container>
    <AboutPage></AboutPage>
    <Projects></Projects>
    <Education></Education>
    <Contact></Contact>
    
    </>
  );
};

export default Home;
