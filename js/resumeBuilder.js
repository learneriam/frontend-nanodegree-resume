/*
This is empty on purpose! Your code to build the resume will go here.
 */
var myheadername = HTMLheaderName.replace("%data%","Jyotsna Negi");
var myheaderrole = HTMLheaderRole.replace("%data%","PeopleSoft Developer");
var bio = "Bellevue - 98007, Phone Nbr: 2066195346";
var img = "images\IMG_3480.jpg"
$("#header").append(myheadername);
$("#header").append(myheaderrole);
$("#header").append(bio);

var work ={curjob:'Senior PeopleSoft Developer', 
  curemp:'Hughes Telecom',
  curdur: 'Oct-2015 - Till date',
  curcit: 'Washington, D.C.'
};
var edu={sch:'College of Technology, GBPUAT, India',
  year : '2004-2008'
  major: 'B.Tech, Electronics and Communications'
};
$("#header").append(img);
$("#main").append(work.curjob);
