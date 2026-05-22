// import React from "react";
// import '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
// import '../assets/styles/Timeline.scss'

// function Timeline() {
//   return (
//     <div id="history">
//       <div className="items-container">
//         <h1>Career History</h1>
//         <VerticalTimeline>
//           <VerticalTimelineElement
//             className="vertical-timeline-element--work"
//             contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
//             contentArrowStyle={{ borderRight: '7px solid  white' }}
//             date="2022 - present"
//             iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
//             icon={<FontAwesomeIcon icon={faBriefcase} />}
//           >
//             <h3 className="vertical-timeline-element-title">Technology Consultant</h3>
//             <h4 className="vertical-timeline-element-subtitle">Dallas, TX</h4>
//             <p>
//               Full-stack Web Development, GenAI/LLM, Project Management, Business Development
//             </p>
//           </VerticalTimelineElement>
//           <VerticalTimelineElement
//             className="vertical-timeline-element--work"
//             date="2020 - 2022"
//             iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
//             icon={<FontAwesomeIcon icon={faBriefcase} />}
//           >
//             <h3 className="vertical-timeline-element-title">Full Stack Engineer</h3>
//             <h4 className="vertical-timeline-element-subtitle">Laie, HI</h4>
//             <p>
//               Frontend Development, Backend Development, User Experience, Team Leading
//             </p>
//           </VerticalTimelineElement>
//           <VerticalTimelineElement
//             className="vertical-timeline-element--work"
//             date="2021 - 2021"
//             iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
//             icon={<FontAwesomeIcon icon={faBriefcase} />}
//           >
//             <h3 className="vertical-timeline-element-title">Staff Engineer Intern</h3>
//             <h4 className="vertical-timeline-element-subtitle">Laie, HI</h4>
//             <p>
//               Full-stack Development, API Development, User Experience
//             </p>
//           </VerticalTimelineElement>
//           <VerticalTimelineElement
//             className="vertical-timeline-element--work"
//             date="2020 - 2020"
//             iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
//             icon={<FontAwesomeIcon icon={faBriefcase} />}
//           >
//             <h3 className="vertical-timeline-element-title">Data Analyst Intern</h3>
//             <h4 className="vertical-timeline-element-subtitle">Tokyo, Japan</h4>
//             <p>
//               Automation, Data Governance, Statistical Analysis
//             </p>
//           </VerticalTimelineElement>
//         </VerticalTimeline>
//       </div>
//     </div>
//   );
// }

// export default Timeline;

import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career Journey</h1>

        <VerticalTimeline>
          {/* EPAM */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Jun 2024 - Present"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer
            </h3>

            <h4 className="vertical-timeline-element-subtitle">EPAM Systems</h4>

            <p>
              Building scalable enterprise applications using React, TypeScript,
              Java Spring Boot, and AWS. Developed reusable UI systems,
              optimized REST APIs, improved test coverage with Jest, and
              contributed to CI/CD workflows using Jenkins and Git.
            </p>
          </VerticalTimelineElement>

          {/* Research Intern */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2023 - Feb 2024"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Research Intern</h3>

            <h4 className="vertical-timeline-element-subtitle">
              Vardhaman College of Engineering
            </h4>

            <p>
              Researched AI-driven image security systems using Neural Networks,
              TensorFlow, and Python. Designed encryption-decryption workflows
              and published IEEE conference research focused on secure data
              hiding and intelligent retrieval systems.
            </p>
          </VerticalTimelineElement>

          {/* LetsGrowMore */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2023 - Feb 2023"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Web Developer Intern
            </h3>

            <h4 className="vertical-timeline-element-subtitle">LetsGrowMore</h4>

            <p>
              Developed responsive web applications and improved frontend user
              experiences using modern JavaScript and React-based development
              practices while collaborating in a remote environment.
            </p>
          </VerticalTimelineElement>

          {/* IEEE */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2021 - Mar 2022"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Treasurer</h3>

            <h4 className="vertical-timeline-element-subtitle">
              IEEE Vardhaman Student Branch
            </h4>

            <p>
              Managed finances, coordinated technical events, and collaborated
              with student teams to organize IEEE activities focused on
              innovation, leadership, and engineering excellence.
            </p>
          </VerticalTimelineElement>

          {/* Education */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2020 - 2024"
            iconStyle={{ background: "#2d2e32", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Technology
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              Vardhaman College of Engineering
            </h4>

            <p>
              Specialized in Computer Science with strong focus on Full Stack
              Development, Artificial Intelligence, Cloud Technologies, and
              Software Engineering fundamentals.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
