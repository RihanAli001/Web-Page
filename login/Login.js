function myFunction() {
  var x = document.getElementById("myPass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function verify() {
  var x = document.getElementById("floatingInput").value;
  var y = document.getElementById("myPass").value;
  if (x == "RihanAli@gmail.com" && y == "password") {
    console.log("Verified...");
    alert("Veried...");
  } else {
    console.log("Try again...");
  }
  console.log("Username : "+ x +"\nPassword : "+ y)
}