<?php

if ( ! preg_match("/[0-9]/" , $_POST["password"])){
    die("Password must contain at least one number");
}

$password_hash = password_hash($_POST["password"], PASSWORD_DEFAULT);

$mysqli = require __DIR__ . "/sign-database.php";

// this must match with the form and mainly the database (input component)
$sql = "INSERT INTO user (name, number, adress, password_hash)
VALUES (?,?,?,?)";
$stmt = $mysqli->stmt_init();

if (! $stmt->prepare($sql)) {
    die("SQL error:" . $mysqli->error);
}

$stmt->bind_param("siss",
 $_POST["name"],
 $_POST["number"],
 $_POST["adress"],
 $password_hash);

$stmt->execute();
    header("location: index.html");
    exit;




