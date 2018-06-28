"use strict";

const projectComponent ={
    template: `
    <div class="projtop">
  <h1>Projects</h1>
</div>
<nav>
  <a href="#!/home-component">About Me</a>
  <a href="#!/project-component">Projects</a>
  <a href="#!/resume-component">Resumé</a>
  <a href="https://www.linkedin.com/in/charity-cardinal/" class="mdi mdi-24px mdi-linkedin">LinkedIn</a>
  <a href="https://github.com/charcard" class="mdi mdi-24px mdi-github-circle">GitHub</a>
</nav>
<section class="homebuttoncontainer">
    <a href="https://charcard.github.io/FinalProject/" div class="homebutton"</a>
    <img src="images/blankcanvas.JPG" alt="Blank Canvas home page">
    <div class="imagebuttonoverlayhome"><p>Blank Canvas</p></div>
    </div>

    <a href="https://charcard.github.io/MidtermProject/" div class="homebutton"</a>
    <img src="images/wichhunt.JPG" alt="'Wich Hunt home page">
    <div class="imagebuttonoverlayhome"><p>'Wich Hunt</p></div>
    </div>
      
    <a href="https://hannahsaintonge.github.io/BoxOffice/#!/search-criteria" div class="homebutton"</a>
    <img src="images/boxoffice.JPG" alt="Box Office home page">
    <div class="imagebuttonoverlayhome"><p>Box Office</p></div>
    </div>
</section>
    `,
}

angular
    .module("app")
    .component("projectComponent", projectComponent);


    // <h3>Blank Canvas (made with team of three)</h3></a>
    //   <p>Art discovery app using the Harvard Art Museum's API.</p>
    //   <h5>Made with HTML, CSS and AngularJS.</h5>

    // <h3>Sandwich Shop: 'Wich Hunt (made with team of three)</h3></a>
    //   <p>Witch themed point of sale site for a sandwich shop.</p>
    //   <h5>Made with HTML, CSS and jQuery.</h5>

    // <h3>Flick Finder (made with team of two)</h3></a>
    //   <p>Site to assist users with finding a movie to watch, using data
    //     from TheMovieDB API.</p>
    //   <h5>Made with HTML, CSS and AngularJS.</h5>