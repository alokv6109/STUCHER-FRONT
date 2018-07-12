
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

function inputvalidate() {
  var roll_no = document.getElementById("roll_no").value;
  var sub_id = document.getElementById("sub_id").value;
  if (roll_no == "") {
    alert("enter roll no."); return false;
  }
  else if (sub_id == "") {
    alert("enter subject code"); return false;
  }
  else {
    return true;
  }
}

//***********       VALIDATION OF PROFILE PHOTO       *************//
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

/mobile/i.test(navigator.userAgent) && !window.location.hash && setTimeout(function () {
  window.scrollTo(0, 1);
  }, 1000);
  