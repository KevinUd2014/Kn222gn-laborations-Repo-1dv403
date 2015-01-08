"use strict";


window.onload = function()
{
    var desk = new Desktop();
    var newWindow = new Start(desk);
    
    newWindow.addApp("Gallery", "Pics/File1.2.png");                        //länkar in iconbilderna
    newWindow.addApp("Memory", "Pics/File2.1.png");
};

/*Klass, Definition*/
function Desktop()
{
    this.element = document.querySelector(".Desktop");
}

/*Klass, Definition*/
function Window(desk, name, image)  // fick hjälp med alla dessa this i denna klass hade massor med problem med den!!
{
    var template = document.querySelector(".Template");                     //hämtar dom olika elementen från html dokumentet!
    
    this.windowTemplate = template.content.querySelector(".Window");
    
    var windowClone = this.windowTemplate.cloneNode(true);
    
    this.windowTitle = windowClone.querySelector(".Title");
    
    var closeButton = windowClone.querySelector(".closeIcon");
    
    this.desk = desk;
    this.Window = windowClone;
    this.windowClone = windowClone;
    this.windowTitle.innerHTML = name;
    
    desk.element.appendChild(windowClone);
    
    this.createLoader();
    this.dragable();

    closeButton.onclick = function ()                       //sätter att om  man klickar på X knappen så ska allt stängas!
    {
        this.close();
    }.bind(this);  // denna funktion binds till this objektet som i detta fall är close knappen!!
}

Window.prototype.close = function()                                         //när ett fönster stängs så kommer child och tas bort!!
{
    this.desk.element.removeChild(this.windowClone);
};

Window.prototype.setPosition = function(x,y)                                //gör om Css från javan, och sätter så att x och y ändras i px
{
    this.windowClone.style.left = x + "px";
    this.windowClone.style.top = y + "px";
};

Window.prototype.createLoader = function() {
    this.loadingImg = document.createElement("img");
    this.BottomFrame = this.Window.querySelector(".BottomFrame");
    this.loadingImg.src = "Pics/loading.gif";
    this.loadingImg.className = "Loading";
    this.BottomFrame.appendChild(this.loadingImg);
};

Window.prototype.dragable = function () //  Fick hjälp av klasskompis med att hitta denna länk!  För att få fönster dragbara!  http://stackoverflow.com/questions/9334084/moveable-draggable-div.
{
    
    var Window = this.Window;  // skapar en ny variabel med Window!
    
    var moveX; // skapar de olika offset vinklarna med x och y
    var moveY;
    
    var moveDiv = function (e)
    {
        Window.style.left = e.clientX-moveX + 'px';  // ändrar stilen för mina div taggar med top och left och detta i pixlar!
        Window.style.top = e.clientY-moveY + 'px';
    };
    var mouseUp = function () 
    {
        window.removeEventListener('mousemove', moveDiv, true);  // detta ska aktiveras när användaren håller ner musen!
    };

    var mouseDown = function (e) 
    {
        moveX = e.clientX - parseInt(Window.style.left);  // vet inte varför dessa får en varning!
        moveY = e.clientY - parseInt(Window.style.top);
        
        window.addEventListener('mousemove', moveDiv, true);  // Fixar att om nu någon trycker ner musen så körs denna som true! och då kan man flytta rutan!
    };
        var Topbar = this.Window.querySelector(".Topbar");
        Topbar.addEventListener("mousedown", mouseDown, false);
        window.addEventListener('mouseup', mouseUp, false);
    };
    
Window.prototype.fullSizeImage = function (width, height)   // denna fixar storleken på bilderna!
{
    //console.log(width + " " + height);
    
    this.Window.style.width = width + "px";
    this.Window.style.height = height + "px";
};

/*Klass, Definition*/
function Start(desk) //läger till iconerna i appbaren!
{
    this.element = document.querySelector(".Appbar");
    this.desk = desk;
    this.start = {x:0,y:0};
}

Start.prototype.addApp = function(name, url)                                //fönstren ska flyttas 10 px varje gång dom upprepat öppnas!
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
Start.prototype.nameCheck = function(name, image)
{
    if (name === "Gallery")
    {
        new Gallery();
    }
    if (name === "Memory")  // ska göra samma som galleriet men med mitt memory spel tillsist!!
    {
        console.log("The memory will be here!");
    }
};

function Gallery(desk, Window)
{
    this.Window = Window;
    this.getPictures(desk, Window);
}

Gallery.prototype.getPictures = function(desk, Window)  // Vet ej var jag ska använda Picture array!
{
    var xhr = new XMLHttpRequest();
    var self = this;
    
    
    xhr.onreadystatechange = function()
    {
        if(xhr.readyState === 4)
        {
            Window.BottomFrame.removeChild(Window.loadingImg);
            var pictureArray = JSON.parse(xhr.responseText);
            this.Inside = Window.Window.querySelector(".Inside");  // lägger in detta i Inside classen! bilderna dvs.
            
            for (var i = 0; i < pictureArray.length; i++) 
            {  // och för varje bild i arrayen så skapar jag följande!
                var imageContent = document.createElement("div");  // skapar en div tag!
                imageContent.className = "ImageBox";  
                
                var image = document.createElement("img");  //Skapar en img tag också som jag ska länka in bilderna i!
                
                var aTag = document.createElement("a");
                aTag.className = "newGallery";  //skapar en ny klass!
                aTag.href ="#";
                
                image.className = pictureArray[i].URL;  // är lite osäker på dessa!
                image.src = pictureArray[i].thumbURL; // fick hjälp med dem!
                
                image.addEventListener("click", function() {
                    
                    self.imgViewer(desk, this);  // man ska skickas vidare om man klickar på en bild nästa funktion"!!
                    
                });
                imageContent.appendChild(image);
                aTag.appendChild(imageContent);
                this.Inside.appendChild(aTag);
            }
        }
    };
    xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/" , true);
    xhr.send(null);
};

/*Klass, Prototyp, Definition*/
Gallery.prototype.imgViewer = function(desk, img) {
    
    var name = "View Image";
    var pic = document.createElement("img");
    
    pic.src = "Pics/File1.2.png";
    
    var image = document.createElement("img");
    
    image.src = img.className;
    
    var content = new Window(desk, name, pic);
    var Inside = content.Window.querySelector(".Inside");
    
    Inside.appendChild(image);
    content.BottomFrame.removeChild(content.loadingImg);
    
    content.fullSizeImage(image.width, image.height);
};

/*Klass, Definition*/
function Icon()
{
    
};

