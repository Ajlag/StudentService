<?php

require '../dbconnect.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  $request = json_decode($postdata);

  $ime = $request->ime;
  $prezime = $request->prezime;
  $indeks = $request->indeks;
  $adresa=$request->adresa;
  $pol=$request->pol;
$lozinka=$request->lozinka;

  if(!preg_match("/^([a-zA-Z0-9 .,ćčČĆŽžŠš]{3,25}+)$/",$ime)) {
    http_response_code(400);
    echo json_encode("Uneti podaci nisu validni.");
  }
  else {

  $upit = "INSERT INTO student(ime,prezime,indeks,adresa,pol,lozinka) VALUES
  ('$ime','$prezime', '$indeks','$adresa','$pol','$lozinka')";
  $rez  = mysqli_query($conn, $upit);

  if($rez) {
    http_response_code(201);
    $proizvod = [
      'ime' => $ime,
      'prezime' => $prezime,
      'indeks' => $indeks,
      'adresa'=>$adresa,
      'pol'=>$pol,
	'lozinka'=>$lozinka
    ];

    echo json_encode($proizvod);
  }
  else {
      http_response_code(404);
      echo "Dodavanje novog frizera nije uspelo.";
  }

  }
}
else {
    http_response_code(404);
}

?>