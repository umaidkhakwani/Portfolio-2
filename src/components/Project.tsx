import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import mock08 from '../assets/images/projects/Shipping-Logistic.png';

import mits from "../assets/images/projects/mits.png" 
import mits_2 from "../assets/images/projects/mits_2.png" 
import mits_3 from "../assets/images/projects/mits_3.png" 
import mits_4 from "../assets/images/projects/mits_4.png" 

import antly from "../assets/images/projects/Antly.png"
import antly_2 from "../assets/images/projects/antly_2.png"

import aib1 from  "../assets/images/projects/aib_1.1.png"
import aib1_2 from  "../assets/images/projects/aib_1.2.png"
import aib1_3 from  "../assets/images/projects/aib_1.3.png"
import aib1_4 from  "../assets/images/projects/aib_1.4.png"

import aib2 from  "../assets/images/projects/aib_2.1.png"
import aib2_2 from  "../assets/images/projects/aib_2.2.png"
import aib2_3 from  "../assets/images/projects/aib_2.3.png"
import aib2_4 from  "../assets/images/projects/aib_2.4.png"

import veteran from "../assets/images/projects/veteran.png"
import '../assets/styles/Project.scss';
import { Chip, Card, CardContent, CardActions, Button, Box, Typography } from "@mui/material";
import { GitHub, Launch, ArrowForward } from "@mui/icons-material";

const projectsData = [
  {
    title: "Shipping & Logistics",
    images: [mock08],
    github_link: "https://github.com/umaidkhakwani/SmartShip",
    live_link: "https://amanullahgroup.ae/home",
    description: "A comprehensive logistics management platform offering quote generation, multi-language support, email notifications, and secure database handling.",
    tech: ["React", "PHP", "Material-UI", "MySQL"],
    category: "Web Application"
  },
  {
    title: "MITS (Inventory Management System)",
    images: [mits, mits_2, mits_3, mits_4],
    description: "Built smart inventory control logic for multi-location businesses with real-time tracking, analytics, and comprehensive reporting.",
    tech: ["React", "Material-UI", "Node.js", "Express.js", "MySQL", "Chart.js", "REST API"],
    github_link: "",
    category: "Enterprise Software"
  },
  {
    title: "Antly (Task Management System)",
    images: [antly, antly_2],
    description: "A collaborative task management system with real-time updates, team collaboration features, and project tracking capabilities.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github_link: "",
    category: "Productivity Tool"
  },
  {
    title: "AiBitrage (Trading Platform)",
    images: [aib1, aib1_2, aib1_3, aib1_4],
    description: "A cutting-edge web3-based trading platform that leverages AI to analyze market trends and make intelligent trading decisions.",
    tech: ["React", "Material-UI", "Web3.js", "API Integration"],
    github_link: "https://github.com/umaidkhakwani/AI-Bitrage",
    category: "FinTech"
  },
  {
    title: "AiBitrage V2 (Enhanced Trading)",
    images: [aib2, aib2_2, aib2_3, aib2_4],
    description: "Advanced version of the AI-powered trading platform with enhanced features, improved UI/UX, and additional trading algorithms.",
    tech: ["React", "Material-UI", "Web3.js", "API Integration"],
    github_link: "https://github.com/umaidkhakwani/AIbitrage-3.0",
    category: "FinTech"
  },
  {
    title: "Veteran Meet",
    images: [veteran],
    description: "A dedicated platform for veterans to connect, share experiences, and build meaningful relationships within the veteran community.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github_link: "https://github.com/umaidkhakwani/Veteran-Meet-Mern-Stack",
    category: "Social Platform"
  }
];

function Project() {
  return (
    <div className="projects-container" id="projects">
      <div className="projects-header">
        <Typography variant="h2" component="h1" className="projects-title">
          Featured Projects
        </Typography>
        <Typography variant="h6" className="projects-subtitle">
          Showcasing innovative solutions and technical expertise
        </Typography>
      </div>
      
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <Card key={index} className="project-card" elevation={3}>
            <div className="project-image-container">
              {project.images.length > 1 ? (
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={0}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  className="project-swiper"
                >
                  {project.images.map((image, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                      <img 
                        src={image} 
                        alt={`${project.title} screenshot ${imgIndex + 1}`}
                        className="project-image"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <img 
                  src={project.images[0]} 
                  alt={`${project.title} screenshot`}
                  className="project-image single-image"
                />
              )}
              <div className="project-category">{project.category}</div>
            </div>
            
            <CardContent className="project-content">
              <Typography variant="h5" component="h2" className="project-title">
                {project.title}
              </Typography>
              
              <Typography variant="body2" className="project-description">
                {project.description}
              </Typography>
              
              <Box className="tech-stack">
                <Typography variant="subtitle2" className="tech-label">
                  Technologies:
                </Typography>
                <div className="flex-chips">
                  {project.tech.map((tech, i) => (
                    <Chip 
                      key={i} 
                      label={tech} 
                      className="tech-chip"
                      size="small"
                    />
                  ))}
                </div>
              </Box>
            </CardContent>
            
            <CardActions className="project-actions">
              {project.github_link && (
                <Button
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<GitHub />}
                  className="action-button github-button"
                  size="small"
                >
                  Code
                </Button>
              )}
              {project.live_link && (
                <Button
                  href={project.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<Launch />}
                  className="action-button live-button"
                  size="small"
                >
                  Live Demo
                </Button>
              )}
              <Box sx={{ flexGrow: 1 }} />
              <ArrowForward className="arrow-icon" />
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Project; 