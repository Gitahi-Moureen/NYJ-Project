import './index.css';
import React from 'react';
import './style.css';

const Portfolio5 = () => {
    return (
        <div className='portfolio'>
            <div className='skills'>
                <img src="/images/Terry.jpeg" alt="Profile" className='label' />
                <p>+254 748 878 168 <br /> wanguiiteresiiaa@gmail.com <br /> LinkedIn <br /> GitHub</p>
                <h2 className='heading2'>Education</h2>
                <p>AkiraChix <br /> CodeHive Diploma in Information Technology <br /> February 2024 - Present</p>
                <h2 className='heading2'>Courses</h2>
                <h2 className='heading2'>Frontend Web Development</h2>
                <p>DOM Manipulation in JavaScript <br /> React.js and Next.js Web Applications</p>
                <h2 className='heading2'>Frontend Mobile Development</h2>
                <p>Object-Oriented Programming Concepts in Kotlin <br /> Working with collections in Android <br /> Handling HTTP/REST requests and responses</p>
                <h2 className='heading2'>Backend Development</h2>
                <p>Object-oriented programming concepts <br /> Creating Restful APIs <br /> Django models, authentication, and deployment</p>
                <h2 className='heading2'>Product Management</h2>
                <p>Testing and validating Prototype and MVPs <br /> Product Prioritization Matrix and Frameworks <br /> Product strategy and road mapping</p>
                <h2 className='heading2'>Data and Software Architecture</h2>
                <p>Problem-solving techniques <br /> Algorithmic design using flowcharts <br /> Database design and modeling <br /> Data Science and Machine Learning</p>
                <h2 className='heading2'>UI/UX Design</h2>
                <p>Graphic design using Adobe Illustrator and Photoshop <br /> Mobile and Web UI design using Figma <br /> Wireframing and Prototyping</p>
                <h2 className='heading2'>UX Research</h2>
                <p>Research methodologies <br /> Analysis and synthesis of research findings <br /> Representing user interactions with conceptual and mental models <br /> Usability Testing</p>
            </div>
            <div className='projects'>
                <h2 className='heading2'>Teresia Wangui</h2>
                <h2 className='heading2'>Software Developer</h2>
                <h3 className='heading2'>Personal Statement</h3>
                <p>Forensic science has long been a critical element of the justice system, providing crucial evidence that can make or break a case. As a software engineer, Teresia is deeply fascinated by the role of advanced technologies in forensic science, particularly how they can refine investigative processes and enhance the accuracy of evidence analysis. Her goal is to contribute to more efficient and accurate crime-solving techniques by leveraging machine learning, data analytics, and digital forensics, ultimately strengthening the pursuit of justice.</p>
                <h3 className='heading2'>Skills</h3>
                <ul>
                    <li>Skilled in implementing server-side rendering and static site generation in Next.js</li>
                    <li>Experienced in designing reusable and maintainable React components.</li>
                    <li>Experienced in consuming REST APIs in JavaScript.</li>
                    <li>Skilled in leveraging Kotlin's modern language features for efficient programming</li>
                    <li>Adept at implementing and managing multiple view types in RecyclerViews.</li>
                    <li>Knowledge in designing and consuming RESTful APIs using Django.</li>
                    <li>Skilled in designing efficient database schemas and executing SQL queries.</li>
                    <li>Proficient in conducting user research and analyzing findings.</li>
                    <li>Adept at creating cohesive brand identities and designing intuitive user interfaces.</li>
                    <li>Skilled in creating wireframes and prototypes using Adobe Illustrator and Figma.</li>
                    <li>Ability to develop comprehensive product strategies and roadmaps.</li>
                    <li>Proficient in using project management tools like Jira.</li>
                    <li>Knowledge in creating detailed user personas and journey maps.</li>
                    <li>Proficient in conducting market research to monitor trends and competitor analysis.</li>
                    <li>Experienced in using Git for code version control and team collaboration.</li>
                </ul>
                <h3 className='heading2'>Projects</h3>
                <h4 className='heading2'>Ubora CBC</h4>
                <p>A platform built using React Js, Django, and Kotlin to improve CBC student engagement during online learning.<br />
                    <a href="https://drive.google.com/drive/folders/1TKH8D4w3OuJGoNpj3kUxGpNYTmh8fwd3?usp=drive_link" target="_blank" rel="noopener noreferrer">View Project</a>
                </p>
                <h4 className='heading2'>Job Flex</h4>
                <p>Built using News API and JavaScript, International local news displays news and allows users to search for news.<br />
                    <a href="https://github.com/esther-njoroge/INTERNATIONAL-LOCAL-NEWS" target="_blank" rel="noopener noreferrer">View Project</a>
                </p>
                <h4 className='heading2'>Mentorship Project</h4>
                <p>Built using JavaScript, HTML, and CSS, the mentorship system is a platform that allows students to share their goals, tasks, and achievements with their mentors.<br />
                    <a href="https://github.com/esther-njoroge/Mentorship-system" target="_blank" rel="noopener noreferrer">View Project</a>
                </p>
                <h3 className='heading2'>References</h3>
                <h4 className='heading2'>Linda Kamau</h4>
                <p>Founder & Executive Director, AkiraChix<br />
                    <a href="mailto:lkamau@akirachix.com">lkamau@akirachix.com</a>
                </p>
            </div>
        </div>
    );
}

export default Portfolio5;