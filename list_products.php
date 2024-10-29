<?php

$mysqli = new mysqli("localhost", "root", "", "produtos");

if($mysqli->connect_error){
    die("Falha na conexão: ". $mysqli->connect_error);
}

$result = $mysqli->query("SELECT * FROM produtos");

$products = [];
while($row = $result->fetch_assoc()){
    $products[] = $row;
}
echo json_encode($products);
?>