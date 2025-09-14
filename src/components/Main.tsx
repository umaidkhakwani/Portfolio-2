import React from "react";
import { Tooltip, Avatar, Box, Typography, Chip } from '@mui/material';
import { tooltipClasses } from '@mui/material/Tooltip';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DownloadIcon from '@mui/icons-material/Download';
import '../assets/styles/Main.scss';
import { styled } from '@mui/system';
import myPic from '../assets/my_pic2.jpg';

const CustomTooltip = styled(Tooltip)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#000',
    color: '#fff',
    fontSize: '14px',
    borderRadius: '6px',
    padding: '8px 12px',
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 200,
  height: 200,
  border: '4px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 12px 40px rgba(80, 0, 202, 0.3)',
  },
}));

function Main() {
  const skills = ['Full Stack Development', 'React.js', 'Node.js', 'REST APIs', 'MySQL'];
  
  return (
    <div className="hero-container">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="about-section">
        <div className="profile-section">
          <div className="image-wrapper">
            <StyledAvatar 
              src={myPic} 
              alt="Umaid Khan Khakwani"
              className="profile-avatar"
            />
            <div className="status-indicator">
              <span className="status-dot"></span>
              Available for work
            </div>
          </div>
          
          <div className="social_icons">
            <CustomTooltip title="umaidkhakwani02@gmail.com" arrow>
              <a href="mailto:umaidkhakwani02@gmail.com" target="_blank" rel="noreferrer" className="social-link">
                <EmailIcon />
              </a>
            </CustomTooltip>
            <CustomTooltip title="https://github.com/umaidkhakwani" arrow>
              <a href="https://github.com/umaidkhakwani" target="_blank" rel="noreferrer" className="social-link">
                <GitHubIcon />
              </a>
            </CustomTooltip>
            <CustomTooltip title="https://www.linkedin.com/in/umaidkhakwani/" arrow>
              <a href="https://www.linkedin.com/in/umaidkhakwani/" target="_blank" rel="noreferrer" className="social-link">
                <LinkedInIcon />
              </a>
            </CustomTooltip>
            <CustomTooltip title="+49 16096583984" arrow>
              <a href="tel:+4916096583984" target="_blank" rel="noreferrer" className="social-link">
                <LocalPhoneIcon />
              </a>
            </CustomTooltip>
          </div>
        </div>

        <div className="content">
          <div className="intro-badge">
            <LocationOnIcon fontSize="small" />
            <span>Based in Germany</span>
          </div>
          
          <Typography variant="h1" component="h1" className="main-title">
            Umaid Khan Khakwani
          </Typography>
          
          <Typography variant="h3" component="h2" className="subtitle">
            Software Engineer | Full Stack & Automation Developer
          </Typography>
          
          <Typography variant="body1" className="description">
            I'm a passionate Full-Stack Software Engineer with 2+ years of hands-on experience 
            developing fast, scalable web applications using technologies like React.js, Node.js, 
            REST APIs, and MySQL. Currently pursuing a Master's in Computer Science, I bring a 
            strong focus on performance, usability, and writing clean, maintainable code.
          </Typography>
          
          <Box className="skills-preview">
            {skills.map((skill, index) => (
              <Chip 
                key={index} 
                label={skill} 
                className="skill-chip"
                variant="outlined"
              />
            ))}
          </Box>
          
          {/* <div className="cta-buttons">
            <button className="cta-primary">
              <DownloadIcon />
              Download CV
            </button>
            <button className="cta-secondary">
              View Projects
            </button>
          </div> */}
          
          <div className="mobile_social_icons">
            <CustomTooltip title="umaidkhakwani02@gmail.com" arrow>
              <a href="mailto:umaidkhakwani02@gmail.com" target="_blank" rel="noreferrer" className="social-link">
                <EmailIcon />
              </a>
            </CustomTooltip>
            <CustomTooltip title="https://github.com/umaidkhakwani" arrow>
              <a href="https://github.com/umaidkhakwani" target="_blank" rel="noreferrer" className="social-link">
                <GitHubIcon />
              </a>
            </CustomTooltip>
            <CustomTooltip title="https://www.linkedin.com/in/umaidkhakwani/" arrow>
              <a href="https://www.linkedin.com/in/umaidkhakwani/" target="_blank" rel="noreferrer" className="social-link">
                <LinkedInIcon />
              </a>
            </CustomTooltip>
            <CustomTooltip title="+49 16096583984" arrow>
              <a href="tel:+4916096583984" target="_blank" rel="noreferrer" className="social-link">
                <LocalPhoneIcon />
              </a>
            </CustomTooltip>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
