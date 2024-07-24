import React from "react"
import Page from "../Page/Page"
function AboutMe() {
  return (
    <Page title="About Me">
      <div className="wrapper wrapper__border">
        <div className="container__home">
          <h1 className="container__left--title">About Me</h1>
          <h3>
            <strong>Welcome to My Portfolio.</strong>
          </h3>
          <p className="container__left--paragraph">
            My name is Indira Pandey, and I am a detail-oriented software engineer with experience in crafting interactive web applications and robust backend systems.
            <br></br>
            <br></br>
            I developed this application as part of my learning journey, showcasing my proficiency in React, Sass, and WordPress by integrating a modern front-end with a robust back-end system. The frontend, built using React and styled with Sass, delivers a responsive and visually appealing user interface. The backend leverages WordPress and interacts with it through the REST API for seamless communication. User registration involves a POST request to the WordPress API to create new accounts, while login utilizes the JWT authentication endpoint to obtain a token for subsequent authenticated requests. This integration demonstrates a full-stack implementation, efficiently handling user management and highlighting my skills in these technologies.
            <br></br>
            <br></br>
            My proficiency extends to leveraging the power of WordPress for dynamic content management complemented by a comprehensive skill set in PHP, MySQL and the seamless integration of RESTful APIs. Moreover, I possess expertise in front-end technologies such as React, JavaScript, HTML, CSS, Sass, Bootstrap and Webpack - all aimed at delivering impeccable user experiences.
            <br></br>
            <br></br>
            As I am looking for a job, I remain open to exploring new opportunities that align with my skills, experience and career aspirations. My goal is to contribute to software engineering with my expertise and passion working in a dynamic and innovative organization where I can make a meaningful impact.
          </p>
        </div>
      </div>
    </Page>
  )
}

export default AboutMe
