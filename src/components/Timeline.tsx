import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

const plcgroup: string[] = [
  "Built scalable APIs with ReactJS, Node.js, and GraphQL for AXIN, an IoT platform, improving data interaction speed by 45% and enabling real-time dashboard updates.",
  "Optimized data-fetching speed by 50% through efficient GraphQL query design and implementation of best practices.",
  "Improved database performance by optimizing PostgreSQL queries, reducing latency by 30% and enhancing real-time updates.",
  "Incorporated Cube.js for advanced data modeling and dynamic dashboard development, increasing data visualization speed by 40%.",
  "Boosted user satisfaction by 30% by leading UX enhancements and aligning frontend/backend integration through cross-functional collaboration.",
  "Enhanced backend architecture and optimized real-time data delivery, reducing API response time by 35%.",
  "Leveraged KPI tracking to monitor and visualize platform performance metrics efficiently."
];

const joblogic :string[] = [
"Developed AI-driven automation services using Python, enhancing operational speed and scalability.",
"Integrated Azure DevOps and JIRA APIs to automate ticketing and reporting, reducing manual work by 60%.",
"Built prompt-based assistants using OpenAI APIs, cutting internal support response times by 40%.",
"Maintained CI/CD pipelines (Azure DevOps), accelerating deployments by 30%."
];

const meptics :string[] = [
  "Translated Figma wireframes into pixel-perfect React.js UI for 20+ pages, improving UX satisfaction for 100+ active users.",
  "Developed 15+ RESTful APIs using Node.js, reducing page load time and improving API latency by 20\% across key modules",
  "Collaborated with senior developers and DevOps engineers to integrate applications with Docker-based environments, ensuring consistent development and testing.",
];

const dinologix : string[] = [
  "Reduced page load time by 30% by implementing lazy loading and optimized rendering in responsive UIs built with React.js.",
  "Executed performance improvements such as lazy loading, code splitting, and optimized rendering, reducing load times by 30% and improving user experience.",
  "Increased cross-device engagement by 35% with mobile-first, responsive UIs using MUI, Bootstrap, and Tailwind CSS."
];

// const plcgroup: string[] = [
//   "Built scalable APIs with ReactJS, Node.js, and GraphQL for AXIN, an IoT platform, improving data interaction speed by 45% and enabling real-time dashboard updates.",
//   "Optimized data-fetching speed by 50% through efficient GraphQL query design and implementation of best practices.",
//   "Improved database performance by optimizing PostgreSQL queries, reducing latency by 30% and enhancing real-time updates.",
//   "Incorporated Cube.js for advanced data modeling and dynamic dashboard development, increasing data visualization speed by 40%.",
//   "Boosted user satisfaction by 30% by leading UX enhancements and aligning frontend/backend integration through cross-functional collaboration.",
//   "Enhanced backend architecture and optimized real-time data delivery, reducing API response time by 35%.",
//   "Leveraged KPI tracking to monitor and visualize platform performance metrics efficiently."
// ];

// const multisyntech: string[] = [
//   "Developed and deployed service-based projects, optimizing application performance and efficiency, improving load handling by 25% during peak traffic.",
//   "Delivered 3 full-stack web applications using React.js and Node.js, reducing maintenance overhead by 25% and scaling to handle 50k+ concurrent users.",
//   "Enhanced backend performance by 40% through optimized API integration and effective state management.",
//   "Implemented responsive design principles, improving user experience across multiple devices and increasing mobile user engagement by 30%.",
//   "Developed and deployed key features such as payment integration with Stripe/PayPal, improving transaction success rates by 15%.",
//   "Collaborated with teams to streamline deployment and incorporated comprehensive testing to ensure production-ready applications, reducing release cycle times by 20%."
// ];



function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jun 2024 – Mar 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Automation Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Joblogic</h4>
            <span>
              <a
                href="https://joblogic.com"
                // className="vertical-timeline-element-subtitle"
                style={{color:"darkblue", fontSize: "14px" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>http://www.joblogic.com</i>
              </a>
            </span>
            <p style={{ fontSize: "14px" }}>
            Joblogic is a UK-based software company, founded in 1998, that provides cloud-based Field Service Management (FSM) and Computer-Aided Facility Management (CAFM) tools            </p>
            {joblogic.map((item, index) => (
        <li key={index} style={{ marginBottom: '1rem', fontSize: '14px' }}>
          {item}
        </li>
      ))}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2023 – Jun 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">MEPTICS</h4>
            
            <p style={{ fontSize: "14px" }}>
              MEPTICS Tech is a software development company specializing in custom software, SaaS, and mobile app solutions.
            </p>
            {meptics.map((item, index) => (
        <li key={index} style={{ marginBottom: '1rem', fontSize: '14px' }}>
          {item}
        </li>
      ))}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2022 – Aug 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Web Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Dinologix</h4>
            
            <p style={{ fontSize: "14px" }}>
            Dinologix is a tech agency specializing in custom web and mobile app development, ERP solutions, and digital marketing services like SEO and PPC.
            </p>
            {dinologix.map((item, index) => (
        <li key={index} style={{ marginBottom: '1rem', fontSize: '14px' }}>
          {item}
        </li>
      ))}
          </VerticalTimelineElement>
          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Tokyo, Japan</h4>
            <p>
              Automation, Data Governance, Statistical Analysis
            </p>
          </VerticalTimelineElement> */}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;