<!-- proses login php -->
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Buat data yang akan dikirimkan ke API login
    $login_data = array(
        "email" => $email,
        "password" => $password
    );

    // Konversi data menjadi format JSON
    $json_data = json_encode($login_data);

    // Konfigurasi cURL untuk melakukan request ke API login
    $api_url = "http://localhost:8000/login";
    $ch = curl_init($api_url);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_POSTFIELDS, $json_data);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        "Content-Type: application/json",
        "Content-Length: " . strlen($json_data)
    ));

    // Eksekusi cURL request
    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    // Cek response dari API
    if ($http_code == 200) {
        // Berhasil login, arahkan ke halaman lain atau tampilkan pesan
        echo "Login berhasil!";
    } elseif ($http_code == 400) {
        // Password salah, tampilkan pesan
        $response_data = json_decode($response, true);
        echo $response_data["message"];
    } else {
        // Tidak dapat terhubung ke API atau response tidak valid
        echo "Terjadi masalah saat proses login.";
    }
}
?>
