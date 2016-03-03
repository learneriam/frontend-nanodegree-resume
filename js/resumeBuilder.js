/*
This is empty on purpose! Your code to build the resume will go here.
 */
var myheadername = HTMLheaderName.replace("%data%","Jyotsna Negi");
var myheaderrole = HTMLheaderRole.replace("%data%","PeopleSoft Developer");
var bio = "Bellevue - 98007, Phone Nbr: 2066195346";
var img = "images\IMG_3480.jpg"
$("#header").append(myheadername);
$("#header").append(myheaderrole);
$("#main").append(bio);
$("#header").append(img);
