"use strict";


window.onload = function()
{
    var desk = new Desktop();
    
};

/*Klass, Definition*/
function Desktop()
{
    var desktop = document.querySelector(".Desktop");
}

/*Klass, Definition*/
function Window(desk)
{
    var template = document.querySelector("#Template");
    var windowTemplate = template.content.querySelector(".Window");
    var windowClone = windowTemplate.cloneNode(true);
    desk.Desktop.appendChild(windowClone);
}

/*Klass, Definition*/
function Start()
{
    this.element = document.querySelector(".Appbar");
}

/*Klass, Definition*/
function Icon()
{
    
}

