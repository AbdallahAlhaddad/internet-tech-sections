
<?php

$con = mysqli_connect("localhost", "root", "", "mydb");

// Check connection
if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}


// $sql = "INSERT INTO `users` (`id`, `email`, `password`) VALUES (NULL, 'mohamed@gmail.com', 'mohamed')";

// if (mysqli_query($con, $sql)) {
//   echo "New record created successfully";
// } else {
//   echo "Error: " . $sql . "<br>" . mysqli_error($con);
// }

?> 