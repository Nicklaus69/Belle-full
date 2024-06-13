<?php


$mysqli = require __DIR__ . "/feedback-db.php";
$sql = "INSERT INTO customer (name, feedback)
VALUES (?,?)";
$stmt = $mysqli->stmt_init();

if (! $stmt->prepare($sql)) {
    die("SQL error:" . $mysqli->error);
}


$stmt->bind_param("ss",
 $_POST["name"],
 $_POST["feedback"]);
 
$stmt->execute();
    header("location: index.html");
    exit;
