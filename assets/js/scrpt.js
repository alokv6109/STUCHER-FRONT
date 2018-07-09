
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
  var pic = document.getElementById("pc").value;
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

function forgotvalidate() {
  var emailid = document.getElementById("email").value;
  var newpass = document.getElementById("password").value;
  if (emailid == "") {
    alert("please enter your email id."); return false;
  }
  else if (newpass == "") { alert("please enter your new password"); return false; }
  else { return true; }
}


//*****************Validation of profile photo***********************//
function show(input) {
  debugger;
  var validExtensions = ['jpg', 'png', 'jpeg']; //array of valid extensions
  var fileName = input.files[0].name;
  var fileNameExt = fileName.substr(fileName.lastIndexOf('.') + 1);
  if ($.inArray(fileNameExt, validExtensions) == -1) {
    input.type = ''
    input.type = 'file'
    $('#user_img').attr('src', "");
    alert("Only these file types are accepted : " + validExtensions.join(', '));
  }
  else {
    if (input.files && input.files[0]) {
      var filerdr = new FileReader();
      filerdr.onload = function (e) {
        $('#user_img').attr('src', e.target.result);
      }
      filerdr.readAsDataURL(input.files[0]);
    }
  }
}

//**********STUDENT DETAILS USING ANGULAR JS******************//

var app = angular.module('myApp', ['ngCookies']);
app.controller('myCtrl', function ($scope, $http, $cookies) {
  var token = $cookies.get('accessToken');
  var id = $cookies.get('accessId');
  data = { token, id };
  console.log("the data to send is ", data)
  $http.post('/student_details', data).then(function (res) {
    console.log("the upcomming response is ", res)
    var fname = res.data.first_name;
    var lname = res.data.last_name;
    $scope.user_name = fname + " " + lname;
    $scope.roll_no = res.data.roll_no;
    $scope.branch = res.data.branch_id;
    $scope.mobile_no = res.data.mobile_number;
    $scope.email = res.data.email_id;
  })
})

//**********TEACHER DETAILS USING ANGULAR JS******************//

var tApp = angular.module('tApp', ['ngCookies']);
tApp.controller('Ctrl', function ($scope, $http, $cookies) {
  var token = $cookies.get('accessToken');
  var id = $cookies.get('accessId');
  data = { token, id };
  console.log("the data to send is ", data)
  $http.post('/teacher_details', data).then(function (res) {
    console.log("the upcomming response is ", res)
    var fname = res.data.first_name;
    var lname = res.data.last_name;
    $scope.user_name = fname + " " + lname;
    $scope.teacher_id = res.data.roll_no;
    $scope.department = res.data.branch_id;
    $scope.mobile_no = res.data.mobile_number;
    $scope.email = res.data.email_id;
  })
})

var postTeach = angular.module('postTeach', ['ngCookies']);
postTeach.controller('Controller', function ($scope, $http, $cookies, $window) {
  $scope.teach = {};
  $scope.teachdata = function () {
    $http.post('/process_teach', $scope.teach).then(function (res) {
      $cookies.put('accessToken', res.data.token)
      $cookies.put('accessId', res.data.id)
      $window.location.href = "/teacher_details";
    });
  }
});

var poststud = angular.module('poststud', ['ngCookies']);
poststud.controller('postController', function ($scope, $http, $cookies, $window) {
  $scope.stud = {};
  $scope.studdata = function () {
    $http.post('/process_stud', $scope.stud).then(function (res) {
      $cookies.put('accessToken', res.data.token)
      $cookies.put('accessId', res.data.id)
      $window.location.href = "/student_details";
    });
  }
});
