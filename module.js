"use strict";

angular
    .module("app", ["ngRoute"])
    .config(function($routeProvider) {
        $routeProvider
        .when("/home-component", {
            template: `
            <home-component></home-component>
             `
        })
        .when("/project-component", {
            template: `
            <project-component></project-component>
             `
        })
         .when("/resume-component", {
            template: `
            <resume-component></resume-component>
             `
        })
        .otherwise({ redirectTo: "/home-component"});
    })

