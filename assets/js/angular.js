//******     STUDENT DETAILS USING ANGULAR JS    **************//
//**********       POST REQUEST   ******************//

var poststud = angular.module('poststud', ['ngCookies']);
poststud.controller('postController', function ($scope, $http, $cookies, $window) {
  $scope.stud = {};
  $scope.studdata = function () {
    var roll = document.getElementById("login_id").value;
    var pass = document.getElementById("password").value;
    if (roll == "") { alert("Please enter username"); }
    else if (pass == "") { alert("Please enter password"); }
    else {
      $http.post('/process_stud', $scope.stud).then(function (res) {
        // console.log("the token is ",res.data.token)
        $cookies.put('accessToken', res.data.token)
        $cookies.put('accessId', res.data.id)
        if (res.data.token == undefined) {
          alert("Please check your username or password")
        }
        else {
          $window.location.href = "/student_details";
        }
      });
    }
  }
});

//**********      DETAILS     ******************//

var app = angular.module('myApp', ['ngCookies']);
app.controller('myCtrl', function ($scope, $http, $cookies, $window) {
  $scope.marks = null;
  var token = $cookies.get('accessToken');
  var id = $cookies.get('accessId');
  data = { token, id };
  console.log("the data to send is ", data)
  $http.post('/student_details', data).then(function (res) {
    console.log("the upcomming response is ", res)
    if (res.data == "401") {
      alert("Session Expired! Login Again")
      $window.location.href = '/studentlogin';
    }
    else {
      var fname = res.data.first_name;
      var lname = res.data.last_name;
      $scope.user_name = fname + " " + lname;
      $scope.pic = res.data.image;
      $scope.roll_no = res.data.roll_no;
      $scope.branch = res.data.branch_id;
      $scope.mobile_no = res.data.mobile_number;
      $scope.email = res.data.email_id;
    }
  })

  // console.log("the lenght is ",res.data.result.length)
  // console.log("the marks response is ",res.data)
  $scope.display = function () {
    $http.post('/marks', data).then(function (res) {
      console.log(res.data.result);

      $scope.marks = res.data.result;
      if ($scope.marksShow == true) {
        $scope.marksShow = false;
      }
      else { $scope.marksShow = true; }

    })
  }

  $scope.logout = function () {
    $cookies.remove('accessToken')
    $http.post('/logout', data).then(function (res) {
      $window.location.href = "/";
    })
  }
})

//**********TEACHER DETAILS USING ANGULAR JS******************//
//**********       POST REQUEST   ******************//

var postTeach = angular.module('postTeach', ['ngCookies']);
postTeach.controller('Controller', function ($scope, $http, $cookies, $window) {
  $scope.teach = {};
  $scope.teachdata = function () {
    var roll = document.getElementById("login_id").value;
    var pass = document.getElementById("password").value;
    if (roll == "") { alert("Please enter username"); }
    else if (pass == "") { alert("Please enter password"); }
    else {
      $http.post('/process_teach', $scope.teach).then(function (res) {
        $cookies.put('accessToken', res.data.token)
        $cookies.put('accessId', res.data.id)
        if (res.data.token == undefined) {
          alert("Please check your Id or password")
        }
        else {
          $window.location.href = "/teacher_details";
        }
      });
    }
  }
});

//**********      DETAILS     ******************//

var tApp = angular.module('tApp', ['ngCookies']);
tApp.controller('Ctrl', function ($scope, $http, $cookies, $window) {
  var token = $cookies.get('accessToken');
  var id = $cookies.get('accessId');
  data = { token, id };
  console.log("the data to send is ", data)
  $http.post('/teacher_details', data).then(function (res) {
    console.log("the upcomming response is ", res)
    if (res.data == "401") {
      alert("Session Expired! Login Again")
      $window.location.href = '/teacherlogin';
    }
    else {
      var fname = res.data.first_name;
      var lname = res.data.last_name;
      $scope.user_name = fname + " " + lname;
      $scope.pic = res.data.image;
      $scope.teacher_id = res.data.roll_no;
      $scope.department = res.data.branch_id;
      $scope.mobile_no = res.data.mobile_number;
      $scope.email = res.data.email_id;
    }
  })
  $scope.teachstud = {};
  $scope.editmarks = function () {
    $scope.inputfrm = true;
    $scope.marksdetails = false;
  }
  $scope.senddata = function () {
    $scope.inputfrm = false;
    $scope.marksdetails = true;
    var roll_no = $scope.teachstud.roll_no;
    var sub_id = $scope.teachstud.sub_id;
    var newdata = { token, id, roll_no, sub_id }
    $http.post('/teach_stud', newdata).then(function (res) {
      $cookies.put('accessToken', res.data.token)
      $cookies.put('accessId', res.data.id)
      $scope.subject = res.data.marks[0].subject_name;
      $scope.marks = res.data.marks[0].marks;
    });
  }
  $scope.logout = function () {
    $cookies.remove('accessToken')
    $http.post('/logout', data).then(function (res) {
      $window.location.href = "/";
    })
  }

  $scope.newmarks = function () {
    var sub_id = $scope.teachstud.sub_id;
    console.log("THE SENDED sub_id is ", sub_id)
    var newmarks = $scope.marks;
    data = { token, id, sub_id, newmarks }
    $http.post('/updateMarks', data).then(function (res) {
      console.log("MARKS RESPONSE", res)
      alert("Marks are updated")
      $window.location.href = "/teacher_details";
    })
  }
})

var forgotpass = angular.module('forgotpass', []);
forgotpass.controller('passCtrl', function ($scope, $http,$window) {
  $scope.forgot_password = function () {
    var emailid = document.getElementById("email").value;
    var newpass = document.getElementById("password").value;
    if (emailid == "") {
      alert("please enter your email id.");
    }
    else if (newpass == "") { alert("please enter your new password"); }
    else {
      var password = $scope.password;
      var email = $scope.email;
      data = { email, password };
      $http.post('/forgot_password', data).then(function (res) {
        if(res.data=="401")
        {alert("Your email id did not match!")}
        else{
          alert("Your password has been changed successfully!")
          $window.location.href='/';
        }
      })
    }
  }
})