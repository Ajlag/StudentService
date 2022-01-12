<?php

require '../dbconnect.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
    $novi = json_decode($postdata);
    $ime =   $novi->ime;
    $prezime = $novi->prezime;
	$indeks =$novi->indeks;
    $adresa = $novi->adresa;
    $pol = $novi->pol;
    
    if(!preg_match("/^([a-zA-Z ćčČĆ]{3,30}+)$/",$ime) || !preg_match("/^([a-zA-Z ćčČĆ]{3,30}+)$/",$prezime)){
        http_response_code(400);
        echo "Uneti podaci nisu validni,Proverite adresu.";
    }
    else {
  
        $upit = "UPDATE `student` SET `ime` = '$ime', `prezime`='$prezime', `adresa`='$adresa', `pol`='$pol'
        WHERE `indeks` = '{$indeks}' LIMIT 1";
        $rez = mysqli_query($conn, $upit);
        if($rez) {
            http_response_code(200);
             echo json_encode("Korisnik promenjen.");
        }
        else {
            echo json_encode("Izmena nije uspela.");
            http_response_code(400);
        }
    }

}
else {
    http_response_code(422);
}


?>