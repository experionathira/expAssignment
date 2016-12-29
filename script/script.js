function login() {
  var r;
  var xhttp = new XMLHttpRequest();
   

  xhttp.onreadystatechange = function() {
   
    if (this.readyState == 4 && this.status == 200) {
  
      r=JSON.parse(this.responseText);

      if (r.status == '200') {

        console.log("Login successful");
        window.location.href="dashboard.html";

      }
      else if(r.status== '403') {

        console.log("Username and password not correct");
        alert("Username and password not correct")
      }
    }
    
  }
  var user_name= document.getElementById('username').value;
  var pattern=user_name.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
  if (pattern==null) {
    alert("Not a valid e-mail address");
  };
  
  
  // var atpos = user_name.indexOf("@");
  //   var dotpos = user_name.lastIndexOf(".");
  //   if (atpos<1 || dotpos<atpos+2 || dotpos+2>=user_name.length) {
  //       alert("Not a valid e-mail address");
  //       return false;
  //   }

  var passwd= document.getElementById('password').value;
  var send_input="userName="+user_name+"&password="+passwd;
  xhttp.open("POST", "https://exptest.herokuapp.com/api/login", true);
  xhttp.setRequestHeader("Content-Type" , "application/x-www-form-urlencoded");
  xhttp.send(send_input);

  
} ;




