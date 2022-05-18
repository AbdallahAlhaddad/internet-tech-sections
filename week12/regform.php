<?php

require('connect.php');

if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['pwd']) && isset($_POST['pwd-repeat'])) {
  if ($_POST['pwd'] === $_POST['pwd-repeat']) {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $pass = $_POST['pwd'];

    $sql = "INSERT INTO users (name, Email, password) VALUES ('$name', '$email', '$pass')";

    //check 
    if (mysqli_query($con, $sql)) {
      header("location:login.html");
    } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($con);
    }
    mysqli_close($con);
  } else {
    echo "<script type='text/javascript'>alert('please enter the right password')</script>";
  }
}
