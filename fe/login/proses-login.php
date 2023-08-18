<!-- proses login php -->
<?php 
if (isset($_POST['login'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];
    $data = array(
        'email' => $email,
        'password' => $password
    );
    $json_data = json_encode($data);
    $api_url = 'localhost:8000/login';
    $ch = curl_init($api_url);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_POSTFIELDS, $json_data);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: applications/json',
        'Content-Length: ' . strlen($json_data)
    ));

    $response = curl_exec($ch);
    curl_close($ch);
    $response_data = json_decode($response, true);
    if ($response_data && isset($response_data['message'])) {
        echo "<p>Pesan dari server: ". $response_data['message']."</p>";
    } else {
        echo "<p>Tidak dapat mengurai response dari server </p>";
    }
}

?>