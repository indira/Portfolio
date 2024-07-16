import React from "react"
import Page from "../Page/Page"
function AboutMe() {
  return (
    <Page title="About Me">
      <div className="wrapper wrapper__border">
        <div className="container__home">
          <h1 className="container__left--title">About Me</h1>
          <p className="container__left--paragraph">
            Welcome to Portfolio. My name is Indira Pandey.I like to introduce myself as a detail-oriented software engineer with an experience in crafting interactive web applications and robust backend systems.
            <br></br>
            <br></br>I created this "Innovation Hub" application during my Capstone Project while pursuing my Diploma in Software Engineering at BrainStation, Vancouver. This application is built using React and Sass for the frontend and Node JS, Express and MySQL for the backend and serves as a refrence to my proficiency in these technologies.
            <br></br>
            <br></br>
            This application allows users to register themselves on the platform and to share their thoughts and ideas by creating posts which are made public upon submission.
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
