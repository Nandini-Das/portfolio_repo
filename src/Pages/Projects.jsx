import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Typography, Card, CardContent, CardMedia, Modal } from '@mui/material';
import { Fade } from 'react-awesome-reveal';
import { Button } from 'react-scroll';

const projects = [
  {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'project1.jpg',
    images: ['p11.jpg'],
  },
  {
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'project2.jpg',
    images: ['p11.jpg'],
  },
  {
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'project3.jpg',
    images: ['p11.jpg'],
  },
  {
    title: 'Project 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'project4.jpg',
    images: ['p11.jpg'],
  },
  {
    title: 'Project 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'project5.jpg',
    images: ['p11.jpg'],
  },
];

const ModalContent = ({ project, onClose }) => {
    const handleCloseClick = (e) => {
      e.stopPropagation();
      onClose();
    };
  return (
    <div style={{ backgroundColor: 'white', padding: '2rem' }}>
      <Typography variant="h6" component="h2" style={{ marginBottom: '1rem' }}>
        {project.title}
      </Typography>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        {project.images.map((image, index) => (
          <img key={index} src={image} alt={`Project Image ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ))}
      </div>
      <Typography variant="body1" component="p">
        {project.description}
      </Typography>
      <button onClick={handleCloseClick} style={{ marginTop: '1rem' }}>
        Close
      </button>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (index) => {
    setSelectedProject(index);
  };

  const handleModalClose = () => {
    setSelectedProject(null);
  };


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: projects.length >= 3 ? 3 : projects.length,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: projects.length >= 2 ? 2 : projects.length,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" component="h1" align="center" style={{ fontWeight: 'bold', marginBottom: '1rem' }}>
        Projects
      </Typography>
      <Fade cascade damping={0.2} triggerOnce>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} onClick={() => handleProjectClick(index)} style={{ cursor: 'pointer' }}>
              <Card>
                <CardMedia component="img" height="140" image={project.image} alt={project.title} />
                <CardContent>
                  <Typography variant="h6" component="h2" style={{ marginBottom: '1rem' }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body1" component="p">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
              <Modal
                open={selectedProject === index}
                onClose={handleModalClose}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ModalContent project={project} onClose={handleModalClose} />
              </Modal>
            </div>
          ))}
        </Slider>
      </Fade>
    </Container>
  );
};

export default Projects;
