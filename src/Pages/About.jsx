import React, { useState, useEffect } from 'react';
import { Fade, Bounce } from 'react-awesome-reveal';
import { Container, Typography, Grid, Button, ButtonGroup } from '@mui/material';
import { Element } from 'react-scroll';

const AboutPage = () => {
  const [totalProjects, setTotalProjects] = useState(0);
  const [completedProjects, setCompletedProjects] = useState(0);
  const [runningProjects, setRunningProjects] = useState(0);
  const totalTarget = 20;
  const completedTarget = 15;
  const runningTarget = 5;
  const styles = {
    container: {
      paddingTop: '2rem',
      paddingBottom: '2rem',
    },
    title: {
      fontWeight: 'bold',
      marginBottom: '1rem',
    },
    description: {
      marginBottom: '2rem',
    },
    skillsContainer: {
      margin: '2rem',
      textAlign: 'center',
    },
    buttonGroup: {
      display: 'flex',
      justifyContent: 'center',
      gap: '0.5rem',
      padding: '0.5rem',
      borderRadius: '10px',
    },
    skillButton: {
      fontWeight: 'bold',
      fontStyle: 'italic',
      border: '1px solid #800080',
      transition: 'all 0.3s ease',
      '&:hover': {
        borderColor: '#ff4081',
      },
    },
  };
  
  useEffect(() => {
    const totalTimer = setInterval(() => {
      if (totalProjects < totalTarget) {
        setTotalProjects((prevCount) => prevCount + 1);
      }
    }, 100);

    const completedTimer = setInterval(() => {
      if (completedProjects < completedTarget) {
        setCompletedProjects((prevCount) => prevCount + 1);
      }
    }, 100);

    const runningTimer = setInterval(() => {
      if (runningProjects < runningTarget) {
        setRunningProjects((prevCount) => prevCount + 1);
      }
    }, 100);

    return () => {
      clearInterval(totalTimer);
      clearInterval(completedTimer);
      clearInterval(runningTimer);
    };
  }, [totalProjects, completedProjects, runningProjects]);

  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.Js', 'Express.Js','MongoDB', 'TypeScript', 'Next.Js'];

  return (
    <Element id="about">
   <Container maxWidth="md" style={styles.container}>
      <Typography variant="h4" component="h1" align="center" style={styles.title}>
        About Me
      </Typography>
      <Typography variant="body1" component="p" align="center" style={styles.description}>
        I am a passionate web developer with expertise in front-end technologies. I love to build
        user-friendly and performant web applications.
      </Typography>
      <div style={styles.skillsContainer}>
        <Typography variant="h6" component="h2" style={styles.title}>
          Skills
        </Typography>
        <Fade cascade triggerOnce>
          <ButtonGroup style={styles.buttonGroup}>
            {skills.map((skill, index) => (
              <Bounce delay={index * 100} key={index}>
                <Button style={styles.skillButton}>{skill}</Button>
              </Bounce>
            ))}
          </ButtonGroup>
        </Fade>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" component="h2" style={styles.title}>
            Total Projects
          </Typography>
          <Fade triggerOnce>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center' }}>
              {totalProjects}+
            </div>
          </Fade>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" component="h2" style={styles.title}>
            Completed Projects
          </Typography>
          <Fade triggerOnce>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center' }}>
              {completedProjects}+
            </div>
          </Fade>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" component="h2" style={styles.title}>
            Running Projects
          </Typography>
          <Fade triggerOnce>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center' }}>
              {runningProjects}+
            </div>
          </Fade>
        </Grid>
      </Grid>
     
    </Container>
  </Element>
   
  );
};

export default AboutPage;
