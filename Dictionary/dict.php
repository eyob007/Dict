<?php
require_once "./db-connection.php";
$s=$_GET['s'];

$sql='SELECT * FROM entries WHERE word = :word';
$def= $db->prepare($sql);
$def->execute(array(':word'=>$s));
$defs=$def->fetchAll();
print json_encode($defs);
?>