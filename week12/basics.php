<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>hello world</h1>

    <?php
    #  comments can be done using a hash
    // comments can be done using a double forward slash
    /**
     * or like this!
     */

    $name = "Ahmed";

    echo "Hello {$name}", "<h1>hello {$name}</h1>"; //double quotes (can pass variables)
    // echo "Hello " . $name . '<br>'; // string concatenation

    echo 'Hello <h1>hello {$name}</h1>'; //single quotes (cannot pass variables)



    //============ Operators ============//
    //? Arithmetic ==> + - * / %
    //? Assignment ==> += -= *= /= .=
    //? Comparison ==> == === != !== < <= > >=

    //============ IF ============//

    echo "<br>";
    $a = 15;
    $b = "16";

    if ($a == $b) {
        echo "condition is true";
        $a++; //increment operator
        ++$a; //increment operator
    } elseif ($a == $b || $a != $b) {
        echo "this condition will never be true";
    } else {
        echo "condition is false";
    }

    //============ Switch ============//
    $role = "Employee";
    echo "<br>";
    switch ($role) {
        case 'admin':
            echo "Welcome admin";
            break;
        case "visitor":
            echo "Welcome visitor";
            break;
        default:
            echo "user has no role!";
    }

    //============ Arrays ============//
    echo "<br>";

    $cars = array("BMW", "Audi", 1.3, 2);

    echo $cars[1], '<br>';
    //============ loops ============//
    //? => for:

    //? => foreach:

    foreach ($cars as $car) {
        echo $car, " ";
    }

    //? => While
    while ($a <= 10) {
    }

    //? => do-while
    do {
    } while ($a <= 10);


    //============ Functions ============//
    $func = function ($a, $b) {
    }
    ?>


</body>

</html>