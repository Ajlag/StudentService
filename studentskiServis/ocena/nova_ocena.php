<?php

require '../dbconnect.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
	$require=json_decode($postdata);
	$nazivPredmeta = $require->nazivPredmeta;
	$datum=$require->datum;
	$ocena= $require->ocena;
	$opis= $require->opisOcene;
	$indeks=$require->indeks;
	$idOcene =$require->idOcene;
	
	if(!preg_match("/^([a-zA-Z0-9 .ćĆčČžŽšŠđĐ]{3,25}+)$/",$nazivPredmeta)){
		http_response_code(400);
		echo json_encode("Uneti podaci nisu validni.");
	}
	
	else
	{
		$upit ="INSERT INTO ocena(nazivPredmeta,datum,ocena,opisOcene,idOcene,indeks) VALUES('$nazivPredmeta','$datum','$ocena','$opis','$idOcene','$indeks')";
		$rez = mysqli_query($conn,$upit);
		
		if($rez){
			http_response_code(201);
			$ocena=[
			'nazivPredmeta'=> $nazivPredmeta,
			'datum'=>$datum,
			'ocena'=>$ocena,
			'idOcene'=> mysqli_insert_id($conn),
			'opisOcene'=>$opis,
			'indeks'=>$indeks
			];
			
			echo json_encode($ocena);
		}
		else
		{
			http_response_code(404);
			echo "Dodavanje nove ocene nije uspelo";
			
		}
		
	}
}
else
{
	http_response_code(404);
}
?>