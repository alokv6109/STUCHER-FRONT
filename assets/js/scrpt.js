
//****************     Login credential validation   *******************
function validate() {
  var roll = document.getElementById("login_id").value;
  var pass = document.getElementById("password").value;
  if (roll == "") { alert("Please enter username"); return false; }
  else if (pass == "") { alert("Please enter password"); return false; }
  else { return true; }
}

//*****************Registration credential validation*******************
function valid() {

  var fname = document.getElementById("first_name").value;
  var lname = document.getElementById("last_name").value;
  var dob = document.getElementById("dob").value;
  var roll = document.getElementById("roll_no").value;
  var branch = document.getElementById("branch").value;
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("mobile").value;
  var pass = document.getElementById("password").value;
  var pc = document.getElementById("pc").value;
  if (fname == "") { alert("Please enter your first name"); return false; }
  else if (lname == "") { alert("Please enter your last name"); return false; }
  else if (dob == "") { alert("Please enter your DOB"); return false; }
  else if (roll == "") { alert("Please enter your roll no."); return false; }
  else if (isNaN(roll)) { alert("Please enter valid roll no."); return false; }
  else if (branch == "") { alert("Please enter your branch"); return false; }
  else if (email == "") { alert("Please enter email id"); return false; }
  else if (mobile == "") { alert("Please enter your mobile no."); return false; }
  else if (pass == "") { alert("Please enter password"); return false; }
  else if (pc == "") { alert("Please upload photo"); return false; }
  else { return true; }
}

//*******Registration credential validation for teacher**************
function vald() {
  var fn = document.getElementById("first").value;
  var ln = document.getElementById("last").value;
  var db = document.getElementById("db").value;
  var rol = document.getElementById("emp_id").value;
  var bran = document.getElementById("department").value;
  var em = document.getElementById("em").value;
  var mob = document.getElementById("mob").value;
  var pas = document.getElementById("pas").value;
  var pic=document.getElementById("pc").value;
  if (fn == "") { alert("Please enter your first name"); return false; }
  else if (ln == "") { alert("Please enter your last name"); return false; }
  else if (db == "") { alert("Please enter your DOB"); return false; }
  else if (rol == "") { alert("Please enter your Id"); return false; }
  else if (isNaN(rol)) { alert("Please enter valid Id"); return false; }
  else if (bran == "") { alert("Please enter your department"); return false; }
  else if (em == "") { alert("Please enter email id"); return false; }
  else if (mob == "") { alert("Please enter your mobile no."); return false; }
  else if (pas == "") { alert("Please enter password"); return false; }
  else if (pic == "") { alert("Please upload photo"); return false; }
  else { return true; }
}
// db.max = new Date().toISOString().split("T")[0];

//*********************Email Id Validation************************
// function validateemail(inputText)
// {
//   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if(inputText.value.match(mailformat))
//   {
//     document.form1.email.focus();
//     return true;
//   }
//   else
//   {
//     alert("You have entered an invalid email address!");
//     document.form1.email.focus();
//     return false;
//   }
// }

//*****************Validation of profile photo***********************//
function show(input) {
  debugger;
  var validExtensions = ['jpg','png','jpeg']; //array of valid extensions
  var fileName = input.files[0].name;
  var fileNameExt = fileName.substr(fileName.lastIndexOf('.') + 1);
  if ($.inArray(fileNameExt, validExtensions) == -1) {
      input.type = ''
      input.type = 'file'
      $('#user_img').attr('src',"");
      alert("Only these file types are accepted : "+validExtensions.join(', '));
  }
  else
  {
  if (input.files && input.files[0]) {
      var filerdr = new FileReader();
      filerdr.onload = function (e) {
          $('#user_img').attr('src', e.target.result);
      }
      filerdr.readAsDataURL(input.files[0]);
  }
  }
}



//*****************Angular Js***********************//
var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$http){
  conlole
  $http.get('/process_stud').then(function(response){
    $scope.user_name=response.data.first_name;
    $scope.roll_no=response.data.roll_no;
    $scope.branch=response.data.branch_id;
    $scope.mobile_no=response.data.mobile_number;
    $scope.email=response.data.email_id;
  })
})

