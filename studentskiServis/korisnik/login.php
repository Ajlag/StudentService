<?php

require_once '../dbconnect.php';

    $student = file_get_contents("php://input");
    $info = json_decode($student,true);

    $indeks = $info['indeks'];
    $lozinka = $info['lozinka'];

    if(isset($student) && !empty($student)) {

    $upit = "SELECT * FROM student WHERE indeks='$indeks'";

    $rez = mysqli_query($conn, $upit);

    if($rez) {

    if(mysqli_num_rows($rez)===1) {
        $row = mysqli_fetch_assoc($rez);
        if(password_verify($lozinka, $row['lozinka'])) {
            $user['indeks'] = $row['indeks'];
            
            http_response_code(200);
            echo json_encode($user);

            mysqli_close($conn);
        }
        else {
            http_response_code(400);
            echo "Lozinka koju ste uneli nije ispravna.";
        }
    } else {
        http_response_code(400);
        echo "Korisnik ne postoji.";
    }
} else {
    http_response_code(404);
}
}
else {
    http_response_code(422);
}

?>