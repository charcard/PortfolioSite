"use strict";

const resumeComponent ={
    template: `
    <div class="resumeheader">
    <h1>Resumé</h1>
  </div>
  <nav>
  <a href="#!/home-component">About Me</a>
  <a href="#!/project-component">Projects</a>
  <a href="#!/resume-component">Resumé</a>
  <a href="https://www.linkedin.com/in/charity-cardinal/">LinkedIn</a>
  <a href="https://github.com/charcard">GitHub</a>
</nav>
    <section class="resume">
      <object data="Charity_Cardinal_Resume.pdf" type="application/pdf"></object>
    </section>
    `,
}

angular
    .module("app")
    .component("resumeComponent", resumeComponent);