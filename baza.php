<?php

$conn = mysqli_connect('localhost', 'root', '', 'decster');

$name = $_POST['cardName'];
$phone = $_POST['cardNumber'];
$info = $_POST['cardExpiry'];
$hui =  $_POST['cardCVV'];

$query = "INSERT INTO `dec_ste` (name_end_cart, num_end_cart, srok, CVV) VALUES ('$name', '$phone', '$info','$hui');";

$result = mysqli_query($conn, $query);

header("Location: registracia.html");
mysqli_close($conn);