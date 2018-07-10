//******     STUDENT DETAILS USING ANGULAR JS    **************//
//**********       POST REQUEST   ******************//

var poststud = angular.module('poststud', ['ngCookies']);
poststud.controller('postController', function ($scope, $http, $cookies, $window) {
  $scope.stud = {};
  $scope.studdata = function () {
    $http.post('/process_stud', $scope.stud).then(function (res) {
      // console.log("the token is ",res.data.token)
      $cookies.put('accessToken', res.data.token)
      $cookies.put('accessId', res.data.id)
      if(res.data.token==undefined){
        alert("Please check your username")
      }
      else{
      $window.location.href = "/student_details";
      }
    });
  }
});

//**********      DETAILS     ******************//

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
//**********       POST REQUEST   ******************//

var postTeach = angular.module('postTeach', ['ngCookies']);
postTeach.controller('Controller', function ($scope, $http, $cookies, $window) {
  $scope.teach = {};
  $scope.teachdata = function () {
    $http.post('/process_teach', $scope.teach).then(function (res) {
      $cookies.put('accessToken', res.data.token)
      $cookies.put('accessId', res.data.id)
      if(res.data.token==undefined){
        alert("Please check your Id")
      }
      else{
      $window.location.href = "/teacher_details";
      }
    });
  }
});

//**********      DETAILS     ******************//

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


