<?php

require '../dbconnect.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  $request = json_decode($postdata);

  $idOcene = $request->idOcene;
  $nazivPredmeta= $request->nazivPredmeta;
  $datum = $request->datum;
  $ocena = $request->ocena;
  $opis = $request->opis;
  $indeks = $request->indeks;
  
  if(!preg_match("/^([a-zA-Z0-9. ćčČĆŽžŠš]{3,25}+)$/",$ime)) {
    http_response_code(400);
    echo json_encode("Uneti podaci nisu validni.");
  }
  else {

  $upit = "UPDATE student SET `nazivPredmeta`='$nazivPredmeta',  `datum`='$datum',`ocena`='$ocena',`opis`='$opis'  WHERE `idOcene` = '{$idOcene}'";
  $rez  = mysqli_query($conn, $upit);

  if($rez) {
    http_response_code(200);
  }
  else {
      http_response_code(404);
      echo "Izmena ocene nije uspela.";
   }
  }
}
else {
    http_response_code(404);
}

?>