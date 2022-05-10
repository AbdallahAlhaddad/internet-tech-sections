<?php

require('connect.php');
//variables 
$name = "";
$email = "";
$pass = "";

// Assigning POST values to variables.

if (isset($_POST['submit'])) {
  if ($_POST['psw'] === $_POST['psw-repeat']) {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $pass = $_POST['psw'];
    $pswrepeat = $_POST['psw-repeat'];
    $sql = "INSERT INTO u_register (name, Email, password,RepetPass)VALUES ('$name', '$email', '$pass',$pswrepeat)";
    //check 
    if (mysqli_query($con, $sql)) {
      header("location:login.html");
      echo "<br>" . "New record created successfully";
    } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($con);
    }
    mysqli_close($con);
  } else {
    echo "<script type='text/javascript'>alert('pleas enter the right password')</script>";
  }
}
