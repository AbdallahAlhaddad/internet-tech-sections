<?php

require('connect.php'); //gets $con

// session_start();


if (isset($_POST['email']) && isset($_POST['pwd'])) {

    // Assigning POST values to variables.
    $email = $_POST['email'];
    $password = $_POST['pwd'];

    // CHECK FOR THE RECORD FROM TABLE
    $query = "SELECT * FROM users WHERE email='$email' and password='$password' ";

    $result = mysqli_query($con, $query); //or die(mysqli_error($con));

    $count = mysqli_num_rows($result);

    if ($count > 0) {

        // $_SESSION["email"] = $email;

        header("location:dashboard.php");
    } else {
        header("location:regform.html"); //go to register form
    }
}
