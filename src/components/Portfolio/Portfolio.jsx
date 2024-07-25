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
            <p>Detail-oriented software engineer with expertise in interactive web applications and backend systems. Proficient in leveraging WordPress for dynamic content management, coupled with extensive skills in PHP, MySQL, and RESTful API integration. Well-versed in front-end technologies including React, JavaScript, HTML, CSS, SCSS, Bootstrap, and Webpack, ensuring seamless user experiences. Skilled in fostering collaborative development environments via GitHub</p>
            <hr></hr>
            <h3 className="headline--large"> S K I L L S</h3>
            <span className="headline--medium">
              <strong>Proficient in:</strong>
            </span>
            <p> PHP, React, JavaScript, HTML, CSS/SCSS, MySQL, Node.js, REST APIs, Express.js, WordPress CMS, Git, and Agile Development.</p>
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
            <h3 className="headline--medium">
              {" "}
              Software Developer |{" "}
              <a href="https://innovationhub1.netlify.app/" target="_blank" rel="noreferrer">
                Login System/Portfolio
              </a>
            </h3>
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
            <h3 className="headline--medium"> Indira Soft | (Freelance) </h3>
            <h5 className="headline--muted">SEP 2022 – JUNE 2024, VANCOUVER, BC</h5>
            <ul>
              <li>
                <p>
                  Worked as a consultant to organize the{" "}
                  <a href="https://www.caee.ca/conferenceproceedings/" target="_blank" rel="noreferrer">
                    13th CCEE-PCEE Conference Proceedings
                  </a>{" "}
                  into a PDF bundle file.
                </p>
              </li>
              <li>
                <p>Worked as a consultant to organize the IOMAC 2022 conference papers into a PDF bundle file.</p>
              </li>
              <li>
                <p>Developed a data processing software for the Earthquake Engineering Research Facility (EERF) of University of British Columbia (UBC) that allows comparing the properties of earthquake records of bridges with graphical data visualization.</p>
              </li>

              <li>
                {" "}
                <p>
                  Designed and developed a website for the EWBI Canada using the WordPress CMS.{" "}
                  <a href="https://www.ewbi-canada.org" target="_blank" rel="noreferrer">
                    https://www.ewbi-canada.org
                  </a>
                </p>
              </li>
            </ul>

            <h3 className="headline--medium"> Web Developer | CAEE </h3>
            <h5 className="headline--muted">JAN 2013 – SEP 2022, VANCOUVER, BC</h5>
            <ul>
              <li>
                {" "}
                <p>Developed and maintained two WordPress websites within the Canadian Association for Earthquake Engineering (CAEE) portfolio. Crafted a responsive website for CAEE and a dedicated CAEE Membership site, serving approximately 500 members. As the sole developer, ensured seamless integration, consistency, and security across both platforms. Demonstrated expertise in leveraging WordPress capabilities to deliver dynamic and user-friendly web experiences, optimizing the organization's online presence.</p>
              </li>
              <li>
                <p>
                  Constructed a search engine for Conference Proceedings spanning eleven conferences, optimizing accessibility and user experience.{" "}
                  <a href="https://www.caee.ca/conferenceproceedings/" target="_blank" rel="noreferrer">
                    https://www.caee.ca/conferenceproceedings
                  </a>
                </p>
              </li>
            </ul>
            <h3 className="headline--medium"> Software Developer| PBRV Consulting </h3>
            <h5 className="headline--muted">SEP 2016 – JUL 2017, VANCOUVER, BC</h5>
            <ul>
              <li>
                {" "}
                <p>Designed and implemented a robust user account login system within WordPress, tailored to meet the unique needs of clients seeking personalized experiences. Leveraged WordPress's flexibility and extensibility to create a secure and intuitive login interface, allowing clients to access exclusive content, features, and services based on their individual preferences and permissions. </p>
              </li>
            </ul>
            <h3 className="headline--medium"> Webcast Coordinator (Part Time) </h3>
            <h5 className="headline--muted">JAN 2014 – JUL 2016, VANCOUVER, BC</h5>
            <ul>
              <li>
                <p>Created the links for the live webcast of engineering courses provided by the Structural Engineering Association of BC</p>
              </li>
              <li>
                <p>Set up the necessary hardware for the live streaming of courses.</p>
              </li>
              <li>
                <p>Monitored, reported, and troubleshot technical difficulties.</p>
              </li>
              <li>
                <p>Communicated with clients to troubleshoot site issues and performance.</p>
              </li>
              <li>
                <p>Developed and executed webcasting of seminars.</p>
              </li>
              <li>
                <p>Recorded, edited, and archived the video on servers</p>
              </li>
              <li>
                <p>Reported technical and operational issues to the relevant committee of SEABC.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Portfolio
