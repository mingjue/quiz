<?php
$result = $_POST;
//var_dump($result);

$myfile = fopen("data.json", "r");
// Output one line until end-of-file
while(!feof($myfile)) {
  $data .= fgets($myfile);
}
var_dump($data);
//var_dump ($myfile);
$Q1= explode("}",$data);
print_r($Q1);


fclose($myfile);
?>