<?php

$host = "localhost";
$dbname = "belle-full db";
$username = "root";
$password = "";

$mysqli = new mysqli(
hostname:$host, 
username:$username,
password: $password, 
database:$dbname);

if ($mysqli->connect_errno){
    die("Connection error". $mysqli->connect_error);
}

// print_r($_POST);
return $mysqli;
