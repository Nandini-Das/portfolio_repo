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
   
     
    </footer>
    <div style={styles.copyright}>
        <small>&copy; 2023 Nandini Das Rima. All rights reserved.</small>
      </div>
      </>
  );
};

export default Footer;
