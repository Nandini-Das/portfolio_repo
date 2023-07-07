import React from 'react';
import { Typography, Grid, Paper, Container } from '@mui/material';
import { Element } from 'react-scroll';
const Education = () => {
    return (
       <Element id='education'>
        <Container>
            <br />
         <div>
      <Typography variant="h4" component="h1" align="center" style={{ marginBottom: '2rem' }}>
        Education and Achievements
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: '1rem' }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Educational Information
            </Typography>
            <Typography variant="body1" component="p">
              BSc in Computer Science and Engineering
              (Jan 2018 to Jan 2023)
            </Typography>
            <Typography variant="body1" component="p">
              Premier University, Chittagong
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: '1rem' }}>
            <Typography variant="h6" component="h2" gutterBottom>
             Courses
            </Typography>
            <Typography variant="body1" component="p">
             Complete Web Development Course with Programming Hero
            </Typography>
            <Typography variant="body1" component="p">
              Jan 2023 to Present
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
       </Container>
       </Element>
    );
};

export default Education;