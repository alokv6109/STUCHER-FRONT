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
      if (res.data.token == undefined) {
        alert("Please check your username")
      }
      else {
        $window.location.href = "/student_details";
      }
    });
  }
});

//**********      DETAILS     ******************//

var app = angular.module('myApp', ['ngCookies']);
app.controller('myCtrl', function ($scope, $http, $cookies) {
  $scope.marks = null;
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
  
    // console.log("the lenght is ",res.data.result.length)
    // console.log("the marks response is ",res.data)
    $scope.display=function(){
      $http.post('/marks',data).then(function(res){
        console.log(res.data.result);
        
        $scope.marks =  res.data.result;
        if($scope.marksShow==true)
        {
          $scope.marksShow=false;
        }
        else{$scope.marksShow=true;}
  
  })
}
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
      if (res.data.token == undefined) {
        alert("Please check your Id")
      }
      else {
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
  $scope.teachstud = {};
  $scope.editmarks = function () {
        $scope.inputfrm=true;
      $scope.marksdetails=false;
  }
  $scope.senddata = function () {
    $scope.inputfrm = false;
    $scope.marksdetails = true;
    var roll_no = $scope.teachstud.roll_no;
    var sub_id = $scope.teachstud.sub_id;
    var newdata = { token, id, roll_no, sub_id }
    $http.post('/teach_stud', newdata).then(function (res) {
      console.log("THE RESPONSE IS ", res.data)
      $cookies.put('accessToken', res.data.token)
      $cookies.put('accessId', res.data.id)
      $scope.subject=res.data.response[0].subject_name;
      $scope.marks=res.data.response[0].marks;    
    });
  }
  $scope.newmarks=function(){
    var sub_id = $scope.teachstud.sub_id;
    console.log("THE SENDED sub_id is ",sub_id)
    var newmarks=$scope.marks;
    data={token, id, sub_id, newmarks}
    $http.post('/updateMarks',data).then(function(res){
       console.log("MARKS RESPONSE")
    })
  }
})