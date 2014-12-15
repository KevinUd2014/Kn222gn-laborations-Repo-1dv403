"use strict";


window.onload = function()
{
    var desk = new Desktop();
    var startDiffrent = new Start(desk);
    
    startDiffrent.addApp("Gallery", "Pics/File1.png");
    startDiffrent.addApp("Memory", "Pics/File2.png");
    
};

/*Klass, Definition*/
function Desktop()
{
    this.element = document.querySelector(".Desktop");
}

/*Klass, Definition*/
function Window(desk, name)
{
    var template = document.querySelector("#Template");
    var windowTemplate = template.content.querySelector(".Window");
    var windowClone = windowTemplate.cloneNode(true);
    //desk.Desktop.appendChild(windowClone);
    var windowTitle = windowClone.querySelector(".Title");
    var closeButton = windowClone.querySelector(".closeIcon");
    var self = this;
    
    this.desk = desk;
    this.windowClone = windowClone;
    windowTitle.innerHTML = name;
    desk.element.appendChild(windowClone);
    
    closeButton.addEventListener("click", function ()  //sätter att om  man klickar på X knappen så ska allt stängas!
    {
        self.close();
    });
}

Window.prototype.close = function()
{
    this.desk.element.removeChild(this.windowClone);
};

Window.prototype.setPosition = function(x,y)  //gör om Css från javan och sätter så att x och y ändras i px
{
    this.windowClone.style.left = x + "px";
    this.windowClone.style.top = y + "px";
};

/*Klass, Definition*/
function Start(desk) //läger till iconerna i appbaren!
{
    this.element = document.querySelector(".Appbar");
    this.desk = desk;
    this.start = {x:0,y:0};
}
Start.prototype.addApp = function(name, url)  //fönstren ska flyttas 10 px varje gång dom upprepat öppnas!
{
    var image = document.createElement("img");
    image.src = url;
    var self = this;
    this.element.appendChild(image);
    
    image.addEventListener("click", function()
    {
        var windows = new Window(self.desk, name);
        self.start.x += 10;  //10px både på x och y axeln
        self.start.y += 10;
        windows.setPosition(self.start.x, self.start.y);
    });
},

/*Klass, Definition*/
function Icon()
{
    
};

