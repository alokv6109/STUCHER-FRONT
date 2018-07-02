
//****************     Login credential validation   *******************
function validate(){
  var roll=document.getElementById("login_id").value;
  var pass=document.getElementById("password").value;
  if(roll=="")
  {alert("Please enter username"); return false;}
  else if(pass=="")
  {alert("Please enter password"); return false;}
  else
  {return true;}
}

//*****************Registration credential validation*******************
function valid(){
  var fname=document.getElementById("first_name").value;
  var lname=document.getElementById("last_name").value;
  var dob=document.getElementById("dob").value;
  var roll=document.getElementById("roll_no").value;
  var branch=document.getElementById("branch").value;
  var email=document.getElementById("email").value;
  var mobile=document.getElementById("mobile").value;
  var pass=document.getElementById("password").value;
  if(fname=="")
  {alert("Please enter your first name"); return false;}
  else if(lname=="")
  {alert("Please enter your roll no."); return false;}
  else if(dob=="")
  {alert("Please enter your DOB"); return false;}
  else if(roll=="")
  {alert("Please enter your roll no."); return false;}
  else if(branch=="")
  {alert("Please enter your branch"); return false;}
  else if(email=="")
  {alert("Please enter email id"); return false;}
  else if(mobile=="")
  {alert("Please enter your mobile no."); return false;}
  else if(pass=="")
  {alert("Please enter password"); return false;}
  else {return true;}
}
//*********************Email Id Validation************************
function validateemail(inputText)
{
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(inputText.value.match(mailformat))
  {
    document.form1.email.focus();
    return true;
  }
  else
  {
    alert("You have entered an invalid email address!");
    document.form1.email.focus();
    return false;
  }
}

//*****************Angular Js***********************//
// var app=angular.module('myApp',[]);
// app.controller('myCtrl',function($scope,$http){
//   $http.get('').then(function(response){
//     $scope=response.data;
//   })
// })
