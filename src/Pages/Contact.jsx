import React, { useState } from 'react';
import { Typography, List, ListItem, ListItemIcon, ListItemText, Container ,TextField, Button, Grid} from '@mui/material';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SendIcon from '@mui/icons-material/Send';
import { Element } from 'react-scroll';
const Contact= () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Set your emailjs service ID, template ID, and user ID
    const serviceId = 'service_suz9ijg';
    const templateId = 'template_9v2eosr';
    const userId = '3S7wd6f9yO6H6syer';

    // Send email using emailjs
    emailjs.send(serviceId, templateId, { email, message }, userId)
      .then(() => {
        setEmail('');
        setMessage('');
        toast.success('Message sent successfully!');
      })
      .catch((error) => {
        console.error(error);
        toast.error('An error occurred while sending the message.');
      });
  };
  return (
  
    <Element id="contact">
       
<Container >
    <br />
<Typography variant="h4" component="h1" align="center" style={{ marginBottom: '2rem' }}>
     Contact Me
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={13} sm={6}>
      <List>
       
       
        <ListItem>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary="Email" secondary="nandini.rima181@gmail.com" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LinkedInIcon />
          </ListItemIcon>
          <ListItemText primary="LinkedIn" secondary="https://www.linkedin.com/in/nandini-das-8031b9256/" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FacebookIcon />
          </ListItemIcon>
          <ListItemText primary="Facebook" secondary="https://www.facebook.com/profile.php?id=100017212897673" />
        </ListItem>
       
        <ListItem>
          <ListItemIcon>
            <PhoneIcon />
          </ListItemIcon>
          
          <ListItemText primary="Phone" secondary="+880 01878347181" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <WhatsAppIcon />
          </ListItemIcon>
          <ListItemText primary="WhatsApp" secondary="+880 01878347181" />
        </ListItem>
        
        </List>
 
      </Grid>
      
      <Grid item xs={12} sm={6}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label="Your Name" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Your Email" type="email" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Your Message" multiline rows={4} variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={12}>
            <Button
  type="submit"
  variant="contained"
  color="primary"
  onClick={handleSubmit}
>
  <SendIcon style={{ marginRight: '0.5rem' }} />
  Send Message
</Button>
            </Grid>
          </Grid>
          <ToastContainer />
        </form>
      </Grid>
    </Grid>

    </Container>
    </Element>
);


};

export default Contact;
