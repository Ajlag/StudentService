<?php

require '../dbconnect.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  $request = json_decode($postdata);

  $ime = $request->ime;
  $prezime= $request->prezime;
  $indeks = $request->indeks;
  $adresa = $request->adresa;
  $pol = $request->pol;
  $lozinka = $request->lozinka;
  
  if(!preg_match("/^([a-zA-Z0-9. ćčČĆŽžŠš]{3,25}+)$/",$ime)) {
    http_response_code(400);
    echo json_encode("Uneti podaci nisu validni.");
  }
  else {

  $upit = "UPDATE student SET `ime`='$ime',  `prezime`='$prezime',`adresa`='$adresa',`lozinka`='$lozinka'  WHERE `indeks` = '{$indeks}'";
  $rez  = mysqli_query($conn, $upit);

  if($rez) {
    http_response_code(200);
  }
  else {
      http_response_code(404);
      echo "Izmena studenta nije uspela.";
   }
  }
}
else {
    http_response_code(404);
}

?>