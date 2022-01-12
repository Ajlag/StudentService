<?php

require '../dbconnect.php';

$indeks = $_GET['indeks'];

if(!$indeks) {
    return http_response_code(400);
}

else {
   $upit = "SELECT * FROM student WHERE indeks = '$indeks' LIMIT 1";
   $rez = mysqli_query($conn, $upit);
   if($rez) {
       $current = mysqli_fetch_assoc($rez);
       http_response_code(200);
       echo json_encode($current);
   }
   else {
       http_response_code(404);
   }
}
?>