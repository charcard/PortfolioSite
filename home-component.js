"use strict";

const homeComponent ={
    template: `
    <header class="homeheader">
    <h1>Charity A. Cardinal</h1>
      <h3>Front-End Web Developer</h3>
  </header>
  <nav>
    <a href="#!/home-component">About Me</a>
    <a href="#!/project-component">Projects</a>
    <a href="#!/resume-component">Resumé</a>
    <a href="https://www.linkedin.com/in/charity-cardinal/">LinkedIn</a>
    <a href="https://github.com/charcard">GitHub</a>
  </nav>
    <section class="intro">
      <p>Welcome!  I'm Charity.  I recently graduated from 
      the Front-End Web Development Bootcamp at Grand Circus in Detroit. 
      I am also a University of Michigan graduate and now a solutions-driven 
      web developer with a passion for clean UI and a drive to consistently improve. 
      Placing a priority on client interaction, I excel at working with both customers 
      and coworkers to develop creative solutions to complex problems. With a few years 
      of varied professional experience, I have previously managed classrooms and taught
      students; maintained financial reports and bookkeeping, and provided home health 
      assistance to patients in the Ann Arbor region. As a former grad student turned 
      coding boot camp graduate, I am now following my programming career goals and 
      looking to add value to an organization with my technical skillset. 
      Check out some of the projects that I made while in bootcamp and my <a href="#!/resume-component">resumé</a>. 
      Thank you for visiting!
      </p>
    </section>
    `,
}

angular
    .module("app")
    .component("homeComponent", homeComponent);