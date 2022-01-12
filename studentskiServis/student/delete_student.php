<?php

require '../dbconnect.php';

$id = ($_GET['id'] !== null && (string)$_GET['id'])? mysqli_real_escape_string($conn, (string)$_GET['id']) : false;

if(!$id)
{
  return http_response_code(400);
}

$sql = "DELETE FROM `student` WHERE `indeks`='{$id}' LIMIT 1";

if(mysqli_query($conn, $sql))
{
  http_response_code(204);
}
else
{
  return http_response_code(422);
}


?>