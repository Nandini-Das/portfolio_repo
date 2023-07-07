import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Typography, Card, CardContent, CardMedia, Modal, Button} from '@mui/material';
import { Fade,Bounce } from 'react-awesome-reveal';
import { Element } from 'react-scroll';



const projects = [
  {
    title: 'Rhythm Rocker',
    description: 'Rhythm Rocker is a Music-Instrument Learning School Website. Here any of the user can see the Classes and Instructors. If any user want to enroll he/she have to login/signup. For the Admin, Instructor and Student who wants to enroll have their own dashboard where different functionality they can perform.',
    description1: ' Implemented the different route for admin, instructor and students with login system.  Implement a secure cart system that allows users to add class to their cart while they continue browsing.The cart should display a summary of selected items  Class Enroll system with payment method.',
    image: 'rr.png',
    images: ['r1.png', 'r2.png', 'r3.png', 'r4.png','r5.png', 'r6.png'],
    githubLink: 'https://github.com/Nandini-Das/Rhythm_Rocker',
    liveSiteLink: 'https://assignment-12-5e090.web.app/',
  },
  {
    title: 'LEGO Eporium',
    description: 'LEGO Eporium is a toy market place where different types of lego toys can be purchased and you can also add ten on cart. Authentication is also implemented here and the logged in person also can play the role as admin by adding new toy and also make operation like update and delete',
    description1:' Implement a search and browsing system that displays a comprehensive collection of Lego sets. Users should be able to browse through various categories.  Create dedicated pages for each Lego set, displaying essential information such as the set name, number of pieces, recommended age range, and any special features.  Implement a secure shopping cart system that allows users to add Lego sets to their cart while they continue browsing. The cart should display a summary of selected items.',
    image: 'le.png',
    images: ['l1.png','l3.png','l4.png','l5.png','l6.png','l7.png'],
    githubLink: 'https://github.com/your-github-link',
    liveSiteLink: 'https://lego-eporium.web.app/', 
  },
  {
    title: 'The Fusion of Thai Chefs Cuisine',
    description: 'The Thai Chefs Cuisine is a captivating culinary journey that celebrates the vibrant flavors of Thai cuisine. With a passion for authenticity,our skilled chefs brings the essence of Thailand to your plate. We believe in the fresh ingredients,traditional cooking techniques to craft each dish. ',
    description1:' Different Recipe of Thai chef’s which can be add to favorite by users. Routing System for view details with authentication route.  Implement after authentication process of rendering multiple data.',
    image: 'cf.png',
    images: ['c1.png','c2.png','c3.png','c4.png','c5.png','c6.png'],
    githubLink: 'https://github.com/Nandini-Das/The_Fusion_of_Thai_Chef-s_Cuisine',
    liveSiteLink: 'https://the-fusion-of-chef-s-recipe.web.app/', 
   
  },

];

const ModalContent = ({ project, onClose }) => {
    const handleCloseClick = (e) => {
      e.stopPropagation();
      onClose();
    };
  return (

    <Bounce triggerOnce>
    <div style={{ backgroundColor: 'white', padding: '2rem', width: '500px', height: '520px'}}>
      <Typography variant="h6" component="h2" style={{ marginBottom: '1rem' }}>
        {project.title}
      </Typography>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        {project.images.map((image, index) => (
          <img key={index} src={image} alt={`Project Image ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ))}
      </div>
      <Button
        variant="outlined"
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: '1rem' }}
      >
        GitHub
      </Button>
     
      <Button
        variant="outlined"
        href={project.liveSiteLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Live Site
      </Button>
      <Typography variant="body1" component="p">
        {project.description1}
      </Typography>

   

      <Button onClick={handleCloseClick}style={{ marginBottom: '1rem' }}
     sx={{
        backgroundColor: '#800080',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        padding: '0.5rem 1rem',
        position:'float-right',
        fontWeight: 'bold',
        '&:hover': {
          backgroundColor: '#6a006a',
        },
      }}>
        Close
      </Button>
    </div>
    </Bounce>

    
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
  
        <Element id='projects'>
            <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" component="h1" align="center" style={{ fontWeight: 'bold', marginBottom: '1rem' }}>
        Projects
      </Typography>
      <Fade cascade damping={0.2} triggerOnce>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} onClick={() => handleProjectClick(index)} style={{ cursor: 'pointer' }}>
                 <Fade cascade damping={0.6} triggerOnce>
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
          </Fade>
              
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
  
        </Element>
  );
};

export default Projects;
