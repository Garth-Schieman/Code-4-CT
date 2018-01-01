// function prototype for course headings
function course(title,description,duration,cost){
          this.title = title;
          this.description = description;
          this.duration = duration;
          this.cost = cost;
}

// variables for courses offered;javaScript,frontEndWebDevelopment,python,fullStackJavaScript,websiteDeployment,innovationChallenge,codeStorm,hackathon,webPages,music,animation,developer

var javaScript = new course("Beginner JavaScript","Develop a basic proficiency in programming structures and methods in JavaScript so that you are able to create an interactive web application.","6 days", 1800);

var frontEndWebDevelopment = new course("Beginner Front End Web Development","Develop a good proficiency in CSS and an understanding of web design principles so that you are able to create visually pleasing web pages.","6 days", 1800);

var python = new course("Beginner Python","Develop a basic proficiency in programming principles and methods in Python.","6 days",1800);

var fullStackJavaScript = new course("Full Stack JavaScript","Develop an understanding of the front and backend development environment and basic proficiency in server side JavaScript and object-oriented programming. By the end of the course you will be able to architect an application, control flow in an application and persist and retrieve data in a database.","6 days", 1800);

var websiteDeployment = new course("Website Deployment","Learn how to manage and deploy code to a server environment so that you can host your own web pages.","4 days",1200);

var innovationChallenge = new course("Innovation Challenge","Work in groups to design an innovative solution to a social issue by using the design thinking process.","3 days",750);

var codeStorm = new course("CodeStorm","Work in groups to create and present a code project that addresses a particular issue.","5 days",1500);

var hackathon = new course("Hackathon","Learn how to manage and deploy code to a server environment so that you can host your own web pages.","TBC","TBC");

var webPages = new course("Intro to Coding: Web Pages","Code a simple one-page website using HTML and JQuery.","3 hours",250);

var music = new course("Intro to Coding: Music","Code a song using SonicPi software on a Raspberry Pi computer.","3 hours",250);

var animation = new course("Intro to Coding: Animation","Create a 2D animation using coding language JavaScript.","3 hours",250);

var developer = new course("Getting started as a developer","Learn how to set up a development environment and practical skills to start coding.","3 hours",250);

// document.write to display courses:javaScript,frontEndWebDevelopment,python,fullStackJavaScript,websiteDeployment,innovationChallenge,codeStorm,hackathon,webPages,music,animation,developer

document.getElementById('javaScript').innerHTML = "<p><img src='images/javascript.png' alt='javaScript' width='100px' height='100px'></p>"+"<p><h2>Title:" + javaScript.title + "</h2></p>" + "<p style='margin-top:45px;'>" + javaScript.description + "</p>" + "<p>Duration:" + javaScript.duration + "</p>" + "<p>Cost of course:" + javaScript.cost + "</p>" + "<button type='button' name='button' value='1800' id='add1'style='border-radius:10%;margin-top:5px;'><img src='images/add.png' alt='add to cart' width='40px' height='40px'></button>" + "<button type='button' name='button' id='remove1' style='border-radius:10%;' value='1800'><img src='images/delete.png' alt='add to cart' width='40px' height='40px'></button>";

document.getElementById('frontEndWebDevelopment').innerHTML = "<p><img src='images/FEWD.png' alt='javaScript' width='100px' height='100px'></p>"+"<p><h2>Title:" + frontEndWebDevelopment.title + "</h2></p>" + "<p>" + frontEndWebDevelopment.description + "</p>" + "<p>Duration:" + frontEndWebDevelopment.duration + "</p>" + "<p>Cost of course:" + frontEndWebDevelopment.cost + "</p>" + "<button type='button' name='button' id='add2' value='1800'style='border-radius:10%;'><img src='images/add.png' alt='add to cart' width='40px' height='40px'></button>" + "<button type='button' name='button' id='remove2' value='1800'style='border-radius:10%;'><img src='images/delete.png' alt='add to cart' width='40px' height='40px'></button>";

document.getElementById('python').innerHTML = "<p><img src='images/python.png' alt='javaScript' width='100px' height='100px'></p>"+"<p><h2>Title:" + python.title + "</h2></p>" + "<p>" + python.description + "</p>" + "<p>Duration:" + python.duration + "</p>" + "<p>Cost of course:" + python.cost + "</p>" + "<button type='button' name='button' id='add3' style='margin-top:73px;' value='1800'style='border-radius:10%;'><img src='images/add.png' alt='add to cart' width='40px' height='40px'></button>" + "<button type='button' name='button' id='remove3' value='1800'style='border-radius:10%;'><img src='images/delete.png' alt='add to cart' width='40px' height='40px'></button>";

document.getElementById('fullStackJavaScript').innerHTML = "<p><img src='images/fulljavascript.jpg'fulljavascript.jpg alt='javaScript' width='100px' height='100px'></p>"+"<p><h2>Title:" + fullStackJavaScript.title + "</h2></p>" + "<p>" + fullStackJavaScript.description + "</p>" + "<p>Duration:" + fullStackJavaScript.duration + "</p>" + "<p>Cost of course:" + fullStackJavaScript.cost + "</p>" + "<button type='button' name='button' id='add4' value='1800'style='border-radius:10%;'><img src='images/add.png' alt='add to cart' width='40px' height='40px'></button>" + "<button type='button' name='button' id='remove4' value='1800'style='border-radius:10%;'><img src='images/delete.png' alt='add to cart' width='40px' height='40px'></button>";

document.getElementById('websiteDeployment').innerHTML = "<p><img src='images/webdeploy.png' alt='javaScript' width='100px' height='100px'></p>"+"<p><h2>Title:" + websiteDeployment.title + "</h2></p>" + "<p>" + websiteDeployment.description + "</p>" + "<p>Duration:" + websiteDeployment.duration + "</p>" + "<p>Cost of course:" + websiteDeployment.cost + "</p>" + "<button type='button' name='button' id='add5' value='1200'style='border-radius:10%;'><img src='images/add.png' alt='add to cart' width='40px' height='40px'></button>" + "<button type='button' name='button' id='remove5' value='1200'style='border-radius:10%;'><img src='images/delete.png' alt='add to cart' width='40px' height='40px'></button>";

document.getElementById('innovationChallenge').innerHTML = "<p><img src='images/innovate.jpg' alt='javaScript' width='100px' height='100px'></p>"+"<p><h2>Title:" + innovationChallenge.title + "</h2></p>" + "<p>" + innovationChallenge.description + "</p>" + "<p>Duration:" + innovationChallenge.duration + "</p>" + "<p>Cost of course:" + innovationChallenge.cost + "</p>" + "<button type='button' name='button' id='add6' value='750'style='border-radius:10%;'><img src='images/add.png' alt='add to cart' width='40px' height='40px'></button>" + "<button type='button' name='button' id='remove6' value='750'style='border-radius:10%;'><img src='images/delete.png' alt='add to cart' width='40px' height='40px'></button>";

document.getElementById('codeStorm').innerHTML = "<p><img src='images/codestorm.jpg' alt='javaScript' width='100px' height='100px'></p>"+"<p><h2>Title:" + codeStorm.title + "</h2></p>" + "<p>" + codeStorm.description + "</p>" + "<p>Duration:" + codeStorm.duration + "</p>" + "<p>Cost of course:" + codeStorm.cost + "</p>" + "<button type='button' name='button' id='add7' value='1500'style='border-radius:10%;'><img src='images/add.png' alt='add to cart' width='40px' height='40px'></button>" + "<button type='button' name='button' id='remove7' value='1500'style='border-radius:10%;'><img src='images/delete.png' alt='add to cart' width='40px' height='40px'></button>";

document.getElementById('hackathon').innerHTML = "<p><img src='images/hackathon.png' alt='javaScript' width='100px' height='100px'></p>"+"<p><h2>Title:" + hackathon.title + "</h2></p>" + "<p>" + hackathon.description + "</p>" + "<p>Duration:" + hackathon.duration + "</p>" + "<p>Cost of course:" + hackathon.cost + "</p>" + "<button type='button' name='button' id='add8' value='TBC'style='border-radius:10%;'><img src='images/add.png' alt='add to cart' width='40px' height='40px'></button>" + "<button type='button' name='button' id='remove8' value='TBC'style='border-radius:10%;'><img src='images/delete.png' alt='add to cart' width='40px' height='40px'></button>";

document.getElementById('webPages').innerHTML = "<p><h2>Title:" + webPages.title + "</h2></p>" + "<p>" + webPages.description + "</p>" + "<p>Duration:" + webPages.duration + "</p>" + "<p>Cost of course:" + webPages.cost + "</p>" + "<button type='button' name='button' id='add9' value='250'style='border-radius:10%;'><img src='images/add.png' alt='add to cart' width='40px' height='40px'></button>" + "<button type='button' name='button' id='remove9' value='250'style='border-radius:10%;'><img src='images/delete.png' alt='add to cart' width='40px' height='40px'></button>";

document.getElementById('music').innerHTML = "<p><h2>Title:" + music.title + "</h2></p>" + "<p>" + music.description + "</p>" + "<p>Duration:" + music.duration + "</p>" + "<p>Cost of course:" + music.cost + "</p>" + "<button type='button' name='button' id='add10' value='250'style='border-radius:10%;'><img src='images/add.png' alt='add to cart' width='40px' height='40px'></button>" + "<button type='button' name='button' id='remove10' value='250'style='border-radius:10%;'><img src='images/delete.png' alt='add to cart' width='40px' height='40px'></button>";

document.getElementById('animation').innerHTML = "<p><h2>Title:" + animation.title + "</h2></p>" + "<p>" + animation.description + "</p>" + "<p>Duration:" + animation.duration + "</p>" + "<p>Cost of course:" + animation.cost + "</p>" + "<button type='button' name='button' id='add11' style='margin-top:18px;' value='250'style='border-radius:10%;'><img src='images/add.png' alt='add to cart' width='40px' height='40px'></button>" + "<button type='button' name='button' id='remove11' value='250'style='border-radius:10%;'><img src='images/delete.png' alt='add to cart' width='40px' height='40px'></button>";

document.getElementById('developer').innerHTML = "<p><h2>Title:" + developer.title + "</h2></p>" + "<p>" + developer.description + "</p>" + "<p>Duration:" + developer.duration + "</p>" + "<p>Cost of course:" + developer.cost + "</p>" + "<button type='button' name='button' id='add12' value='250'style='border-radius:10%;'><img src='images/add.png' alt='add to cart' width='40px' height='40px'></button>" + "<button type='button' name='button' id='remove12' value='250'style='border-radius:10%;'><img src='images/delete.png' alt='add to cart' width='40px' height='40px'></button>";


// jQuery for smooth scroll button
jQuery(document).ready(function($){
$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
        $('#backToTop').fadeIn('slow');
    } else {
        $('#backToTop').fadeOut('slow');
    }
});
$('#backToTop').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 2000);
    return false;
});
});
