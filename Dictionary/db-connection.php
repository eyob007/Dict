<?php
$db = new PDO("mysql:dbname=dictionary;host=localhost", "BigWords", "Rconfusing");
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>