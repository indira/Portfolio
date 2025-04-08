import React from "react"
import Page from "../../components/Page/Page"

function Portfolio() {
  return (
    <Page title="Portfolio">
      <div className="wrapper__border">
        <div className="container">
          <div className="container__left container__left--portfolio wrapper ">
            <h2 className="headline--exlarge">Indira Pandey</h2>
            <h3 className="headline--large">
              Full Stack Developer{"  |  "}
              <a href="https://www.linkedin.com/in/indira-pandey/" target="_blank" rel="noreferrer">
                <strong> LinkedIn</strong>
              </a>
              {" | "}
              <a href="https://github.com/Indira" target="_blank" rel="noreferrer">
                <strong>Github</strong>
              </a>
            </h3>
            <hr></hr>
            <h3 className="headline--large"> P R O F I L E</h3>
            <p>Detail-oriented software engineer with expertise in interactive web applications and backend systems. Proficient in Core Java, Spring Boot, Spring MVC, Hibernate, MySQL, and RESTful API integration. Skilled in front-end technologies including React, JavaScript, HTML, CSS, SCSS, Bootstrap, and Webpack, ensuring seamless user experiences. Experienced in fostering collaborative development environments via GitHub.</p>
            <hr></hr>
            <h3 className="headline--large"> S K I L L S</h3>
            <span className="headline--medium">
              <strong>Proficient in:</strong>
            </span>
            <p> Core Java, Spring Boot,Spring MVC, React, JavaScript, RESTful APIs, Node.js, MySQL, Hibernate, WordPress CMS, Git, and Agile Development.</p>
            <hr></hr>
            <h3 className="headline--large">E D U C A T I O N</h3>
            <h3 className="headline--medium"> BrainStation | Diploma, Web Development </h3>
            <h5 className="headline--muted">JAN 2024 - APR 2024, VANCOUVER, BC</h5>
            <h3 className="headline--medium"> Master’s Degree in Information Technology | Kobe University </h3>
            <h5 className="headline--muted">APR 2007 – APR 2009 (Rotary Yoneyama Memorial Foundation Fellow)</h5>
            <h3 className="headline--medium"> Bachelor of Computer Engineering | Pokhara University</h3>
            <h5 className="headline--muted">SEP 2000 – SEP 2004</h5>
            <h3 className="headline--medium">Git a Web Developer Job | Udemy</h3>
            <h5 className="headline--muted"> MAR 2022 – AUG 2022</h5>
            <a href="https://indira.github.io/travel-site" target="_blank" rel="noreferrer">
              https://indira.github.io/travel-site
            </a>
            <hr></hr>

            <p></p>
            <h3 className="headline--large">P R O J E C T</h3>
            <h3 className="headline--medium"> Software Developer | Login System/Portfolio</h3>
            <h5 className="headline--muted">MAR 2024, Capstone Project | React, HTML, SCSS, Node JS, Express, MySQL</h5>

            <ul>
              <li>
                {" "}
                <p>Designed and implemented a dynamic login system enabling user registration and interaction through post creation </p>
              </li>
              <li>
                {" "}
                <p>Used Express.js for streamlined server-side development, optimizing routing and middleware for enhanced functionality.</p>
              </li>
              <li>
                {" "}
                <p>Used MySQL for secure storage and management of user information</p>
              </li>
              <li>
                <p>Leveraged Node.js to create scalable and high-performance backend solutions, ensuring seamless user experiences </p>
              </li>
            </ul>
          </div>
          <div className="container__right">
            <h3 className="headline--large">E X P E R I E N C E </h3>
            <hr></hr>
            <h3 className="headline--medium">Software Developer(Consultant) | Earthquake Engineering Research Facility, UBC.</h3>
            <h5 className="headline--muted">SEP 2022 – JUNE 2024, VANCOUVER, BC</h5>
            <h3>Description:</h3>
            <p>Designed and developed a desktop application for the intuitive analysis and comparison of seismic data from bridge earthquake records. The application incorporates graphical data visualization using JFreeChart to enable researchers to effectively examine and interpret seismic properties, enhancing research productivity and data interpretation accuracy.</p>
            <ul>
              <li>
                <p>Involved in software development life cycle starting from requirements gathering and performing Object Oriented Analysis.</p>
              </li>
              <li>
                <p>Developed the application using Java Swing for GUI development and NetBeans IDE for coding and debugging.</p>
              </li>
              <li>
                <p>Integrated JFreeChart to create dynamic and interactive charts for visualizing seismic data trends and comparisons.</p>
              </li>
              <li>
                <p>Implemented data parsing, sorting, and filtering mechanisms for efficient dataset comparison and manipulation.</p>
              </li>
              <li>
                <p>Designed a clean, responsive UI using Swing components like JTable, JPanel, and JTabbedPane to ensure usability.</p>
              </li>
              <li>
                <p>Delivered a robust tool for UBC researchers, improving their ability to analyze and interpret complex seismic datasets effectively.</p>
              </li>
              <li>
                <p>Worked as a consultant to organize the 13th CCEE-PCEE and IOMAC 2022 Conference Proceedings into a PDF bundle file.</p>
              </li>
            </ul>
            <h3 className="headline--medium"> Full Stack Software Developer | CAEE </h3>
            <h5 className="headline--muted">AUG 2017 – SEP 2022, VANCOUVER, BC</h5>
            <ul>
              <li>
                {" "}
                <p>Designed and maintained responsive websites using JavaScript, HTML5, SCSS/CSS, PHP, and MySQL, ensuring cross-browser compatibility, secure backend functionality, and mobile responsiveness.</p>
              </li>
              <li>
                <p>Developed a Membership Website with React, integrating dynamic data management via REST APIs and implementing role-based authentication for 500+ members to ensure secure and consistent user experiences.</p>
              </li>
              <li>
                <p>Created a Voting Application featuring a React front end and Spring Boot backend, leveraging Hibernate and MySQL for efficient data interaction and real-time vote tracking.</p>
              </li>
              <li>
                <p>Utilized Spring Data JPA for efficient database management and optimized queries, improving system performance and scalability.</p>
              </li>
              <li>
                <p>Followed Agile practices, employing Git for collaborative development and version control, ensuring organized and iterative delivery of features.</p>
              </li>
            </ul>
            <h3 className="headline--medium"> Software Developer| PBRV Consulting </h3>
            <h5 className="headline--muted">SEP 2016 – JUL 2017, VANCOUVER, BC</h5>
            <ul>
              <li>
                {" "}
                <p>Involved in various phases of the Software Development Life Cycle (SDLC) of the application like requirement gathering, design analysis and code development.</p>
              </li>
              <li>
                <p>Designed and implemented a robust user account login system using JavaScript, HTML5, SCSS/CSS, PHP and MySQL, tailored to meet the unique needs of clients seeking personalized experiences. </p>
              </li>
              <li>
                <p>Developed the backend of a tool that computes site-specific risk to hazard, the result of which is accessible to individual users through system log-in. </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Portfolio
