<?php 

    require_once '../dbconnect.php';

    $student = file_get_contents("php://input");
    $novi = json_decode($student,true);
    
    $ime = $novi['ime'];
    $prezime = $novi['prezime'];
    $indeks = $novi['indeks'];
    $lozinka = $novi['lozinka'];
    $adresa = $novi['adresa'];
    $pol = $novi['pol'];
    
   
  
    
    if(isset($student) && !empty($student)) {
         if(!preg_match("/^([a-zA-Z ćčČĆ]{3,30}+)$/",$ime) || !preg_match("/^([a-zA-Z ćčČĆ]{3,30}+)$/",$prezime) ||
    strlen($lozinka) < '6'  || !preg_match("#[0-9]+#",$lozinka) ||
    !preg_match("#[A-Z]+#",$lozinka) || !preg_match("#[a-z]+#",$lozinka)){
        http_response_code(400);
        echo "Uneti podaci nisu validni.";
    } else {

    $lozinkaHash = password_hash($lozinka, PASSWORD_DEFAULT);

    $upit = "INSERT INTO student (ime,prezime,indeks,adresa,pol,lozinka) VALUES 
    ('$ime', '$prezime','$indeks','$adresa', '$pol','$lozinkaHash')";

    if(mysqli_query($conn, $upit)) {
        http_response_code(201);
        
        $student = [
        'ime' => $ime,
        'prezime' => $prezime,
        'indeks' => $indeks,
	'adresa' => $adresa,
        'pol' => $pol,
        'lozinka' => $lozinkaHash,
          ];
        echo json_encode($student);
    }
    else {
        http_response_code(404);
        echo "Indeks koji ste uneli je zauzeta.";
   }
  }
}
else {
    http_response_code(422);
}

?>