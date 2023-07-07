import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
const styles = {
  footer: {
    backgroundColor: '#f2f2f2',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  socialMedia: {
    display: 'flex',
    alignItems: 'center',
  },
  socialMediaIcon: {
    marginRight: '10px',
    color: '#000',
    cursor: 'pointer',
  },
  querySection: {
    display: 'flex',
    alignItems: 'center',
  },
  queryInput: {
    marginRight: '10px',
  },
  sendMessageButton: {
    padding: '5px 10px',
  },
  copyright: {
    textAlign: 'center',
    
  },
};

const Footer = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // You can customize the code below to send the message to your email inbox
    // using your preferred method (e.g., server-side processing, email service, etc.)
    // For demonstration purposes, we'll simply log the message to the console.
    console.log('Message:', message);
  };

  return (
    <>
    <footer style={styles.footer}>
      <div style={styles.socialMedia}>
        <LinkedInIcon
          style={styles.socialMediaIcon}
          onClick={() => console.log('LinkedIn clicked')}
        />
        <FacebookIcon
          style={styles.socialMediaIcon}
          onClick={() => console.log('Facebook clicked')}
        />
        <WhatsAppIcon
          style={styles.socialMediaIcon}
          onClick={() => console.log('WhatsApp clicked')}
        />
        <GitHubIcon
          style={styles.socialMediaIcon}
          onClick={() => console.log('GitHub clicked')}
        />
      </div>
      <div style={styles.querySection}>
        <TextField
          style={styles.queryInput}
          type="text"
          placeholder="Ask any query"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          style={styles.sendMessageButton}
          variant="contained"
          onClick={handleSendMessage}
         
        >
          <SendIcon />
        </Button>
        

      </div>
     
    </footer>
    <div style={styles.copyright}>
        <small>&copy; 2023 Send Message. All rights reserved.</small>
      </div>
      </>
  );
};

export default Footer;
